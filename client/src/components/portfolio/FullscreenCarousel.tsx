import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Sparkles,
} from "lucide-react";

interface FullscreenCarouselProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  title: string;
  onClose: () => void;
}

const VIEW_TITLES: Record<string, string> = {
  rentals_01_insights: "Fleet Performance & Revenue Insights",
  rentals_02_contract_detail: "Rental Agreement & Vehicle Inspection",
  rentals_03_contracts_list: "Active Bookings & Directory",
  rentals_04_dashboard: "Fleet Availability Overview",
  restaurant_05_transactions: "POS Transactions & Receipts Audit",
  restaurant_06_reports: "Kitchen Metrics & Shift Reports",
  restaurant_07_floor: "Dining Floor & Table Plan",
  restaurant_08_pos_pin: "PIN-Authenticated POS Terminal",
  ecommerce_09_studio_dashboard: "Merchant Back-Office & Metrics",
  ecommerce_10_studio_catalogue: "Inventory Catalogue & Categories",
  ecommerce_11_website_homepage: "Curated Storefront Experience",
  ecommerce_12_product_page: "Product Detail & Checkout Flow",
  ev_13_financial_reports: "Revenue & Tariff Financials",
  ev_14_arrivals_queue: "Station Arrivals & Bay Queue",
  ev_15_locations_chargers: "Hub Network & Hardware Telemetry",
  ev_16_charging_sessions: "Live Charging Sessions & kWh Metering",
};

function getFilenameLabel(src: string): string {
  const clean = src.split("/").pop()?.replace(/\.[^/.]+$/, "") || "";
  return VIEW_TITLES[clean] || clean.replace(/^[a-z]+_\d+_/, "").replace(/_/g, " ");
}

export function FullscreenCarousel({
  isOpen,
  images,
  initialIndex = 0,
  title,
  onClose,
}: FullscreenCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  // Touch tracking for swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sync index on open
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
    }
  }, [isOpen, initialIndex]);

  const total = images.length;

  const handleNext = useCallback(() => {
    setSlideDirection("right");
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setSlideDirection("left");
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleGoTo = (index: number) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "right" : "left");
    setIsZoomed(false);
    setCurrentIndex(index);
  };

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Handle native full screen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> show next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> show previous
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || images.length === 0) return null;

  const currentSrc = images[currentIndex];
  const label = getFilenameLabel(currentSrc);

  return (
    <div
      className="fullscreen-carousel-portal"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image gallery viewer`}
    >
      {/* Dark backdrop blur */}
      <div
        className="fullscreen-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Header bar */}
      <header className="fullscreen-header">
        <div className="fullscreen-header-left">
          <span className="fullscreen-project-badge">{title}</span>
          <span className="fullscreen-counter">
            View <strong>{currentIndex + 1}</strong> of {total}
          </span>
          <span className="fullscreen-infinite-pill" title="Infinite loop enabled">
            <Sparkles size={12} className="inline-block mr-1" />
            Infinity Loop
          </span>
        </div>

        <div className="fullscreen-header-right">
          <button
            type="button"
            className="fullscreen-icon-btn"
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? "Reset zoom" : "Zoom view"}
            aria-label={isZoomed ? "Reset zoom" : "Zoom view"}
          >
            {isZoomed ? <ZoomOut size={17} /> : <ZoomIn size={17} />}
          </button>

          <button
            type="button"
            className="fullscreen-icon-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>

          <button
            type="button"
            className="fullscreen-close-btn"
            onClick={onClose}
            title="Close viewer (Esc)"
            aria-label="Close viewer"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main viewport stage */}
      <div
        className="fullscreen-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous button (wraps around to last image) */}
        <button
          type="button"
          className="fullscreen-nav-btn prev"
          onClick={handlePrev}
          title="Previous view (wraps around)"
          aria-label="Previous view"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Active image display with smooth scale & zoom */}
        <div
          className={`fullscreen-image-wrapper ${isZoomed ? "zoomed" : ""}`}
          onClick={() => setIsZoomed(!isZoomed)}
          title="Click to toggle zoom"
        >
          <img
            key={currentSrc}
            src={currentSrc}
            alt={`${title} — ${label} (View ${currentIndex + 1})`}
            className={`fullscreen-active-image slide-${slideDirection}`}
            draggable={false}
          />
        </div>

        {/* Next button (wraps around to first image) */}
        <button
          type="button"
          className="fullscreen-nav-btn next"
          onClick={handleNext}
          title="Next view (wraps around)"
          aria-label="Next view"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Footer bar with caption & thumbnail carousel */}
      <footer className="fullscreen-footer">
        <div className="fullscreen-caption-row">
          <div className="fullscreen-caption-text">
            <span className="caption-tag">View 0{currentIndex + 1}</span>
            <span className="caption-title">{label}</span>
          </div>
          <div className="fullscreen-shortcuts-hint">
            <span>← / → arrow keys to loop</span>
            <span>·</span>
            <span>Click image to zoom</span>
            <span>·</span>
            <span>Esc to exit</span>
          </div>
        </div>

        {/* Thumbnail carousel strip */}
        <div className="fullscreen-thumbnail-strip" role="tablist">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                type="button"
                key={img}
                role="tab"
                aria-selected={isActive}
                aria-label={`Jump to view ${idx + 1}: ${getFilenameLabel(img)}`}
                className={`fullscreen-thumb-btn ${isActive ? "active" : ""}`}
                onClick={() => handleGoTo(idx)}
              >
                <img src={img} alt="" aria-hidden="true" />
                <span className="thumb-idx">0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </footer>
    </div>
  );
}

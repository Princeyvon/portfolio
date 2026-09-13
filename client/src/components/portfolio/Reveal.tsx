import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Reveal({ children, className = "", id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      element.classList.add("is-visible");
    }
  }, []);

  return (
    <div ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

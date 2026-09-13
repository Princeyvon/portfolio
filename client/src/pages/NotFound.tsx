import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[var(--bg)] text-[var(--ink)]">
      <div className="w-full max-w-md p-10 border border-[var(--line)] bg-[var(--surface)] text-center shadow-lg">
        <span className="eyebrow block mb-4">Error / 404</span>

        <h1 className="text-6xl font-normal font-serif tracking-tight mb-3 text-[var(--ink)]">
          404
        </h1>

        <h2 className="text-xl font-medium tracking-tight mb-4 text-[var(--ink)]">
          Page Not Found
        </h2>

        <p className="text-[var(--muted)] text-sm mb-8 leading-relaxed">
          The requested page could not be located. It may have moved or no longer
          exists.
        </p>

        <button
          type="button"
          onClick={handleGoHome}
          className="arrow-link inline-flex items-center gap-2 cursor-pointer font-bold text-sm"
        >
          Return to portfolio
          <span className="arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}

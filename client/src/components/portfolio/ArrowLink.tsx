import React from "react";

interface ArrowLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function ArrowLink({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
}: ArrowLinkProps) {
  const content = (
    <>
      {children}
      <span className="arrow" aria-hidden="true">↗</span>
    </>
  );

  if (href) {
    return (
      <a
        className={`arrow-link ${className}`}
        href={href}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`arrow-link ${className}`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

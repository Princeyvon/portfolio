interface AvailabilityBannerProps {
  statusText?: string;
  note?: string;
}

export function AvailabilityBanner({
  statusText = "Open to thoughtful collaborations",
  note = "Currently studying at Georgetown University Qatar · Class of 2027",
}: AvailabilityBannerProps) {
  return (
    <div className="availability">
      <div className="content-wrap availability-inner">
        <div className="status">
          <span className="status-dot" aria-hidden="true" /> {statusText}
        </div>
        <p>{note}</p>
      </div>
    </div>
  );
}

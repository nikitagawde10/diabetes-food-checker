export function ResultSkeleton() {
  return (
    <div className="result-card skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title shimmer" />
        <div className="skeleton-tag shimmer" />
      </div>

      <div className="skeleton-context shimmer" />

      <div className="skeleton-main">
        <div className="skeleton-box shimmer" />
        <div className="skeleton-box shimmer" />
        <div className="skeleton-box shimmer" />
        <div className="skeleton-gif shimmer" />
      </div>
    </div>
  );
}

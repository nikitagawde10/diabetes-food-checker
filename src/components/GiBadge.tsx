import React from "react";
import type { DiabetesSafetyTag, GiCategory } from "../types";

interface Props {
  gi: GiCategory;
  tag: DiabetesSafetyTag;
}

export const GiBadge: React.FC<Props> = ({ gi, tag }) => {
  const giColors: Record<GiCategory, string> = {
    low: "#22c55e", // green
    medium: "#eab308", // yellow
    high: "#ef4444", // red
    unknown: "#6b7280", // gray
  };

  const tagLabel: Record<DiabetesSafetyTag, string> = {
    good_choice: "Good choice",
    okay_in_moderation: "Okay in moderation",
    not_recommended: "Not recommended",
    unknown: "Unknown",
  };

  return (
    <div className="gi-badge">
      <span className="gi-chip" style={{ backgroundColor: giColors[gi] }}>
        GI: {gi.toUpperCase()}
      </span>
      <span className="tag-label">{tagLabel[tag]}</span>
    </div>
  );
};

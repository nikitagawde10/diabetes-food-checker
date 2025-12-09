import React from "react";
import type { DiabetesSafetyTag, GiCategory } from "../types";
import { TrendingUp } from "lucide-react";

interface Props {
  gi: GiCategory;
  tag: DiabetesSafetyTag;
}

export const GiBadge: React.FC<Props> = ({ gi, tag }) => {
  const getGiClass = (giCategory: GiCategory): string => {
    const classMap: Record<GiCategory, string> = {
      low: "gi-low",
      medium: "gi-medium",
      high: "gi-high",
      unknown: "gi-unknown",
    };
    return classMap[giCategory];
  };

  const tagLabel: Record<DiabetesSafetyTag, string> = {
    good_choice: "Good choice",
    okay_in_moderation: "Okay in moderation",
    not_recommended: "Not recommended",
    unknown: "Unknown",
  };

  return (
    <div className="gi-badge">
      <span className={`gi-chip ${getGiClass(gi)}`}>
        <TrendingUp className="gi-icon" />
        GI: {gi.toUpperCase()}
      </span>
      <span className="tag-label">{tagLabel[tag]}</span>
    </div>
  );
};

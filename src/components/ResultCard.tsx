import React, { useMemo } from "react";
import type { FoodAdvice } from "../types";
import { GiBadge } from "./GiBadge";
import {
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Utensils,
  Clock,
  Leaf,
} from "lucide-react";
import { GIF_POOL } from "./utils";

interface Props {
  result: FoodAdvice;
}

export const ResultCard: React.FC<Props> = ({ result }) => {
  const getTagIcon = () => {
    switch (result.diabetesSafetyTag) {
      case "good_choice":
        return <CheckCircle className="result-tag-icon" />;
      case "okay_in_moderation":
        return <AlertTriangle className="result-tag-icon" />;
      case "not_recommended":
        return <AlertCircle className="result-tag-icon" />;
      default:
        return <AlertCircle className="result-tag-icon" />;
    }
  };

  const getTagColor = () => {
    const colors = {
      good_choice: "#166534",
      okay_in_moderation: "#92400e",
      not_recommended: "#991b1b",
      unknown: "#4b5563",
    };
    return colors[result.diabetesSafetyTag];
  };

  const getTagLabel = () => {
    const labels = {
      good_choice: "Good Choice",
      okay_in_moderation: "Okay in Moderation",
      not_recommended: "Not Recommended",
      unknown: "Unknown",
    };
    return labels[result.diabetesSafetyTag];
  };

  const selectedGif = useMemo(() => {
    const pool = GIF_POOL[result.diabetesSafetyTag] ?? GIF_POOL.unknown;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [result.foodName, result.diabetesSafetyTag]);

  return (
    <div className="result-card">
      <header className="result-header">
        <div className="result-title-section">
          <h2>{result.foodName}</h2>
          <div className="result-tag" style={{ color: getTagColor() }}>
            {getTagIcon()}
            <span>{getTagLabel()}</span>
          </div>
        </div>
        <GiBadge gi={result.giCategory} tag={result.diabetesSafetyTag} />
      </header>

      <div className="context">{result.context}</div>

      <div className="result-main">
        <div className="info-column">
          <div className="info-boxes">
            <div className="info-box purple">
              <div className="info-box-header">
                <Utensils className="info-box-icon" />
                <strong>Best as</strong>
              </div>
              <p className="info-box-content">
                {result.recommendedUse === "main_meal"
                  ? "Main meal"
                  : result.recommendedUse === "snack"
                  ? "Snack"
                  : "Rare treat"}
              </p>
            </div>

            <div className="info-box blue">
              <div className="info-box-header">
                <span className="info-box-icon">🥄</span>
                <strong>Recommended portion</strong>
              </div>
              <p className="info-box-content">{result.recommendedPortion}</p>
            </div>

            <div className="info-box pink">
              <div className="info-box-header">
                <Clock className="info-box-icon" />
                <strong>Frequency</strong>
              </div>
              <p className="info-box-content">{result.frequencyAdvice}</p>
            </div>
          </div>
        </div>

        <div className="gif-column">
          <img
            src={selectedGif.src}
            alt={selectedGif.alt}
            className="result-gif"
            loading="lazy"
          />
        </div>
      </div>

      {result.betterAlternatives?.length > 0 && (
        <section className="alternatives">
          <h3>
            <Leaf className="alternatives-icon" />
            Better Alternatives
          </h3>
          <ul>
            {result.betterAlternatives.map((alt) => (
              <li key={alt.name}>
                <strong>{alt.name}:</strong> {alt.whyBetter}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

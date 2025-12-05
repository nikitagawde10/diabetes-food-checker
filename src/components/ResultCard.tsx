import React from "react";
import type { FoodAdvice } from "../types";
import { GiBadge } from "./GiBadge";
interface Props {
  result: FoodAdvice;
}

export const ResultCard: React.FC<Props> = ({ result }) => {
  const bgByTag: Record<FoodAdvice["diabetesSafetyTag"], string> = {
    good_choice: "#ecfdf3", // pastel green
    okay_in_moderation: "#fef9c3", // pastel yellow
    not_recommended: "#fee2e2", // pastel red
    unknown: "#e5e7eb",
  };

  return (
    <div
      className="result-card"
      style={{ backgroundColor: bgByTag[result.diabetesSafetyTag] }}
    >
      <header className="result-header">
        <h2>{result.foodName}</h2>
        <GiBadge gi={result.giCategory} tag={result.diabetesSafetyTag} />
      </header>

      <div className="result-main">
        <div className="info-column">
          <p className="context">{result.context}</p>

          <div className="line">
            <strong>Best as:</strong>{" "}
            {result.recommendedUse === "main_meal"
              ? "Main meal"
              : result.recommendedUse === "snack"
              ? "Snack"
              : "Rare treat"}
          </div>

          <div className="line">
            <strong>Recommended portion:</strong> {result.recommendedPortion}
          </div>
          <div className="line">
            <strong>Frequency:</strong> {result.frequencyAdvice}
          </div>
        </div>

        {/* Placeholder for future GIF column */}
        <div className="gif-column">
          {/* later: show Jungkook GIF based on result.diabetesSafetyTag */}
          <div className="gif-placeholder">
            {result.diabetesSafetyTag === "good_choice"
              ? "✅ Good choice"
              : result.diabetesSafetyTag === "okay_in_moderation"
              ? "🟡 Okay sometimes"
              : result.diabetesSafetyTag === "not_recommended"
              ? "❌ Avoid"
              : "🤔 Not sure"}
          </div>
        </div>
      </div>

      {result.betterAlternatives?.length > 0 && (
        <section className="alternatives">
          <h3>Better alternatives</h3>
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

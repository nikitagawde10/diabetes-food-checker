import React from "react";
import type { FoodAdvice } from "../types";
import { GiBadge } from "./GiBadge";
interface Props {
  result: FoodAdvice;
}

export const ResultCard: React.FC<Props> = ({ result }) => {
  console.log({ result });
  const bgByTag: Record<FoodAdvice["diabetesSafetyTag"], string> = {
    good_choice: "#ecfdf3", // pastel green
    okay_in_moderation: "#fef9c3", // pastel yellow
    not_recommended: "#fee2e2", // pastel red
    unknown: "#e5e7eb",
  };

  const gifByTag: Record<
    FoodAdvice["diabetesSafetyTag"],
    { src: string; alt: string }
  > = {
    good_choice: {
      src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXRoM2l0cHl3bTRlaThjd2V5OWRyejN4aGx5anlqZWdoOGV6ZzRkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKGLm7ksfrqtKRQ0Sy/giphy.gif",
      alt: "Yes, good choice",
    },
    okay_in_moderation: {
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHR4YnB3azhsdng1eHBseTlqZno3OXNxM3pldHZ2dGFkYjh0ZjY1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XBpEgheIVWnC8hwc46/giphy.gif",
      alt: "Eat in moderation",
    },
    not_recommended: {
      src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG80MmJhZ2w5Y212aWp1N3VvczRrZnh6eXZuZ3Uwc3FueDRlOTZzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0qfkcpaLuTYgJTS0kY/giphy.gif",
      alt: "No, not recommended",
    },
    unknown: {
      src: "https://tenor.com/lWTTjcv6Fsh.gif",
      alt: "Confused / unknown",
    },
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

        <div className="gif-column">
          <img
            src={gifByTag[result.diabetesSafetyTag].src}
            alt={gifByTag[result.diabetesSafetyTag].alt}
            className="result-gif"
            loading="lazy"
          />
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

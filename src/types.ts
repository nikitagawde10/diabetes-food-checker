export type GiCategory = "low" | "medium" | "high" | "unknown";
export type RecommendedUse = "main_meal" | "snack" | "rare_treat";
export type DiabetesSafetyTag =
  | "good_choice"
  | "okay_in_moderation"
  | "not_recommended"
  | "unknown";

export interface FoodAdvice {
  foodName: string;
  isSuitable: boolean;
  context: string;
  giCategory: GiCategory;
  recommendedUse: RecommendedUse;
  recommendedPortion: string;
  frequencyAdvice: string;
  betterAlternatives: {
    name: string;
    whyBetter: string;
  }[];
  diabetesSafetyTag: DiabetesSafetyTag;
}

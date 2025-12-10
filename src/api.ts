import type { FoodAdvice } from "./types";
import { getCachedFoodAdvice, setCachedFoodAdvice } from "./apiCache";

export async function checkFood(foodName: string): Promise<FoodAdvice> {
  // 1. Try cache first (instant + free)
  const cached = getCachedFoodAdvice(foodName);
  if (cached) {
    return cached;
  }

  // 2. Fallback to API
  const res = await fetch("/api/food-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ foodName }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data: FoodAdvice = await res.json();

  // 3. Save result for next time
  setCachedFoodAdvice(foodName, data);

  return data;
}

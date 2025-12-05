import { FoodAdvice } from "./types";

export async function checkFood(foodName: string): Promise<FoodAdvice> {
  const res = await fetch("/api/food-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ foodName }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

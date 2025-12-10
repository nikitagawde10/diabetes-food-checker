// apiCache.ts
import type { FoodAdvice } from "./types";

const CACHE_KEY = "food-check-cache-v1";

type CacheMap = Record<string, FoodAdvice>;

let memoryCache: CacheMap = {};

// load existing cache from localStorage once
(function initCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      memoryCache = JSON.parse(raw);
    }
  } catch {
    // ignore parse errors
  }
})();

function normalizeKey(foodName: string) {
  return foodName.trim().toLowerCase();
}

export function getCachedFoodAdvice(foodName: string): FoodAdvice | null {
  const key = normalizeKey(foodName);
  return memoryCache[key] ?? null;
}

export function setCachedFoodAdvice(foodName: string, value: FoodAdvice) {
  const key = normalizeKey(foodName);
  memoryCache[key] = value;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(memoryCache));
  } catch {
    // storage might be full, ignore
  }
}

import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ResultCard } from "./components/ResultCard";
import { checkFood } from "./api";
import { FoodAdvice } from "./types";

const App: React.FC = () => {
  const [result, setResult] = useState<FoodAdvice | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (foodName: string) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await checkFood(foodName);
      setResult(res);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="hero">
        <h1>Diabetes Food Checker</h1>
        <p>
          Type any Indian food or snack to see if it&apos;s diabetes-friendly,
          its GI category, and safe portion sizes.
        </p>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </header>

      <main className="main">
        {error && <div className="error">{error}</div>}
        {!result && !loading && !error && (
          <section className="homepage-info">
            {/* This is your “quick list” section like in the screenshot */}
            <h2>Quick Guide</h2>
            <div className="info-grid">
              <div className="info-card good">
                <h3>Low GI – Eat Freely</h3>
                <p>Green veggies, salads, sprouts, dal with veggies, etc.</p>
              </div>
              <div className="info-card medium">
                <h3>Medium GI – Portion Control</h3>
                <p>
                  Phulka roti, idli with sambar, poha with peanuts, upma with
                  veggies…
                </p>
              </div>
              <div className="info-card high">
                <h3>High GI – Rare Treat</h3>
                <p>
                  Puranpoli, jalebi, rasmalai, motichur laddoo, white bread,
                  sugary drinks…
                </p>
              </div>
            </div>
          </section>
        )}

        {result && <ResultCard result={result} />}
      </main>
    </div>
  );
};

export default App;

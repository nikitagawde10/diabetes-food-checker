import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ResultCard } from "./components/ResultCard";
import { checkFood } from "./api";
import { FoodAdvice } from "./types";
import { CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import "./App.css";
import { ResultSkeleton } from "./components/ResultSkeleton";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginScreen } from "./components/login/loginPage";

const App: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();

  const [result, setResult] = useState<FoodAdvice | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }
  if (!isAuthenticated) {
    return <LoginScreen login={loginWithRedirect} />;
  }
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
      <div className="user-info">
        <span>Welcome, {user?.name}</span>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="logout-button"
        >
          Logout
        </button>
      </div>
      <header className="hero">
        <div className="hero-title-wrapper">
          <svg
            className="hero-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <h1>Diabetes Food Checker</h1>
        </div>
        <p>
          Type any food item or snack to see if it&apos;s diabetes-friendly, its
          GI category, and safe portion sizes.
        </p>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </header>

      <main className="main">
        {error && (
          <div className="error">
            <AlertCircle className="error-icon" />
            <span>{error}</span>
          </div>
        )}

        {!result && !loading && !error && (
          <section className="homepage-info">
            <h2>Quick Guide</h2>
            <div className="info-grid">
              <div className="info-card good">
                <h3>
                  <CheckCircle className="info-card-icon" />
                  Low GI – Eat Freely
                </h3>
                <p>Green veggies, salads, sprouts, dal with veggies, etc.</p>
              </div>
              <div className="info-card medium">
                <h3>
                  <AlertTriangle className="info-card-icon" />
                  Medium GI – Portion Control
                </h3>
                <p>
                  Phulka roti, idli with sambar, poha with peanuts, upma with
                  veggies…
                </p>
              </div>
              <div className="info-card high">
                <h3>
                  <AlertCircle className="info-card-icon" />
                  High GI – Rare Treat
                </h3>
                <p>
                  Puranpoli, jalebi, rasmalai, motichur laddoo, white bread,
                  sugary drinks…
                </p>
              </div>
            </div>
          </section>
        )}

        {loading && <ResultSkeleton />}
        {!loading && result && <ResultCard result={result} />}
      </main>
    </div>
  );
};

export default App;

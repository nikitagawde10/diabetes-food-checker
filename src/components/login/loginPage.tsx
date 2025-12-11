// src/components/LoginScreen.tsx
import React from "react";
import "./login.css";
interface LoginScreenProps {
  login: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ login }) => {
  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="hero-icon-wrapper">
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
        </div>

        <h1 className="login-title">Diabetes Food Checker</h1>
        <p className="login-subtitle">Please sign in to access the app</p>

        <button onClick={login} className="sign-in-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

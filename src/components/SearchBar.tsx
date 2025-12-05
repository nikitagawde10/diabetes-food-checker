import React, { useState, FormEvent } from "react";

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
}

export const SearchBar: React.FC<Props> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Type a food name – e.g. 'puranpoli', 'idli sambar'..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Search"}
      </button>
    </form>
  );
};

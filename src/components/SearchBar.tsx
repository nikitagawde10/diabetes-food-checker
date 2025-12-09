import React, { useState } from "react";
import { Search } from "lucide-react";

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
}

export const SearchBar: React.FC<Props> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    onSearch(query.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!query.trim() || loading) return;
      onSearch(query.trim());
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <input
          type="text"
          placeholder="e.g. 'puranpoli', 'idli sambar', 'mango'..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button
          onClick={() =>
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="loading-spinner" />
              <span>Checking...</span>
            </>
          ) : (
            <>
              <Search className="search-icon" />
              <span>Search</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

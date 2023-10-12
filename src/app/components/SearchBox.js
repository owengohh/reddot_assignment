"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import axios from "axios";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  // console.log(query);
  const handleSearch = async () => {
    const response = await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((response) => {
        console.log(response.data);
        onSearch(response.data);
      })
      .catch((e) => {
        console.log(e);
        onSearch(null);
      });
  };

  return (
    <div className="search-box">
      <div className="Input">
        <input
          className="search-box-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="word"
        />
        <label for="input" class="Input-label">
          Word
        </label>
      </div>
      <p>
        <button onClick={handleSearch} className="search-box-button">
          Search
        </button>
      </p>
    </div>
  );
}

export default SearchBox;

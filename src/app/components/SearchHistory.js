"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";

function SearchHistory({ history }) {
  console.log(history);

  return (
    <div className="search-history">
      <h2>Search History</h2>
      {history.length > 0 ? (
        <ol>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <p>No search history found.</p>
      )}
    </div>
  );
}

export default SearchHistory;

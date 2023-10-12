"use client"; // This is a client component 👈🏽

import "./globals.css";
import { Inter } from "next/font/google";
import { useClient } from "react-fetching-library";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchHistory from "./components/SearchHistory";
import SearchResult from "./components/SearchResult";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { query } = useClient();
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      setResult(null);
      return;
    }
    setResult(searchTerm[0]);
    setHistory((prevHistory) => [...prevHistory, searchTerm[0].word]);
    // console.log(history);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container-top">
          <h1 className="title">Dictionary App</h1>
        </div>
        <div className="container">
          <SearchBox onSearch={handleSearch} />
          <SearchResult result={result} />
          <SearchHistory history={history} />
          {children}
        </div>
      </body>
    </html>
  );
}

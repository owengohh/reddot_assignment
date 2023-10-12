import React from "react";

function SearchResult({ result }) {
  // console.log(result[0].word);
  if (!result) {
    return (
      <div className="search-result">
        <h2>Search Results</h2>
        <p>No results found</p>
      </div>
    );
  }

  let meaning = [];
  let partOfSpeech = [];
  let word_meanings_keys = Object.keys(result.meanings);
  let phonetics = result.phonetics.map((phonetic) => phonetic.text);
  console.log(word_meanings_keys);
  for (let i = 0; i < word_meanings_keys.length; i++) {
    partOfSpeech.push(result.meanings[word_meanings_keys[i]].partOfSpeech);
    meaning.push(
      result.meanings[word_meanings_keys[i]].definitions[0].definition
    );
  }
  console.log(meaning);
  console.log(partOfSpeech);
  return (
    <div className="search-result">
      <h2>Search Results</h2>
      <h2>{result.word} </h2>
      <p>{phonetics}</p>
      {word_meanings_keys.map((key, index) => (
        <p key={index}>
          <span style={{ fontStyle: "italic" }}>
            {result.meanings[key].partOfSpeech}
          </span>{" "}
          <br />
          <strong>Definition:</strong>{" "}
          {result.meanings[key].definitions[0].definition}
        </p>
      ))}
    </div>
  );
}

export default SearchResult;

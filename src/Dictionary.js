import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        if (error.response.request.status === 404)
          alert("Not a valid search term");
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row ">
          <div className="col-9">
            <input
              className="SearchField form-control shadow-sm"
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary shadow-sm form-control">
              Search
            </button>
          </div>
        </div>
      </form>

      <Results results={results} />
    </div>
  );
}

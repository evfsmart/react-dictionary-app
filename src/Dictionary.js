import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-9">
              <input
                className="SearchField form-control shadow-sm"
                type="search"
                defaultValue="Search for a word, e.g. 'flower'"
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
        <hr />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

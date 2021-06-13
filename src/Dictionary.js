import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    return alert(`Searching for ${keyword}`);
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
    </div>
  );
}

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by Emma Smart, open sourced on{" "}
      <a
        href="https://github.com/evfsmart/react-dictionary-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://happy-pasteur-869759.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
      .
    </div>
  );
}

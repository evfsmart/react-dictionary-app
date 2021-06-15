import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <i className="fas fa-volume-up" />
      </a>{" "}
      <span className="PhoneticsText">{props.phonetics.text}</span>
    </div>
  );
}

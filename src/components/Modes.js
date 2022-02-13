import React from "react";

export default function Modes(props) {
  function createMode(mode, index) {
    return (
      <p
        className="mode"
        key={index + 1}
        onClick={(event) => props.setMode(event.target.innerHTML)}
      >
        {mode}
      </p>
    );
  }

  return (
    <div className="mode-names">
      {Object.keys(props.timeframes).map((mode, index) =>
        createMode(mode, index)
      )}
    </div>
  );
}

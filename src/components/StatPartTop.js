import React from "react";

export default function StatPartTop(props) {
    return (
      <div className="stat-part-top">
        <h4 className="part-title" style={{ width: "50%" }}>
          {props.title}
        </h4>
        <p className="dots" style={{ width: "50%" }}>
          . . .
        </p>
      </div>
    );
}
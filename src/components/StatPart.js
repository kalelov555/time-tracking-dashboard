import React from "react";
import StatPartTop from "./StatPartTop";
import StatPartBot from "./StatPartBot";

export default function StatPart(props) {
    return (
      <div className="one-part-details">
        <StatPartTop title={props.title} />
        <StatPartBot curHours={props.curHours} prevHours={props.prevHours} />
      </div>
    );
}
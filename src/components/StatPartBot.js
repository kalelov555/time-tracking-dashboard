import React from "react";
import CurrentHours from "./CurrentHours";
import PreviousHours from "./PreviousHours";

export default function StatPartBot(props) {
    return (
      <div className="stat-part-bottom">
        <CurrentHours curHours={props.curHours} />
        <PreviousHours prevHours={props.prevHours} />
      </div>
    );
}
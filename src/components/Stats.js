import React from "react";
import StatPart from "./StatPart";

function createStatPart(part, mode) {
  const bgURL = require("../images/icon-" + part.title.toLowerCase().replace(/ /g, "-") + ".svg");

  console.log(bgURL);
  const bgc = {
    backgroundColor: part.backgroundColor,
    backgroundImage: `url(${bgURL})`,
    backgroundRepeat: "no-repeat",  
    backgroundPosition: "top 0 right 0",
  };

  return (
    <div className="col-4 one-part-outer-container">
      <div className="one-part-container" style={bgc}>
        <StatPart
          title={part.title}
          curHours={part.timeframes[mode].current}
          prevHours={part.timeframes[mode].previous}
        />
      </div>
    </div>
  );
}

function Stats(props) {
  return (
    <div className="stats-container">
      {props.statsArray.map((part) => {
        return createStatPart(part,  props.modeName);
      })}
      {/* {createStatPart(props.statsArray[3], props.modeName)} */}
    </div>
  );
}

export default Stats;

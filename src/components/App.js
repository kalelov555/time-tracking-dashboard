import React, { useState } from "react";
import Profile from "./Profile"
import Stats from "./Stats";
import statsPart from "../data.json";

function App() {
  const [mode, setMode] = useState("weekly");

  return <div className="container">
      <Profile statsArray ={statsPart} setMode={setMode} />
      <Stats statsArray = {statsPart} modeName={mode}/>
  </div>;
}

export default App;

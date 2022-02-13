import ProfileDetails from "./ProfileDetails";
import Modes from "./Modes";
import React from "react";

function Profile(props) {
  return (
    <div className="profile-container">
      <ProfileDetails />
      <Modes timeframes={props.statsArray[0].timeframes} setMode={props.setMode} />
    </div>
  );
}

export default Profile;
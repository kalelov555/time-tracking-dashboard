import React from "react";
const avatar = require("../images/image-jeremy.png");

function Avatar() {
  return (
    <img className="profile-avatar"
      alt="avatar"
      src={avatar}
    ></img>
  );
}

export default Avatar; 

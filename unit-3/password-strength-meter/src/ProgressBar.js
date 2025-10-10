import React from "react";

function ProgressBar() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <progress
        value="0"
        max="100"
        style={{ display: "block", margin: "10px auto", width: "80%" }}
      ></progress>
      <span>Very Weak</span>
    </div>
  );
}


export default ProgressBar;

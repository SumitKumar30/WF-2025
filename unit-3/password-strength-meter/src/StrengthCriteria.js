import React from "react";

function StrengthCriteria() {
  return (
    <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
      <div>Minimum 8 characters long</div>
      <div>Atleast 1 special character</div>
      <div>Atleast 1 number</div>
      <div>Atleast 1 capital letter</div>
    </div>
  );
}

export default StrengthCriteria;

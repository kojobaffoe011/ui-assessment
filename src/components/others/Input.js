import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className="medium regular"
      style={{
        padding: "8px 12px",
        border: "1px solid #EAEAEC",
        width: "100%",
      }}
    />
  );
};

export default Input;

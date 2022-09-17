import React from "react";

const Tag = (props) => {
  return (
    <div
      className="bg-success"
      style={{
        padding: "4px 8px",
        ...props.style,
      }}
    >
      <p className="white large bold">{props.text}</p>
    </div>
  );
};

export default Tag;

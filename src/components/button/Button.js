import React from "react";
import Flex from "../layout/Flex";

const Button = (props) => {
  const { children, append } = props;

  return (
    <Flex
      style={{
        width: "100%" || props.width,
        margin: props.margin || "initial",
        border: props.border || "initial",
      }}
      className={props.className}
    >
      {children && (
        <Flex
          jc={props.jc || "flex-start"}
          ai={props.ai || "center"}
          className="flex-grow bold small"
          style={{
            padding: props.padding || "8px 16px",
            backgroundColor: props.backgroundColor || "initial",
            backdropFilter: props.backdropFilter || "initial",
            border: props.border || "initial",
          }}
        >
          {children}
        </Flex>
      )}
      {append && (
        <Flex style={{ minWidth: "60px" }} jc="center" ai="center">
          {append}
        </Flex>
      )}
    </Flex>
  );
};

export default Button;

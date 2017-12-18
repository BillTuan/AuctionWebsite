import React from "react";
import NumericInput from "react-numeric-input";

const InputPrice = props => {
  return (
    <NumericInput
      value={props.value}
      precision={1}
      size={8}
      step={props.step}
      mobile={false}
      style={{
        wrap: {
          background: "#E2E2E2",
          boxShadow: "0 0 1px 1px #fff inset, 1px 1px 5px -1px #000",
          padding: "2px 2.26ex 2px 2px",
          borderRadius: "6px 3px 3px 6px",
          fontSize: 32
        },
        input: {
          borderRadius: "4px 2px 2px 4px",
          color: "#988869",
          padding: "0.1ex 1ex",
          border: "1px solid #ccc",
          marginRight: 4,
          display: "block",
          fontWeight: 100
        },
        "input:focus": {
          border: "1px inset #69C",
          outline: "none"
        },
        arrowUp: {
          borderBottomColor: "rgba(66, 54, 0, 0.63)"
        },
        arrowDown: {
          borderTopColor: "rgba(66, 54, 0, 0.63)"
        }
      }}
    />
  );
};

export default InputPrice;

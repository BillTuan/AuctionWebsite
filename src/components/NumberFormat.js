import React from "react";
import Format from "react-number-format";
export default value => {
  return (
    <Format
      {...value}
      displayType={"text"}
      thousandSeparator={true}
      prefix="$"
    />
  );
};

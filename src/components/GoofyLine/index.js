import React from "react";
import "./index.scss";

import CustomHeading from "../CustomHeading";

const GoofyLine = (props) => {
  const classes = [
    "goofy-word",
    props.color === "pink" || props.color === "purple"
      ? props.color + "-text"
      : props.color,
  ];

  return (
    <CustomHeading priority={props.priority}>
      {props.line.split("").map((letter, index) => (
        <span key={`letter-${letter}${index}`} className={classes.join(" ")}>
          {letter.toUpperCase()}
        </span>
      ))}
    </CustomHeading>
  );
};
export default React.memo(GoofyLine);

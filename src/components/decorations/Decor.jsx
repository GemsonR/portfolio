import React from "react";

function Decor({ width, height, bg, rotate, left, right, bottom, top }) {
  return (
    <div
      style={{
        position: "absolute",
        height: `${height}`,
        width: `${width}`,
        backgroundColor: `${bg}`,
        rotate: ` ${rotate}`,
        zIndex: -20,
        top: `${top}`,
        bottom: `${bottom}`,
        right: `${right}`,
        left: `${left}`,
        overflow: "hidden",
      }}
    ></div>
  );
}

export default Decor;

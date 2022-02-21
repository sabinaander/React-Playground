import React, { CSSProperties } from "react";
import Header from "./header";
import Main from "./main";

function SectionCard() {
  return <div style={rootStyle}>
      Tree
  </div>;
}
const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};


export default SectionCard;

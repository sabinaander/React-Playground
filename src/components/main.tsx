import React, { CSSProperties } from "react";

function Main() {
  return (
    <div style={rootStyle}>
        <div style={cardStyle}>div 1</div>
        <div style={cardStyle}>div 2</div>
        <div style={cardStyle}>div 3</div>
    </div>
  );
}
const rootStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
};

const cardStyle : CSSProperties = {
    background: 'blue',
    flex: 1,
}

export default Main;

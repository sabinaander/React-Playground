import React, { CSSProperties } from "react";

function Header() {
  return (
    <div style={titleStyle}>
        <h1>React Playground</h1>
    </div>
  );
}
const rootStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: 'black',
  color: 'white',
  padding: '1rem',
};

const titleStyle: CSSProperties ={
    margin: '0',
}

export default Header;

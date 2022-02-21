import React, { CSSProperties } from "react";

function App() {
  return (
    <div style={rootStyle}>
      <h1>Hello from React and Typescript!</h1>
    </div>
  )
}
const rootStyle : CSSProperties = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default App;

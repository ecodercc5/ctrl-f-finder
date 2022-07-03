import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./test";

function App() {
  // useEffect(() => {
  //   const iframe = document.querySelector("#iframe")!;

  //   console.log(iframe);
  //   console.log(countMatches(iframe));
  // }, []);

  return (
    <div className="App">
      <div id="iframe">
        What's Up
        <div>Hello World</div>
        <div>Goodbye World</div>
      </div>
    </div>
  );
}

export default App;

// import "./test";

import { useEffect, useRef, useState } from "react";
import { Finder } from "./components/Finder";
import { reduceMatches } from "./core";

function App() {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [matches, setMatches] = useState<[Node, [number, number]][]>([]);

  useEffect(() => {
    const iframe = iframeRef.current!;

    const matches = reduceMatches<[Node, [number, number]][]>(
      iframe,
      "World",
      (curr, [node, range]) => [...curr, [node, range]],
      []
    );

    setMatches(matches);

    console.log(matches);
  }, []);

  const getHighlightKey = () => {};

  return (
    <div className="App">
      <div id="iframe" ref={iframeRef}>
        What's Up
        <div>Hello World</div>
        <div>Goodbye World</div>
      </div>

      {matches.map((match) => {
        const [node, range] = match;

        const rangeObject = document.createRange();

        rangeObject.setStart(node, range[0]);
        rangeObject.setEnd(node, range[1]);

        const rect = rangeObject.getBoundingClientRect();

        const { top, left, height, width } = rect;

        return (
          <div
            key={`${top}${left}${height}${width}`}
            style={{
              background: "#FEFF00",
              height,
              width,
              top,
              left,
              position: "absolute",
              zIndex: -1,
            }}
          />
        );
      })}

      {/* <Finder /> */}
    </div>
  );
}

export default App;

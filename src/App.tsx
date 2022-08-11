import { useEffect, useRef, useState } from "react";
import { Finder } from "./components/Finder";
import { getMatches, Match } from "./core";
import { Highlights } from "./Highlights";

function App() {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const iframe = iframeRef.current!;

    const matches = getMatches(iframe, search);

    if (matches.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(-1);
    }

    setMatches(matches);

    console.log(matches);
  }, [search]);

  const numMatches = matches.length;
  const currentMatch = activeIndex + 1;

  const handleUp = () => {
    const prevActiveIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : matches.length - 1;

    setActiveIndex(prevActiveIndex);
  };

  const handleDown = () => {
    const index = (activeIndex + 1) % matches.length;

    setActiveIndex(index);
  };

  return (
    <div className="App">
      <div id="iframe" ref={iframeRef}>
        What's Up
        <div>Hello World</div>
        <div>Goodbye World</div>
      </div>

      <Highlights activeMatchIndex={activeIndex} matches={matches} />
      <Finder
        search={search}
        currentMatch={currentMatch}
        numMatches={numMatches}
        onSearchChange={setSearch}
        onClear={() => setSearch("")}
        onUp={handleUp}
        onDown={handleDown}
      />
    </div>
  );
}

export default App;

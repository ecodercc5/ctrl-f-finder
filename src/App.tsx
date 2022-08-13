import { useRef, useState } from "react";
import { FinderContainer } from "./containers/FinderContainer";

function App() {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <div id="iframe" ref={iframeRef}>
        What's Up
        <div>Hello World</div>
        <div>Goodbye World</div>
      </div>

      {isOpen && <FinderContainer searchContainerRef={iframeRef} />}
    </div>
  );
}

export default App;

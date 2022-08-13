import { useRef } from "react";
import { FinderContainer } from "./containers/FinderContainer";

function App() {
  const iframeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <div id="iframe" className="px-12" ref={iframeRef}>
        What's Up
        <div>Hello World</div>
        <div>Goodbye World</div>
        <div>
          Once upon a time there was an old mother pig who had three little pigs
          and not enough food to feed them. So when they were old enough, she
          sent them out into the world to seek their fortunes. The first little
          pig was very lazy. He didn't want to work at all and he built his
          house out of straw. The second little pig worked a little bit harder
          but he was somewhat lazy too and he built his house out of sticks.
          Then, they sang and danced and played together the rest of the day.
          The third little pig worked hard all day and built his house with
          bricks. It was a sturdy house complete with a fine fireplace and
          chimney. It looked like it could withstand the strongest winds. The
          next day, a wolf happened to pass by the lane where the three little
          pigs lived; and he saw the straw house, and he smelled the pig inside.
          He thought the pig would make a mighty fine meal and his mouth began
          to water.
        </div>
      </div>

      <FinderContainer searchContainerRef={iframeRef} />
    </div>
  );
}

export default App;

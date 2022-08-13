import { useState } from "react";
import { Finder } from "../components/Finder";
import { Highlights } from "../components/Highlights";
import { useHighlightMatches } from "../hooks/use-highlight-matches";

interface Props {
  searchContainerRef: React.RefObject<HTMLElement>;
}

export const FinderContainer: React.FC<Props> = ({ searchContainerRef }) => {
  const [search, setSearch] = useState("");

  const { matches, activeIndex, numMatches, currentMatch, actions } =
    useHighlightMatches(search, searchContainerRef);

  return (
    <>
      <Highlights activeMatchIndex={activeIndex} matches={matches} />

      <div className="absolute right-3 top-3">
        <Finder
          search={search}
          currentMatch={currentMatch}
          numMatches={numMatches}
          onSearchChange={setSearch}
          onClose={() => console.log("closing")}
          onUp={actions.moveToNextMatch}
          onDown={actions.moveToPrevMatch}
        />
      </div>
    </>
  );
};

import { useState, useEffect } from "react";
import { getMatches, Match } from "../core";

export const useHighlightMatches = <T extends HTMLElement>(
  search: string,
  ref: React.RefObject<T>
) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const element = ref.current!;

    // search for matches in the HTMLElement
    const matches = getMatches(element, search);

    if (matches.length) {
      // at least 1 match
      setActiveIndex(0);
    } else {
      // no matches
      setActiveIndex(-1);
    }

    setMatches(matches);

    console.log(matches);
  }, [search, ref]);

  // derived data about matches
  const numMatches = matches.length;
  const currentMatch = activeIndex + 1;

  // moving from one match to another
  const moveToNextMatch = () => {
    if (numMatches) {
      const prevActiveIndex =
        activeIndex - 1 >= 0 ? activeIndex - 1 : matches.length - 1;

      setActiveIndex(prevActiveIndex);
    }
  };

  const moveToPrevMatch = () => {
    if (numMatches) {
      const index = (activeIndex + 1) % matches.length;

      setActiveIndex(index);
    }
  };

  return {
    matches,
    activeIndex,
    currentMatch,
    numMatches,
    actions: {
      moveToNextMatch,
      moveToPrevMatch,
    },
  };
};

import React from "react";
import { Highlight } from "./components/Highlight";
import { getHighlightDimensions, Match } from "./core";

interface Props {
  matches: Match[];
  activeMatchIndex: number;
}

export const Highlights: React.FC<Props> = ({ matches, activeMatchIndex }) => {
  const getHighlightKey = () => {};

  return (
    <>
      {matches.map((match, i) => {
        const [node, range] = match;
        const { x, y, height, width } = getHighlightDimensions(node, range);
        const isActive = i === activeMatchIndex;

        const key = `${x}${y}${height}${width}`;

        return (
          <Highlight
            key={key}
            isActive={isActive}
            x={x}
            y={y}
            height={height}
            width={width}
          />
        );
      })}
    </>
  );
};

import React from "react";

interface Props {
  isActive?: boolean;
  x: number;
  y: number;
  height: number;
  width: number;
}

export const Highlight: React.FC<Props> = ({
  isActive,
  x,
  y,
  height,
  width,
}) => {
  const bg = isActive ? "bg-[#FF9632]" : "bg-[#FEFF00]";

  return (
    <div
      className={`absolute ${bg} -z-10`}
      style={{ top: y, left: x, height, width }}
    />
  );
};

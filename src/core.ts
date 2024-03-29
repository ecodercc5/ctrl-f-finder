export type Range = [number, number];
export type Match = [Node, Range];

// count how many times instance appears in str
const countInstancesFromString = (str: string, instance: string) => {
  // TODO: figure out why this works
  return str.split(instance).length - 1;
};

const isTextNode = (node: Node): boolean => {
  return node.nodeType === Node.TEXT_NODE;
};

const sum = (numbers: number[]) => {
  return numbers.reduce((current, number) => current + number, 0);
};

// given a node and instance, count how many matches of instance there are in node
const countMatches = (node: Node, instance: string): number => {
  // get number of matches in current node
  const numMatches = isTextNode(node)
    ? countInstancesFromString(node.nodeValue!, instance)
    : 0;

  // get children nodes
  const children = Array.from(node.childNodes);

  // recursively get number of matches in children nodes
  const childrenCount = children.map((child) => countMatches(child, instance));

  // add all matches up to get a total
  const totalChildrenCount = sum(childrenCount);

  return numMatches + totalChildrenCount;
};

// given a node and instance, count how many matches of instance there are in node
const loopMatchesWithCallback = (
  node: Node,
  instance: string,
  callback: (textNode: Node, range: [number, number]) => void
): void => {
  // get number of matches in current node
  const indices = isTextNode(node)
    ? getMatchIndices(node.nodeValue!, instance)
    : [];

  indices.forEach((range) => callback(node, range));

  // get children nodes
  const children = Array.from(node.childNodes);

  // recursively loop over matches in child nodes
  children.forEach((child) =>
    loopMatchesWithCallback(child, instance, callback)
  );
};

export const reduceMatches = <T>(
  node: Node,
  instance: string,
  reducer: (prev: T, curr: Match) => T,
  initial: T
): T => {
  const indices = isTextNode(node)
    ? getMatchIndices(node.nodeValue!, instance)
    : [];

  let reduced = initial;

  for (const range of indices) {
    reduced = reducer(reduced, [node, range]);
  }

  // get children nodes
  const children = Array.from(node.childNodes);

  for (const child of children) {
    reduced = reduceMatches(child, instance, reducer, reduced);
  }

  return reduced;
};

const getMatchIndices = (str: string, instance: string) => {
  const indices: [number, number][] = [];
  const instanceLength = instance.length;

  for (let i = 0; i + instanceLength - 1 < str.length; i++) {
    const start = i;
    const end = i + instanceLength;

    const substring = str.substring(start, end);

    // found a match
    if (substring.toLowerCase() === instance.toLowerCase()) {
      indices.push([start, end]);
      i = end - 1;
    }
  }

  return indices;
};

export const getMatches = (element: HTMLElement, search: string): Match[] => {
  if (search === "") {
    return [];
  }

  return reduceMatches<[Node, [number, number]][]>(
    element,
    search,
    (curr, match) => [...curr, match],
    []
  );
};

interface IDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const getHighlightDimensions = (
  textNode: Node,
  range: [number, number]
): IDimensions => {
  const rangeObject = document.createRange();

  rangeObject.setStart(textNode, range[0]);
  rangeObject.setEnd(textNode, range[1]);

  const rect = rangeObject.getBoundingClientRect();

  const { top: y, left: x, height, width } = rect;

  return {
    x,
    y,
    height,
    width,
  };
};

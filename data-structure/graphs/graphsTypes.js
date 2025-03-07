// Edge List
const graphEdgeList = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graphAdjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix
const graphAdjacentMatrix = [
  [0, 0, 1, 0], // Zero connected to 2
  [0, 0, 1, 1], // One connected to 2 and 3
  [1, 1, 0, 1], // Two connected to 0, 1 and 3
  [0, 1, 1, 0] // Three connected to 1 and 2
]

const graphAdjacentMatrixHashTable = {
  0: [0, 0, 1, 0], // Zero connected to 2
  1: [0, 0, 1, 1], // One connected to 2 and 3
  2: [1, 1, 0, 1], // Two connected to 0, 1 and 3
  3: [0, 1, 1, 0] // Three connected to 1 and 2
}


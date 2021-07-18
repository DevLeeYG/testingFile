function createMatrix(edges) {
  let max = 0;
  for (let n = 0; n < edges.length; n++) {
    let largeV = Math.max(...edges[n].slice(0, 2));
    if (largeV > max) {
      max = largeV;
    }
  }

  let result = new Array(max + 1).fill(0).map(() => {
    return new Array(max + 1).fill(0);
  });

  for (let n = 0; n < edges.length; n++) {
    if (edges[n][2] === "undirected") {
      result[edges[n][1]][edges[n][0]] = 1;
    }
    result[edges[n][0]][edges[n][1]] = 1;
  }

  return result;
}

// factorial(1) => return 1
// factorial(2) => 2 * factorial(1);
// factorial(3) => 3 * factorial(2);

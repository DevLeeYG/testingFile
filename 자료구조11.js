function getDirections(matrix, from, to) {
  let vertex = [from]; //출발점
  //방문체크
  let iVisited = new Array(matrix.length).fill(false); // [false,false,false,false]
  iVisited[from] = true; // 첫정점 방문 true 0부터시작

  while (vertex.length > 0) {
    let newVertex = vertex.shift();

    if (newVertex === to) {
      return true;
    }

    for (let j = 0; j < matrix[newVertex].length; j++) {
      if (matrix[newVertex][j] === 1 && iVisited[j] === false) {
        vertex.push(j);
        iVisited[j] = true;
      }
    }
  }

  return false;
}

// 우선 피보나치 수열을 만들어야 한다.
// fiboMaker(10) => return;
// fiboMaker(9) => fiboArr.push(fiboArr[index - 1] + fiboArr[index - 2]); return fiboMaker(index + 1)

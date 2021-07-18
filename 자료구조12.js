function connectedVertices(edges) {
  // 최대 버텍스를 찾습니다.
  let max = 0;
  for (let n = 0; n < edges.length; n++) {
    let largeV = Math.max(...edges[n]);
    if (max < largeV) {
      max = largeV;
    }
  }

  let adj = {};

  // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다
  for (let i = 0; i <= max; i++) {
    adj[i] = [];
  }
  // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
  // 이렇게 adjList 그래프가 완성되었습니다.
  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push(edges[i][1]); //다이렉트 단방향
    adj[edges[i][1]].push(edges[i][0]); // 언다이렉트 무향
  }

  let iVisited = {};

  let count = 0;
  for (let vertex = 0; vertex <= max; vertex++) {
    // vertex =정점 5까지 0부터 정점 이 돈다

    if (iVisited[vertex] === undefined) {
      bfs(adj, vertex, iVisited);

      count++;
    }
  }
  return count;
}

function bfs(adj, vertex, iVisited) {
  //vertex === from(출발정점) iVisited == to (도착)

  let queue = [vertex]; // 0~5까지있음
  iVisited[vertex] = true; //[true,1,2,3,4,5]

  while (queue.length > 0) {
    let cur = queue.shift(); //0

    for (let n = 0; n < adj[cur].length; n++) {
      if (iVisited[adj[cur][n]] === undefined) {
        //iVisited[vertex]// undifined가 아니게 된다면 다돌았다는거고
        queue.push(adj[cur][n]);
        iVisited[adj[cur][n]] = true;
      }
    }
  }
}

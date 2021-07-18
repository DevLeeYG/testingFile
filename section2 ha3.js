function tes3(insertEdges, removeEdges) {
  let vertex = MaxVertex(insertEdges);
  let addMatrix = Matrix(insertEdges, vertex);
  let result = removeMatrix(addMatrix, removeEdges);
  return result;
}

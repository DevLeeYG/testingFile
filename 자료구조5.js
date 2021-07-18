function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let document = documents;
  let queue = new Array(bufferSize).fill(0);

  queue.push(document.shift());
  queue.shift();

  count++;

  while (queueSize(queue) > 0) {
    if (document[0] !== undefined) {
      queue.push(document.shift());
      queue.shift();
      if (queueSize(queue) > capacities) {
        document.unshift(queue.pop());
        queue.push(0);
      }
    } else {
      queue.shift();
      queue.push(0);
    }
    count++;
  }
  return count;
}

function queueSize(arr) {
  let total = 0;
  for (let el of arr) {
    total = total + el;
  }
  return total;
}

//넣고 출력하고 1초
//10이상이라면
// 다시 돌려놓고 0채우고 다시 넣고 출력하고가 1초

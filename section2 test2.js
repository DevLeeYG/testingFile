function test2(arr, num) {
  // TODO: 여기에 코드를 작성하세요
  // recursive니까 recursive에 맞는 함수를 작성한 다음에 다시 실행시켜주면 된다.

  // 이거를 처음에 어떻게 접근해야하나요????

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === num) {
      return arr[i];
    } else if (Array.isArray(arr[i].children)) {
      if (arr[i].children && arr[i].id === 0) {
        return test2(arr[i].children, num);
      }
    }
  }
  return null;
}

let input = [
  {
    id: 1,
    name: "johnny",
  },
  {
    id: 2,
    name: "ingi",
    children: [
      {
        id: 3,
        name: "johnson",
      },
      {
        id: 5,
        name: "steve",
        children: [
          {
            id: 6,
            name: "lisa",
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: "13",
  },
];

let output = test2(input, 1);
console.log(output); // --> { id: 1, name: 'johnny' }

output = test2(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = test2(input, 99);
console.log(output); // --> null

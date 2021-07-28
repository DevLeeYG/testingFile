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

function test2(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === num) {
      return arr[i];
    } else if (Array.isArray(arr[i].children)) {
      let result = test2(arr[i].children, num);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

let output = test2(input, 1);
console.log(output); // --> { id: 1, name: 'johnny' }

output = test2(input, 5);
console.log(output); // --> { id: 5, name: 'steve', children: [{ id: 6, name: 'lisa' }] }

output = test2(input, 99);
console.log(output); // --> null

// function test2(arr,num){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id === num) {
//       return arr[i];
//     } else if (Array.isArray(arr[i].children)) {
//       let nextArr = arr[i].children;
//       newArr = newArr.concat(nextArr);
//     }
//   }
//   if (newArr.length > 0) {
//     return test2(newArr, num);
//   }
//   return null;
// }

// test7
// 문제
// 객체를 요소로 갖는 배열과 id를 입력받아, 해당 id값을 가지고 있는 객체를 리턴해야 합니다.

// 입력으로 주어지는 배열은 재귀적 구조를 가지고 있습니다. (입출력 예시 참고)
// 배열이 요소인 객체가 'children' 속성을 가질 경우, 해당 값은 초기 입력(arr)과 같은 구조를 지닌 배열입니다.
// 중첩 구조의 깊이(depth)에는 제한이 없습니다.
// 함수 test7은 재귀 함수로 구현되어야 합니다.
// 입력받은 id를 가진 객체가 없을 경우, null을 리턴해야 합니다.

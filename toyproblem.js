// function unpackGiftbox(giftBox, wish) {
//   for (let n = 0; n < giftBox.length; n++) {
//     if (giftBox[n] === wish) {
//       return true;
//     } else if (Array.isArray(giftBox[n])) {
//       let result = unpackGiftbox(giftBox[n], wish);
//       if (result) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

// let output = unpackGiftbox(giftBox, "postcard");
// console.log(output);

// const largestProductOfThree = function (arr) {
//   let sorted = arr.sort((a, b) => a - b);

//   let array = sorted.length;

//   let plusMax = sorted[array - 1] * sorted[array - 2] * sorted[array - 3];
//   let minusMax = sorted[array - 1] * sorted[0] * sorted[1];

//   return Math.max(plusMax, minusMax);
// };

// // let result;

// // let sortOne = array.slice(0).sort(function(a,b){
// //   return a-b
// // });
// // sortOne = sortOne.reverse()
// // console.log(sortOne)

// // for(let i = 0; i < sortOne.length; i++){
// //   if(sortOne[0]>0){//양수일때
// //     if((sortOne[1]*sortOne[2]) < (sortOne[sortOne.length-1]* sortOne[sortOne.length-2])){
// //       result = sortOne[0]*sortOne[sortOne.length-1]*sortOne[sortOne.length-2]
// //       return result
// //   }
// // }
// //   result = sortOne[0]*sortOne[1]*sortOne[2]
// //   return result;
// // }

const powerSet = function (str) {
  //토이 11
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split("").sort();
  let result = [""];

  const aux = (target, result) => {
    //target 에 요소를 받고 result에 배열을 받아서 붙여준다
    let copy = result.slice();
    for (let n = 0; n < copy.length; n++) {
      copy[n] += target;
      result.push(copy[n]);
    }
    return result;
  };

  for (let n = 0; n < arr.length; n++) {
    if (!result.includes(arr[n])) {
      aux(arr[n], result);
    }
  }

  return result.sort();
};
// 쉘로우카피를 하는이유는 하지않는다면 result를 계속 가져와야되는데 무한반복이된다 하지만 쉘로우카피를 해서 변수 copy에저장하면 copy안에서의 반복으로 끝나게되기때문에 가능하다

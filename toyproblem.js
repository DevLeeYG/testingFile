function unpackGiftbox(giftBox, wish) {
  for (let n = 0; n < giftBox.length; n++) {
    if (giftBox[n] === wish) {
      return true;
    } else if (Array.isArray(giftBox[n])) {
      let result = unpackGiftbox(giftBox[n], wish);
      if (result) {
        return true;
      }
    }
  }
  return false;
}
const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "postcard");
console.log(output);

const largestProductOfThree = function (arr) {
  let sorted = arr.sort((a, b) => a - b);

  let array = sorted.length;

  let plusMax = sorted[array - 1] * sorted[array - 2] * sorted[array - 3];
  let minusMax = sorted[array - 1] * sorted[0] * sorted[1];

  return Math.max(plusMax, minusMax);
};

// let result;

// let sortOne = array.slice(0).sort(function(a,b){
//   return a-b
// });
// sortOne = sortOne.reverse()
// console.log(sortOne)

// for(let i = 0; i < sortOne.length; i++){
//   if(sortOne[0]>0){//양수일때
//     if((sortOne[1]*sortOne[2]) < (sortOne[sortOne.length-1]* sortOne[sortOne.length-2])){
//       result = sortOne[0]*sortOne[sortOne.length-1]*sortOne[sortOne.length-2]
//       return result
//   }
// }
//   result = sortOne[0]*sortOne[1]*sortOne[2]
//   return result;
// }

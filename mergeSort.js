const merge = function (left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};
// const merge = function (left, right) {

//     const result = []

//     while(left.length && right.length){
//       if(left[0]<right[0]){
//         result.push(left.shift())
//       }else{
//         result.push(right.shift())
//       }
//     }

//     return result.concat(left.slice().concat(right.slice()))
//     // return [...result, ...left, ...right]

// };

// const mergeSort = function (arr) {
//  if(arr.length <=1) return arr
//  const middle = Math.floor(arr.length/2)
//  const left = arr.slice(0,middle)
//  const right = arr.slice(middle,arr.length)

//  return merge(mergeSort(left),mergeSort(right))

// };

//  mergeSort([4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21])

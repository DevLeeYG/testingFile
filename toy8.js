문제
정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)


const largestProductOfThree = function (arr) {
   let sorted = arr.sort((a,b)=>a-b)

  let array = sorted.length


  let plusMax = sorted[array-1]*sorted[array-2]*sorted[array-3]
  let minusMax = sorted[array-1]*sorted[0]*sorted[1]

  return Math.max(plusMax,minusMax)




};

{/*우선 정렬을 한다
제일 큰사이즈가 뒤로 밀리게될것이고 작은사이즈는 앞에 잇을것이다
-인경우도 생각을해야되서 큰숫자가 나올수있기때문에 -가 2개라면 제일큰수와 -인 앞에 두수를 곱한 수와 마지막 3자리 수와의 비교를한다
Math.max를 사용해서 둘중의 큰 수를 출력한다
 */}
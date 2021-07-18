문제
간선들의 목록들을 받아 2차원 배열의 무향 그래프 매트릭스를 출력하는 함수를 작성해야 합니다. 입력값은 모두 2차원 배열이며, 배열의 인덱스를 그래프의 버텍스로 간주합니다.
첫 번째 입력값은 만드려는 매트릭스의 간선을 나타내었고, 두 번째 입력값은 삭제하려는 간선을 나타냅니다.

조건
각 간선은 2가지 정보를 담고 있습니다.

0번째: 간선의 시작 정점 (0 이상의 정수)
1번째: 간선의 도착 정점 (0 이상의 정수)
출력
2차원 배열의 무향 그래프를 출력하는 함수를 리턴해야 합니다.
주의 사항
두 번째 입력값의 삭제하려는 간선이 첫 번째 입력값에 없다면 무시합니다.
두 번째 입력값의 최대 버텍스는 첫 번째 입력값의 최대 버텍스와 동일합니다.
정점 0에서 정점 4로 이어주는 간선이 존재할 경우 정점 1, 2, 3도 존재합니다.
출력하는 버텍스의 개수는 입력값의 최대 버텍스 값을 초과하지 않습니다. (예: insertEdges의 최대 버텍스가 3이라면, 최대 크기가 3인 그래프입니다.)
반환하는 인접행렬은 2차원 배열이며, 행(row)는 바깥 배열, 열(column)은 안쪽 배열입니다.

let matrix = [[0, 0], [0, 0]]
matrix[0] === 0번째 행
matrix[0][0] === 0번째 행의 0번째 열
두 정점간의 간선의 유무는 0과 1로 표시합니다.

0: 두 정점간에 간선이 존재하지 않을 경우
1: 두 정점간에 간선이 존재할 경우
아래의 2차원 배열에서 세로축은 시작 정점, 가로축은 도착 정점입니다.
// matrix 예시
const matrix = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];
입출력 예시
const insertEdges = [
  [0, 3],
  [0, 2],
  [1, 3],
  [2, 1],
];
const removeEdges = [[1, 3], [1, 0]];
let output1 = test3(insertEdges, removeEdges);

console.log(output1);
/**
 * [
 *  [0, 0, 1, 1],
 *  [0, 0, 1, 0],
 *  [1, 1, 0, 0],
 *  [1, 0, 0, 0]
 * ]
 */

const insertEdges2 = [
  [0, 2],
  [2, 4],
  [1, 3],
  [2, 1],
];
const removeEdges2 = [
  [0, 3],
  [2, 1],
  [1, 0],
  [4, 2]
];

let output2 = test3(insertEdges2, removeEdges2);

console.log(output2);
/**
 * [
 *  [0, 0, 1, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [1, 0, 0, 0, 0],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 0, 0, 0],
 * ]
 */
123456789
function test3(insertEdges, removeEdges) {
  // TODO: 여기에 코드를 작성하세요.
}
//무향 그래프 매트릭스를 출력 (무향)
//배열의 인덱스를 버텍스
//첫번째 입력값은 만드려는 간선
// 두번째는 삭제하려는 간선
// 두번째 입력값이 삭제하려는 간선이 첫번째 입력값에 없다면 무시
// 최대버텍스는 동일
실행 결과
4 개 테스트 중 0 개 통과했습니다.
 2차원 배열을 리턴해야 합니다.
Test Result
TypeError: Cannot read property '0' of undefined
    at Context.<anonymous> (/submission/index.test.js:42:9)
    at processImmediate (internal/timers.js:456:21) ... 
Test Code
() => {
		const result = test3([[0, 3], [1, 2]], [[1, 2]]);
		result[0][0].should.exist;
	}
 간선 목록중 가장 큰 정점이 n이라면 (n + 1) x (n + 1) 의 2차원 배열을 리턴해야 합니다.
 insertEdges의 [i, j] 간선은 정점 i로부터 정점 j로 이어지는 간선을 추가해야 합니다.
 removeEdges의 [i, j] 간선은 정점 i로부터 정점 j로 이어지는 간선을 삭제해야 합니다.


 function test3(insertEdges, removeEdges) {
    // TODO: 여기에 코드를 작성하세요.
  }
  function test3(insertEdges, removeEdges) {
    //최대버택스구하기
         let max = 0
         for(let n = 0 ; n<insertEdges.length ; n++){
            let largeV = Math.max(...insertEdges[n])
            if(max<largeV){
              max = largeV
            }
         }
   
         //매트릭스만들기
   
         let maxtrix = new Array(max+1).fill(0).map(()=>{
           return new Array(max+1).fill(0)
         })
   
       //간선할당하면될거같은데
   
       for(let n = 0 ; n<insertEdges.length ; n++){
         maxtrix[insertEdges[n][1]][insertEdges[n][0]] = 1
         maxtrix[insertEdges[n][0]][insertEdges[n][1]] = 1
       }
   
       for(let n = 0 ; n<removeEdges.length ; n++){
         maxtrix[removeEdges[n][1]][removeEdges[n][0]] = 0
         maxtrix[removeEdges[n][0]][removeEdges[n][1]] = 0
       }
   
     return maxtrix 
   
   }
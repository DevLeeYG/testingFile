function browserStack(actions, start) {
  let nextStack = []
  let prevStack = []
  let currentPage = start
 
   for(let n = 0 ; n<actions.length ; n++){
     
     if(actions[n] === -1 && prevStack.length !== 0 ){
        nextStack.push(currentPage)
        currentPage = prevStack.pop()
     }else if(actions[n] === 1 && nextStack !== 0){
       prevStack.push(currentPage)
       currentPage = nextStack.pop()
     }else{
       prevStack.push(currentPage)
       currentPage = actions[n]
       nextStack = []
     }
   }
 return [prevStack,currentPage,nextStack]
 
 }

//앞으로가기 스택 뒤로가기 스택 현재페이지 를 만들어줍니다 현재페이지는 start
//actions의 요소에 접근을 해서 -1이면 뒤로가기 1이면 앞으로가기
// 스택에 쌓여있는게 없다면 아무일도 일어나지않는다
// 현재페이지는 스트링형태로  앞으로가기는 갈수가 없다

function improveBook(books, speeds) {
  let day = [];

  for (let n = 0; n < books.length; n++) {
    day.push(Math.ceil((100 - books[n]) / speeds[n])); //걸리는 날짜
  }
  let completed = [];

  while (day.length > 0) {
    let index = day.findIndex((el) => {
      return day[0] < el;
    });

    if (index === -1) {
      /// 찾을수없다면?
      completed.push(day.length);
      day.splice(0, day.length);
    } else {
      completed.push(index);
      day.splice(0, index);
    }
  }
  return completed;
}
//books 진행률
//speeds = 작업의 속도
// [93,30,55]
// [ 1,30, 5]
// 걸리는 날짜를 구하자 첫번째는 7 2번째는 70/30 2.33 인데 2일이 넘기때문에 결국엔3일 3번째는 9일
// 이것을 구하자면 계산은 Math.ceil 을 이용해 총 100퍼센트 - 진행률/작업량 으로 구할수잇다
// 이것들을 을 새배열로만든뒤
// 배열의 반복문을돌려
// 첫번째 배열보다 작으면 같이 출간이 되지만 크면 더 느리기때문에
// 큰것을 만나기전가지 를 배열에 푸쉬를 시키고 나머지를 또 반복해 요소가  배출이 될때까지 반복을한다
// 큰것을 만나 멈추게 하려면 findIndex를써 만약 9를 만나 멈춘다면 2가 나오게되는데
// 결국 9앞에 2개가 잇다고한다면 렝스로는 0,1이지만 이인덱스를 반환을한다면 2권이라는 뜻이 될수있다
// 또반복을 돌려 찾지를 못했다면 그렝스만큼을 푸쉬를 하면 나머지가 완성이된다

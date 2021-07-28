"use strict";

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

// //chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => {
    return num * 2;
  })
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1), 1000;
      });
    });
  })
  .then((num) => console.log(num));

function getHen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("닭")), 1000);
  });
}

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen}=>달걀`, 1000);
    });
  });
};

getHen()
  .then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then((data) => console.log(data))
  .catch(console.log);

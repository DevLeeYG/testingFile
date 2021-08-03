var parson = {
  name: "lee",
  sayhello: function () {
    console.log(`hello my name is ${this.name}`);
  },
};

console.log(parson);
console.log(parson.sayhello);

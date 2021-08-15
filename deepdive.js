var x = "dlobal";

function foo() {
  console.log(x);
  var x = "local";
}
console.log(foo());
console.log(x);

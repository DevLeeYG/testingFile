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

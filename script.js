const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    const decodedChar = lookup[char] || char; // Lookup the decoded character or pass through the non-alphabetic character
    decodedArr.push(decodedChar);
  }

  return decodedArr.join(""); // Return the decoded string
}

// Test the function
console.log(rot13("SERR YBIR? NPPVBWBO")); // Output: "FREE LOVE? ACCIOSOBO"

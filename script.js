let source = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "?",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let cbsy_el = document.getElementById("symbols");
let cbn_el = document.getElementById("numbers");
let char_el = document.getElementById("characters");

let label = document.querySelector('label[for="characters"]');

let p1_el = document.getElementById("p1");
let p2_el = document.getElementById("p2");

char_el.addEventListener("input", function () {
  let maxch = parseInt(char_el.value);
  if (maxch >= 6) {
    label.style.color = "#12b075";
    label.style.fontWeight = "bold";
  } else {
    label.style.color = "";
    label.style.fontWeight = "";
  }
});

function randindx() {
  let ri = Math.floor(Math.random() * source.length);
  return source[ri];
}

function altsrc() {
  source = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (cbsy_el.checked && cbn_el.checked) {
    source = source.concat(symbols);
    source = source.concat(numbers);
  } else if (cbsy_el.checked) {
    source = source.concat(symbols);
  } else if (cbn_el.checked) {
    source = source.concat(numbers);
  }
}

function gen_pwords() {
  altsrc();

  let maxch = char_el.value;
  let p1 = "";
  let p2 = "";

  if (maxch === "") {
    alert("Please select the number of charcters!");
    return;
  }

  for (let i = 0; i < maxch; i++) {
    p1 += randindx();
  }

  for (let i = 0; i < maxch; i++) {
    p2 += randindx();
  }

  p1_el.textContent = "Variant 1: " + p1;
  p2_el.textContent = "Variant 2: " + p2;
}

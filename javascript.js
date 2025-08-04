let fname = "fluffy";
let surname = "Stache";

console.log("the"+fname+surname);

// const examples

const pi=3.14;
// pi=10;
// console would throw an error when re-assigning a constant
console.log(pi);

// Numbers

console.log ((3 + 2) - 76 * (1 + 1));

// Assignment

console.log (23 + 97);
console.log (12 + 6 + 18 + 4 + 11 + 9);
console.log ((4 + 6 + 9) / 77);
let a = 10;
console.log (a);
a = 11;
console.log (a);

let b = 7 * a;
console.log (b);

const max = 57;
const actual = max - 13;
const percentage = (actual / max) * 100;

console.log (max);
console.log (actual);
console.log (percentage);

// JS Functions
let ourString = "this IS a TesT";

function capitalize(ourString) {
    return String(ourString).charAt(0).toUpperCase() + String(ourString).slice(1).toLowerCase();
}

console.log (capitalize(ourString));

let myLetters = "abcde";

function lastLetter(myLetters) {
    return String(myLetters).at(-1);
}

console.log(lastLetter(myLetters));
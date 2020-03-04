//== only check/compare values

//0 vs false

const num0 = 0;
const numFalse = false;
if (num0 == numFalse) {
    console.log("true");
}
else {
    console.log("false");
}

//1 vs true

const num1 = 1;
const numTrue = true;
if (num1 == numTrue) {
    console.log("true");
}
else {
    console.log("false");
}

//=== check/compare values and types

const name = "aminul"
const number = 2222;
if (name === number) {
    console.log("true");
}
else {
    console.log("false");
}
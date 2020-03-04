const num = [3, 6, 7, 8, 9];
const output = [];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

num.map(function square(element, index, array) {
    console.log(element, index, array);
})
// const square = element => element * element; [arrow =>]
// const square = x => x * x; [arrow =>]
const result = num.map(function (element) {
    return element * element;
})
const result2 = num.map(x => x * x);
console.log(result2);

const bigger = num.filter(x => x > 5);
console.log(bigger);

const findNext = num.find(x => x < 9);
console.log(findNext);
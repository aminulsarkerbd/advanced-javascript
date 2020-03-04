function add(num, num2) {
    console.log([...arguments]);
    return num + num2;
}
const result = add(3, 4, 5, 6);
console.log(result);
const students = [
    { id: 21, name: "a" },
    { id: 31, name: "b" },
    { id: 41, name: "c" }
];

const output = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    output.push(result);
}
console.log(output);
const names = students.map(s => s.name);
console.log(names);
const ids = students.filter(s => s.id > 20);
console.log(ids);
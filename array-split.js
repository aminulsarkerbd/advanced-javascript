const nums = [2, 3, 4, 5, 6, 7, 8];
const numsPart = nums.slice(2, 6); // start index:2 and end index 6 (slice 2-5)
const numsPart2 = nums.splice(2, 4, 99); // start index:2 and delete count 4 and inject 77
console.log(numsPart2);
console.log(nums);
const together = nums.join("-x, ");
console.log(together);
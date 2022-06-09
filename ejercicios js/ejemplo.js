// let iterable = [10, 20, 30]  

// for (let value in iterable) {
// //   value += 1;
//   console.log(value);
// }

// let iterable = "boo";

// for (let value in iterable) {
//   console.log(value);
// }

/////////////////////////////////////////////

// let iterable = {
//     a:20,
//     b:30,
//     c:40,
// }  

// let sum = 0
// let value = null
// for (value in iterable) {
// //   value += 1;
// //   console.log(iterable[value]);
// sum += iterable[value]
// }
// console.log(sum)

////////////////////////////////////////////

let iterable = new Map([
    ["a", 1], 
    ["b", 2], 
    ["c", 3]
]);

// for (let entry of iterable) {
//   console.log(entry);
// }
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
const a = 5
const b = 6
const c = 7
const p = (a + b + c) / 2
let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log(`Area of triangle is ${area.toFixed(2)}`)
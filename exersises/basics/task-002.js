/*
Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let cDt = new Date()

let mm = (cDt.getMonth() + 1).toString().padStart(2, '0')
let dd = cDt.getDate().toString().padStart(2, '0')
let yyyy = cDt.getFullYear()

console.log(`${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy}, ${dd}-${mm}-${yyyy}, ${dd}-${mm}-${yyyy}`)
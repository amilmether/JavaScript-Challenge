const arr = [1,2,3,true]

const arr2 = new Array(5)
console.log(arr2)//[ <5 empty items> ]
const arr3 = Array.from("hello")
console.log(arr3) //[ 'h', 'e', 'l', 'l', 'o' ]
arr3[0] = "y"
console.log(arr3)//[ 'y', 'e', 'l', 'l', 'o' ]

console.log(arr3[arr3.length - 1])// print o

arr3.push(4)

console.log(arr3)//[ 'y', 'e', 'l', 'l', 'o', 4 ]

const arr4 = arr.concat(arr3)
console.log(arr4)//[
//   1,   2,   3,   true,
//   'y', 'e', 'l', 'l',
//   'o', 4
// ]

const str = arr.join("|")
console.log(str)// 1|2|3|true
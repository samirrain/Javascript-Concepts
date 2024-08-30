// Shallow copy 
const array1 = [1,2,3,4]
// const array2 = [...array1]
const array2 = Object.assign([],array1)
array2.pop()
console.log(array2)
console.log(array1)

//deep copy
const arraynested = [1,2,3,4,[1,2],[2,3,[2,3]]]
const arraynested2 = JSON.parse(JSON.stringify(arraynested))
arraynested2[5][0] = 10
console.log(arraynested2)
console.log(arraynested)

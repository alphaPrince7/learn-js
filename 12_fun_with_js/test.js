const myArr = []
// v8 debug %DebugPrint

// continious, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// Packed SMI Elements

// const arrTwo = [1,,4,5]
// Holey array

arrTwo.push(6.0)
// Packed Double Element


arrTwo.push('7')
// packed Element

arrTwo[10] = 11
// Holey Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototypr, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4]
console.log(arrThree[2]);

// SMI > DOUBLE> PACKED
// H_SMI > H_DOUBLE > H_CONTINUOUS


const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENTS

const arrFive = []

arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS



// for, for-of, for-in , foreach
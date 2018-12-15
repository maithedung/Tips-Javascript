// 8. Gộp các mảng

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const cloneArray1 = [1, 2, 3];

const lumpedArray1 = [...array1, ...array2];
const lumpedArray2 = array1.concat(array2);
cloneArray1.push.apply(cloneArray1, array2);

console.log(lumpedArray1);
console.log(lumpedArray2);
console.log(cloneArray1);

console.log(array1, array2);


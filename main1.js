console.log("Zadanie 1 - odwrócenie tablicy - wersja I");

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [];
let j = 0;

for (let i = array1.length - 1; i >= 0; i--) {
  array2[j] = array1[i];
  j++;
}

console.log(array1);
console.log(array2);

//==============================================

console.log("");
console.log("Zadanie 1 - odwrócenie tablicy - wersja II z wykorzystaniem unshift()");

j = array1.length - 1;

for (let i = 0; i < array1.length; i++) {
  array2[i] = array1[j];
  j--;
}

console.log(array1);
console.log(array2);

//==============================================

console.log("");
console.log("Zadanie 2 - usuwanie falsey values z wpisaniem truthy values do nowej tablicy");
const falsyValues = [0, false, NaN, '', null, undefined];
const testArray = ['test', 0, 'apple', false, '', 32, true, NaN];
const resultArray = [];

for (const testValue of testArray) {
  if (falsyValues.includes(testValue)) {
    continue;
  }
  resultArray.push(testValue);
}

console.log(testArray);
console.log(resultArray);

//==============================================

console.log("");
console.log("Zadanie 3 - porównanie wartości dwóch tablic");
const arrayA = ["Kot", 3, false];
const arrayB = ["Kot", 3, false];
isTheSame = true;

if (arrayA.length !== arrayB.length) {
  isTheSame = false;
} else {
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      isTheSame = false;
      break;
    }
  }
}
console.log(isTheSame);

//==============================================

console.log("");
console.log("Zadanie 4 - 'spłaszczenie' tablicy dwuwymiarowej");

const twoDimensionalArray = [
  [1, 2],
  [3, 4],
  [5]
];
const newArray = [];

for (let i = 0; i < twoDimensionalArray.length; i++) {
  for (let j = 0; j < twoDimensionalArray[i].length; j++)
    newArray.push(twoDimensionalArray[i][j]);
}

console.table(twoDimensionalArray);
console.log(newArray);
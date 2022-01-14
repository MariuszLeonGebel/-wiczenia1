console.log("Zadanie 1 - mnożenie n-tego elementu tablicy przez podaną liczbę");
console.log("Tablica: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");

function multiplyByNumber(array, number, multiplier) {
  let indexNumber = number - 1; //n-ty element tablicy ma numer indeksu o 1 mniejszy
  for (let i = 0; i < Math.floor(array.length / number); i++) {
    console.log(array[indexNumber] * multiplier);
    indexNumber += number;
  }
}

multiplyByNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 3);
console.log("Co czwarta liczba przemnożona przez 3: wynik 12 i 24");

//==============================================

console.log("");
console.log("Zadanie 2 - wyszukiwanie elementu i jego indeksu");

const result = [];

function lookingUp(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result[0] = i;
      result[1] = element;
    }
  }
  console.log(result);
  return result;
}

lookingUp(["Kot", "Jeż", "Pies", "Żyrafa"], "Pies");

//==============================================

console.log("");
console.log("Zadanie 3 - odwracanie podanego słowa");
let word = "frontend";
let reversedWord = "";

function reversingWords(word) {
  const splitWord = word.split("");
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += splitWord[i];
  }
  return reversedWord;
}

console.log(reversingWords(word));

//==============================================

console.log("");
console.log("Zadanie 4 - dwuwymiarowa tablica wypełniona zerami o zadanym rozmiarze");

const givenSize = 5;

function createZeroArray(number) {
  let zeroArray = [];

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      zeroArray[i] = [];
    }
  }

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      zeroArray[i][j] = 0;
    }
  }
  return zeroArray;
}

console.table(createZeroArray(givenSize));
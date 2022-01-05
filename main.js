function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const employees = 12;
const randomSalary = getRndInteger(1500, 5000);
const totalSalary = randomSalary * employees;

console.log("Zadanie 1 - suma wynagrodzeń pracowników")
console.log("Losowe wynagrodzenie: " + randomSalary);
console.log(`Suma wynagrodzeń ${employees} pracowników: ${totalSalary}`);
//==============================================

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

console.log("")
console.log("Zadanie 2 - liczby pierwsze")
let number = 2;
while (number < 100) {
  if (isPrime(number)) {
    console.log(number);
  }
  number++;
}
//===============================================
const deliveryType = prompt("Podaj numer formy dostawy: \n1. Paczkomat \n2. Odbiór własny \n3. Poczta Polska \n4. Kurier");

console.log("")
console.log("Zadanie 3 - Forma dostawy")
switch (deliveryType) {
  case "1":
    console.log("Wybrałeś Paczkomat.");
    break;
  case "2":
    console.log("Wybrałeś Odbiór własny.");
    break;
  case "3":
    console.log("Wybrałeś Pocztę Polską.");
    break;
  case "4":
    console.log("Wybrałeś odbiór Kurierem.");
    break;
  default:
    console.log("Podałeś nieprawidłowe dane.");
}
//===============================================
console.log("")
console.log("Zadanie 4 - Wysokość zniżki")

const productNumber = prompt("Podaj liczbę produktów z zakresu od 1 do 1000");

function deduction(number) {
  let gotDeducion = false;
  let i = 1;

  if (number < 1 || number > 1000 || isNaN(number)) {
    console.log(`Podana wartość (${productNumber}) nie jest liczbą lub jest liczbą spoza wyznaczonego zakresu!`)
  } else if (number > 200) {
    console.log(`Dla ${productNumber} produktów zniżka wynosi: 100%`);
  } else {
    for (let j = 0; j <= 100; j += 5) {
      for (i; i <= 1000; i++) {
        if (i === number) {
          console.log(`Dla ${productNumber} produktów zniżka wynosi: ${j}%`);
          gotDeducion = true;
        }
        if (i % 10 === 0) {
          i++;
          break;
        }
        if (gotDeducion === true) break;
      }
      if (gotDeducion === true) break;
    }
  }
}

deduction(productNumber * 1);
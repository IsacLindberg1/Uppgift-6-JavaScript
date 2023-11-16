let min;
let max;
let numberToSquare;
let squaredNumber
let summa;
let resultatUppgift1;
let resultatUppgift2;

function init(){
    min = 1;
    max = 6;
    resultatUppgift1 = sumMinAndMax(min, max);
    console.log("Summan av talen mellan "+ min + " och " + max + " är: " + summa);
    
    numberToSquare = 5;
    resultatUppgift2 = returnSquareNumber(numberToSquare);
    console.log("Kvadraten av " + numberToSquare + " är: " + squaredNumber);
}

window.onload = init();

function sumMinAndMax(min, max){
  
    for (let i = min; i <= max; i++) {
      summa = i * i;
    }
    return summa;
}

function returnSquareNumber(numberToSquare){
    squaredNumber = numberToSquare * numberToSquare;
    return squaredNumber;
}

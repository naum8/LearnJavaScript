// let image = '';
// let strItem = '|_';
// let i = 0;
// while (i < 10) {
//    image = image + strItem;
//    i++;
//    console.log(image);
// }

// let blackItem = '\u2B1B';
// let whiteItem = '\u2B1C';
// let result = '';

// for (let i = 0; i < 8; i++) {
//    for (let j = 0; j < 8; j++) {
//       if ((i + j) % 2 === 0) {
//          result = result + whiteItem;
//       } else {
//          result = result + blackItem;
//       } 
//    }  
//    result = result + '\n';
// }
// console.log(result);

// let width = +prompt('Enter width', '5');
// let height = +prompt('Enter width', '5');
// let rectangleArea = width * height;
// let perimeter = 2 * width + 2 * height;
// if (width == height) {
//    console.log('it\'s a square');
// } else {
//    console.log('it\'s a rectangle');
// }
// console.log(`rectangleArea: ${rectangleArea}`);
// console.log(`perimeter: ${perimeter}`);

//let month = +prompt('Enter month number', 2);
// if (month > 0 && month <=2 || month == 12 ) {
//    console.log('season: winter');
// } else if (month >= 3 && month <= 5) {
//    console.log('season: spring');
// } else if (month >= 6 && month <= 8) {
//    console.log('season: summer');
// } else if (month >= 9 && month <= 11) {
//    console.log('season: autumn');
// } else {
//    console.log('error number');
// }

// switch(month) {
//    case 1:
//       console.log('season: winter');
//       break;
//    case 2:
//       console.log('season: winter');
//       break;
//    case 3:
//       console.log('season: spring');
//       break;
//    case 4:
//       console.log('season: spring');
//       break;
//    case 5:
//       console.log('season: spring');
//       break;
//    case 6:
//       console.log('season: summer');
//       break;
//    case 7:
//       console.log('season: summer');
//       break;
//    case 8:
//       console.log('season: summer');
//       break;
//    case 9:
//       console.log('season: autumn');
//       break;
//    case 10:
//       console.log('season: autumn');
//       break;
//    case 11:
//       console.log('season: autumn');
//       break;
//    case 12:
//       console.log('season: winter');
//       break;
//    default:
//       console.log('error');
// }

// let num = +prompt('Enter number', '');
// let evenAndOdd = '';
// let integerNum = '';
// let positiveNumber = '';
// if (num != 0) {
//    if (num % 2 === 0) {
//       evenAndOdd = 'even number';
//       //console.log(evenAndOdd);
//    } else  {
//       evenAndOdd = 'odd number';
//       //console.log(evenAndOdd);
//    } 
//    if (Number.isInteger(num)) {
//       integerNum = 'integer';
//       //console.log(integerNum);
//    } else  {
//       //console.log(num);
//       integerNum = 'not an integer';
//       //console.log(integerNum);
//    } 
//    if (num > 0) {
//       positiveNumber = 'positive number';
//       //console.log(positiveNumber);
//    } else {
//       positiveNumber = 'negative number';
//       //console.log(positiveNumber);
//    }
//    console.log(`Number info:\n1.Number: ${evenAndOdd}\n2.Number: ${integerNum}\n3.Number: ${positiveNumber}`)
// } else {
//    console.log('Number = 0');
// }



// let num = 0;
// function fizzBuzz() {
//    for (let i = 1; i <= 100; i++) {
//       num = i
//       if (i % 3 === 0 && i % 5 != 0 ) {
//          num = 'Fizz';
//       } else if (i % 5 === 0 && i % 3 != 0 ) {
//          num = 'Buzz';
//       } else if (i % 5 === 0 && i % 3 === 0 ) {
//          num = 'FizzBuzz';
//       } 
//       console.log(num);
//    }
// }
// fizzBuzz();
let num1 = 0;
let fizz;

function fizzBuzz1() {
   for (let i = 1; i <= 100; i++) {
      num1 = i;
      console.log(((num1 % 3 === 0) && (num1 % 5 === 0) && "fizzBuzz") || ((num1 % 3 === 0) && "fizz") || ((num1 % 5 === 0) && "Buzz") || num1); 
   }
}
fizzBuzz1();

//Can we divide it?
// function isDivideBy(number, a, b) {
//    if (number % a === 0 && number % b === 0) {
//      return true
//    } else {
//      return false
//    }
//  }

// Capitalization and Mutability
// function capitalizeWord(word) {
//    let wordNew = word[0].toUpperCase() + word.slice(1);
//    console.log(wordNew);
//    return wordNew;
// }
// capitalizeWord('andrei');

// Century From Year
// function century(year) {
//    return Math.ceil(year/100);
//  }

//Convert to Binary
// function toBinary(n){
//    return Number(n.toString(2));
// }

// Even or Odd
// function even_or_odd(number) {
//    if (number % 2 === 0) {
//      return 'Even';
//    } else {
//      return 'Odd';
//    }
// }

// Fake Binary
// function fakeBin(str){
//    let newStr = "";
//    for(let i=0;i<str.length;i++){
//      if(Number(str[i])>=5){
//        newStr += "1"
//      }
//      else{
//        newStr += "0";
//      }
//    }
//    console.log(newStr);
//    return newStr;
//  }
// fakeBin('444555666');

// // Largest Square Inside A Circle
// const areaLargestSquare = (r) => r*r*2;

// Number of Decimal Digits
// function digits(n) {
//    return String(n).length;
//  }
//  digits('3');

// Remove First and Last Character
// function removeChar(str){
//    return str.slice(1, -1)
//   };

// Remove String Spaces
// function noSpace(x){
//    return x.split(' ').join('');
//  }


// String ends with?
// function solution(str, ending){
//    return str.substr(-ending.length) == ending;
//  }

// String repeat
// function repeatStr (n, s) {
//    let str = '';
//   for (let i = 0; i < n; i++) {
//     str = str + s;
//   }
//   return str;
// }

// Student's Final Grade
// function finalGrade (exam, projects) {
//    if (exam > 90 || projects > 10) {
//      return 100;
//    } else if (exam > 75 && projects >= 5) {
//      return 90;
//    } else if (exam > 50 && projects >= 2) {
//      return 75;
//    } else {
//      return 0;
//    }
//  }

// Switch it Up!
// function switchItUp(number){
//    switch (number) {
//    case 0:
//      return 'Zero'
//        break;
//    case 1:
//      return 'One'
//        break;
//    case 2:
//      return 'Two'
//        break;
//    case 3:
//      return 'Three'
//        break;
//    case 4:
//      return 'Four'
//        break;
//    case 5:
//      return 'Five'
//        break;
//    case 6:
//      return 'Six'
//        break;
//    case 7:
//      return 'Seven'
//        break;
//    case 8:
//      return 'Eight'
//        break;
//    case 9:
//      return 'Nine'
//        break;
//  //   default:
//  //     alert( "Нет таких значений" );
//  }
//  }

// Thinkful - Logic Drills: Traffic light
// function updateLight(current) {
//    if (current === 'green') {
//      return "yellow";
//    } else if (current === "yellow") {
//      return "red"
//    } else if (current === "red"){
//      return "green"
//    }
//  }

// Transportation on vacation
// function rentalCarCost(d) { 
//    if (d >= 7) {
//        return d * 40 - 50;
//    } else if (d >= 3) {
//      return d * 40 - 20;
//    } else {
//      return d * 40;
//    }
//  }

// Type of sum
// function typeOfSum(a, b) {
//    return typeof(a + b);
// }
// typeOfSum('a' + 7);
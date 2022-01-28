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

// let a = 1;
// let b = 0;
// let c = a / b;
// console.log(c);
// console.log(typeof(c));

// const RS = 'rs';
// console.log(7 * 3 + (4 / 2) - (8 + (2 - 1)));
// console.log(7 * 3 + (4 / 2) - 8 + 2 - 1);
// console.log(Boolean('13px' < '14'));


//const showRS = (year, quarter) => year + quarter;

//const showRS = (text = year + quarter) => text

// const showRS = (year, quarter) => {return year + quarter}

//  const showRS = (year, quarter) => {return year, quarter}
// console.log('RSSchool ' + showRS('2021', 'Q3'));

// let message = 'asddddpppi';
// console.log(message[message.length - 1]);

// let i = 0; let c = 0; 
// const str = 'Rolling Scopes School'; 
// while (i < str.length) { if (str[i] === 'o') { c++; } i++; } 
// console.log(c);

// Merge two sorted arrays into one
// function mergeArrays(arr1, arr2){
//   var newArray = [];
//   newArray = newArray.concat(arr1);
//   for (var i = 0; i< arr2.length; i++) {
//     if (newArray.indexOf(arr2[i]) === -1){
//     newArray.push(arr2[i]);
//     }
//   }
//   return newArray.sort(function(a,b){
//     return a-b;
//   });
// }

// function add(num1, num2) {
//    num1 = ('' + num1).split('').reverse();
//    num2 = ('' + num2).split('').reverse();
//    console.log(num1)
//    let maxNum = Math.max(num1.length, num2.length);
//    console.log(maxNum);
//    let str = [];
//    for (let i = 0; i < maxNum; i++) {
//       str.push((parseInt(num1[i]) || 0 ) + (parseInt(num2[i]) || 0 ));
//       num1 = str.reverse().join('');
//       console.log(num1);
//       return parseInt(num1);
//    }
// }
// add(1234, 33456);

// сумма дву массивов и значений неизвестного количества 
// function combine(inputs){
//    let argsArray = [...arguments];
//    let resultObj = {};
//    for(let i = 0; i < arguments.length; i++){
//      for(let key in arguments[i]){
//        if(!resultObj[key]){
//        resultObj[key] = arguments[i][key];
//        }
//        else {
//          resultObj[key] += arguments[i][key];
//        }
//      }
//    }
//  return resultObj;
//  }

// Count the Digit 
// function nbDig(n, d) {
//    var o = '';
//      for(var i = 0; i <= n; i++){
//        o += Math.pow(i, 2);
//      }
//    return o.split(d).length-1
//  }

//Find the missing element between two arrays
// function findMissing(arr1, arr2) {
//    let index;
//    for( let i = 0; i < arr1.length; i++) {
//       index = arr2.indexOf(arr1[i]);
//      if (index > -1) {
//          arr2.splice(index, 1);
//      } else {
//          return arr1[i];
//      } 
//    }
//  }

//Maximum Triplet Sum (Array Series #7)
// function maxTriSum(numbers){
//    numbers.sort((a, b) => b - a)
//    let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
//    return arr[0] + arr[1] + arr[2]
//  }



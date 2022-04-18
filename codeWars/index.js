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

// Создайте функцию, которая принимает целое число в качестве аргумента. Сложите все числа от 1 до числа, которое вы передали функции. Например, если на входе 4, ваша функция должна вернуть 10, потому что 1 + 2 + 3 + 4 = 10.
// function numSum(x) {
//    let total = 0;
//    for (let i = 1; i <= x; i++) {
//       total = total +i;
//    }
//    console.log(total);
// }
// numSum(4);

// Создайте функцию, которая принимает массив в качестве аргумента и возвращает true или false в зависимости от того, является ли среднее всех элементов в массиве целым числом или нет. Предусмотреть валидацию на некорректные данные, в расчете принимаем только элементы типа number.
// function x(arr) {
//    let arrCopy = [];
//    let total = 0;
//    let result = 0;
//    for (let j = 0; j <= arr.length; j++) {
//       if (Number.isInteger(arr[j])) {
//          arrCopy.push(arr[j]);
//       }
//    }
//    console.log(arrCopy);
//    for (let i = 0; i <= arrCopy.length; i++) {
//          total = total + i;
//    }
//    console.log(total);
//    result = (total / arrCopy.length);
//    console.log(result);
//    if (Number.isInteger(result)) {
//       return true;
//    } else {
//       return false;
//    }
// }
// x([1,1.1,2,3,4,5.4,5,6,7, true,9]);

// function x(str) {
//    let newStr = str.split('+');
//    // console.log(newStr);
//    //first number 
//    let bynOne = newStr[0].split('бун');
//    let kopOne = bynOne[1].split('коп');
//    console.log(bynOne);
//    console.log(kopOne);
//    //second number
//    let bynTwo = newStr[1].split('бун');
//    let kopTwo = bynTwo[1].split('коп');
//    console.log(bynTwo);
//    console.log(kopTwo);
//    let bynSum = +bynOne[0] + +bynTwo[0];
//    console.log(bynSum);
//    let kopSum = +kopOne[0] + +kopTwo[0]; 
//    console.log(kopSum);
//    if (kopSum >= 100) {
//       bynSum = bynSum + 1;
//       kopSum = kopSum -100;
//       console.log(bynSum);
//       console.log(kopSum);
//       console.log(String(`${bynSum}бун ${kopSum}коп`));
//    } 
//    return String(`${bynSum}бун ${kopSum}коп`);
// }
// x('5бун 35коп + 4бун 68коп');

// function x(matrix) {
//    let numSum = 0;
//    let timeNum = 0;
//    for (let i = 1; i < matrix.length; i++) {
//      let arr = matrix[i];
//      console.log(arr);
//      for (let j = 0; j <= timeNum; j++) {
//        console.log(arr[j]);
//        numSum = numSum + arr[j];
//      }
//      timeNum++;
//    }
//    console.log(numSum)
// }
// x([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]);

// function highAndLow(numbers){
//    let newNumber = numbers.split(' ');
//    let arr = [];
//    let result = '';
//    //console.log(newNumber);
//    let total = newNumber.sort(function(a, b) {
//       return a - b;
//    });
//    //console.log(total);
//    let minItem = total[0];
//    //console.log(minItem);
//    let maxItem = total[total.length - 1];
//    //console.log(maxItem);

//    arr.push(maxItem);
//    arr.push(minItem);
   
//    result = arr.join(' ');
//    //console.log(result);
//    return result;
// }

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 43 4 -5"); // return "9 -5"

// function disemvowel(str) {
//    const letters = ['A','E','I','O','U','a','e','i','o','u'];
//   let newStr = '';
//   for (let i = 0; i <= str.length; i++) {
//     let char = str.charAt(i);
//     if (letters.indexOf(char) == -1) {
//       newStr = newStr + char;
//     }
//   }
//     return newStr;
// }

// function isIsogram(str){
//    let newStr = str.toLowerCase().split('').sort();
//    console.log(newStr);
//    for(let i = 0; i < newStr.length; i++) {
//       if (newStr[i] === newStr[i+1]) {
//          return false;
//       };
//    };
//    return true;
// };
// isIsogram('Dermatoglyphics');
// isIsogram('aba');
// isIsogram('moOse');

// function explode(s) {
//    let str = '';
//    for(let i = 0; i < s.length; i++) {
//       let num = parseInt(s[i]);
//       //console.log(num);
//       if(num != 0) {
//          do {
//             str += s[i];
//             num--;
//             console.log(num);
//          } while (num != 0);
//       };
//    };
//    //console.log(str);
//    return str;
// }
// explode("312"); //"333122"
// explode("102269"); //"12222666666999999999"

// function explode(s) {
//    let str = ``;
//    for (let i = 0; i < s.length; i++) {
//      let j = parseInt(s[i]);
//      console.log(j);
//      if (j !== 0) {
//        do {
//          str = str + s[i];
//          j--;
//          console.log(j);
//        } while (j !== 0);
//      }
//    }
//    console.log(str);
//    return str;
//  }

// function getParticipants(h){
//    for(var i=0,k=1;i<h;i+=k++);
//    return k;
//  }

// function duplicateEncode(word){
//    let arr = word.toLowerCase().split('');
//    let total = [];
//    for(i in arr) {
//       total.push(word.toLowerCase().split(arr[i]).length - 1 <= 1 ? '(' : ')');
//    };
//    return total.join('');
// };
// duplicateEncode("din"); //     =>  "((("
// duplicateEncode("recede"); //   =>  "()()()"
// duplicateEncode("Success");//  =>  ")())())"
// duplicateEncode("(( @");//     =>  "))((" 

// function nthFibo(n) {
//    if(n === 1) {
//       return 0;
//    } else if (n === 2){
//       return 1;
//    } else {
//       return n <= 1 ? n : nthFibo(n - 1) + nthFibo(n - 2);
//    }
// }
// nthFibo(10);

// function solution(number){
//    let arr = [];
//    for(let i = 0; i < number; i++) {
//       // console.log(i);
//       if(i % 3 === 0 || i % 5 === 0 ) {
//          arr.push(i)
//       }
//       // console.log(arr);
//    };
//    let sum = arr.reduce((sum, num) => sum + num, 0);
//    //console.log(sum);
//    return sum;
// };
// solution(20);

// let head = [1,2,3,4,5];
// let tail = [1,2,3,4,5];
// let init = [1,2,3,4,5];
// let last = [1,2,3,4,5];
// function showNewArr(head, tail, init, last) {
//    let newArr = [];
//    newArr.push(head[0]);

//    tail.splice(0, 1);
//    for(let i = 0; i < tail.length; i++) {
//       newArr.push(tail[i]);
//    }

//    init.pop();
//    for(let i = 0; i < init.length; i++) {
//       newArr.push(init[i]);
//    }

//    last.splice(0, last.length -1);
//    for(let i = 0; i < last.length; i++) {
//       newArr.push(last[i]);
//    }
//    //console.log(last);
//    //console.log(newArr);
//    return newArr;
// };
// showNewArr(head, tail, init, last);
// let arr = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
// function getLengthOfMissingArray(arr) {
//    let newArr = (arr || []).map(a => a ? a.length : 0).sort((a, b) => a - b);
//    //console.log(newArr);
//    if(newArr.includes(0)) {
//       return 0
//    };
//    for(let i = 0; i < newArr.length - 1; i++) {
//       if(newArr[i] + 1 !== newArr[i + 1]) {
//          return newArr[i] + 1 
//       };
//    };
//    return 0
// };
// getLengthOfMissingArray(arr);
// let arr = ["red", "green", "red", "blue", "blue"]; //2
// let arr1 = ["red", "red", "red", "red", "red", "red"] //3
// function numberOfPairs(gloves) {
//    let num = 0;
//    let arr = gloves.slice().sort((a,b)=>a.localeCompare(b));
//    console.log(arr);
//    for(let i = 0; i <= arr.length; i++) {
//       if(arr[i] === arr[i + 1]) {
//          num++
//          i++
//       };
//    };
//    return num
// };
// numberOfPairs(arr);
// numberOfPairs(arr1);

// function numberOfPairs(gloves) {
//    let num = 0;
//    let copyGloves = [...gloves].sort();
//    for (let i = 0; i < copyGloves.length; i++) {
//        if (copyGloves[i] === copyGloves[i+1]) {
//            num++;
//            copyGloves.splice(i, 2)
//            i--;
//        }
//    }
//    return num;
// }

// function calculate(...a) {
//    return (...b) => {
//       let newArr = a.concat(b)
//       let sum = 0;
//       // console.log(a);
//       // console.log(b);
//       //console.log(newArr)
//       for(let i = 0; i < newArr.length; i++) {
//          sum = sum + newArr[i];
//       };
//       return sum
//    }
// };
// calculate(1)(1) // должно вернуть 2
// calculate(1,1)(1) // должно вернуть 3
// calculate(1,1)(1,-1) // должно вернуть 2
// calculate(2,4)(3,7,1) // должно вернуть 17

// function myLanguages(results) {
//    //console.log(results);
//    let arr = [];
//    for (let i in results) {
//       if (results[i] > 59) {
//          arr.push(i);
//       }
//    }
//    //console.log(arr);
//    return arr.sort((a, b) => obj[b] - obj[a]);
// }
// myLanguages({"Java": 10, "Ruby": 80, "Python": 65})


// var runLengthEncoding = function(str){
//    let arr = [];
//    let value = 1;
//    for(let i = 0; i < str.length; i++) {
//       if(str[i] !== str[i+1]) {
//          arr.push([value, str[i]]);
//          value = 1;
//       }  else {
//          value++
//       }
//    }
//    return arr
// }
// runLengthEncoding("hello world!");

// function recycle(array) {
//    let obj = {'paper': [], 'glass': [], 'organic':[], 'plastic': []};
//    for(let item of array) {
//       obj[item.material].push(item.type);
//       if(item.secondMaterial != undefined) {
//          obj[item.secondMaterial].push(item.type);
//       };
//    };
//    return [obj['paper'],obj['glass'],obj['organic'],obj['plastic']];
// };

// function unluckyDays(year){
//    let dateNew = new Date(year,0).getTime();
//    //console.log(dateNew);
//    let date = 1000*60*60*24;
//    //console.log(date);
//    let counter = 0;
//    for(let i = 0; i < 365; i++) {
//       dateNew = dateNew + date;
//       //console.log(dateNew);
//       if(new Date(dateNew).getDay() === 5 && new Date(dateNew).getDate() === 13) {
//          counter++;
//       }
      
//    };
//    return counter
// }
// unluckyDays(2019);
// unluckyDays(2021);
// unluckyDays(2020)



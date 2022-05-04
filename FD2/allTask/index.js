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
// let num1 = 0;
// function fizzBuzz1() {
//    for (let i = 1; i <= 100; i++) {
//       num1 = i;
//       console.log(((num1 % 3 === 0) && (num1 % 5 === 0) && "fizzBuzz") || ((num1 % 3 === 0) && "fizz") || ((num1 % 5 === 0) && "Buzz") || num1); 
//    }
// }
// fizzBuzz1();

// let d= '';
// let aNew = '';
// let bNew = '';
// let cNew = '';
// let result = '';
// let x = '';
// let x1 = '';
// let x2 = '';
// function quadraticEquation(a, b, c) {
//    if (a != 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {  
//       aNew = ( a < 0 && ('- ' + (!(a == -1) && -a || ''))) || (a > 0 && (!(a == 1) && a || ''));
//       bNew = ( b < 0 && ('- ' + (!(b == -1) && -b || ''))) || (b > 0 && ('+ ' +(!(b == 1) && b || '')));
//       cNew = ( c < 0 && ('- ' + (!(c == -1) && -c || '1'))) || (c > 0 && ('+ ' +(!(c == 1) && c || '1')));

//       if (b == 0) {
//          result = `Уравнение ${aNew}x^2 ${cNew} = 0`
//       } else if (c == 0) {
//          result = `Уравнение ${aNew}x^2 ${bNew}x = 0`
//       } else {
//          result = `Уравнение ${aNew}x^2 ${bNew}x ${cNew} = 0`
//       }
      
//       d = Math.pow(b, 2) - 4 * a * c;
//       //console.log(d);

//       if (d > 0) {
//          x1 = (-b + Math.sqrt(d)) / (2 * a);
//          x2 = (-b - Math.sqrt(d)) / (2 * a);
//          console.log(result + ' имеет корни x1 = ' + x1 + ' и х2 = ' + x2);
//       } else if (d === 0) {
//          x = -(b / (2 * a));
//          console.log(result + ' имеет один корень x = ' + x);
//       } else {
//          console.log(result + ' не имеет вещественных корней');
//       }
//    } else {
//       console.log('Это не квадратное уравнение!');
//    }
// }
// quadraticEquation(1, 8, 72 ); //корней нет 
// quadraticEquation(1, 12, 36); //один корень
// quadraticEquation(4, -8, 1);  //два корня
// quadraticEquation(0, -8, 1);
// quadraticEquation(4, 'sas', "sassa");
// quadraticEquation(4, "sasass", 1);
// quadraticEquation(1, 1, -20);
// quadraticEquation(1, 0, 6);
// quadraticEquation(5, 6, 0);

// function countVowelLetters(str) {
//    let newStr = str.toLowerCase().split('');
//    //console.log(newStr);
//    const vowels = ['а','у','о','ы','э','я','ю','ё','и','е'];
//    console.log('Количество гласных = ' + newStr.filter(letter => vowels.includes(letter)).length);

// }
// countVowelLetters('Пришла весна, запахло...');
// countVowelLetters('fdjkdsfhjsdhjfkfhsjkd');
// countVowelLetters('длинношеее');
// countVowelLetters('Не будете ли вы так любезны, Иван передать мне блокнот и "Известия"');
// countVowelLetters('Архангел Уриил');

// function compress(str) {
//    let newStr = [];
//    let newStrAll = [];
//    let count = 1;
//    let letters = [];
//    letters = str.split('').sort();
//    //console.log(letters);
//    for (let i = 0; i < letters.length; ++i) {
//       let x = letters[i];
//       if (newStr[x] != undefined) {
//          newStr[x]++;
//          count++;
//          //console.log(count);
//          //console.log(letters[i]);
//       } else {
//          if (count !== 1) {
//             newStrAll.push(count);
//          }
//          newStr[x] = 1;
//          newStrAll.push(letters[i]);
//          count = 1;
//          //console.log(newStrAll)
//       } 
//    }
//    newStrAll.push(count);
//    console.log(str + ' => ' + newStrAll.join(''));
// }
// compress('a');
// compress('aaa');
// compress('aabbbaaaaaaaaaaaaaaaaaaaaaaaaa');
// compress('aabcc');

// function uncompress(str) {
//    let newStr = [];
//    let count = 0;
//    let letters = [];
//    letters = str.split('');
//    //console.log(letters);
//    if (str.length == 1) {
//       console.log(str + ' => ' + str);
//    } else {
//       for (let i = 0; i < letters.length; i++) {
//          if (!isNaN(letters[i])) {
//             for (let j = 0; j < letters[i]; j++) {
//                if (!isNaN(letters[i]) && !isNaN(letters[i + 1])) {
//                   count = +(letters[i] + letters[i + 1]);
//                   //console.log(count);
//                   for (let k = 0; k < count; k++) {
//                      newStr = newStr + letters[i-1];
//                      //console.log(newStr);
//                   }
//                } else {
//                   if (!isNaN(letters[i -1])) {
//                      newStr = newStr;
//                   }else {
//                      newStr = newStr + letters[i-1];
//                   }
//                   //console.log(newStr);
//                }
//             }
//          } else {
//             //console.log(letters[i]);
//          }
//       }
//       console.log(str + ' => ' + newStr);
//    }
// }
// uncompress('a');
// uncompress('a5');
// uncompress('a2b3');
// uncompress('a5');
// uncompress('a12b1c3');

// function uncompress(str) {
//    let newStr = str.split('');
//    let newStrAll = '';
//    if (newStr.length == 1) {
//       console.log(str + ' => ' + str);
//    } else {
//       for(let i = 0; i < newStr.length; i++) {
//          if (isNaN(newStr[i - 1]) && +newStr[i]) {
//             let count = '';
//             for (let j = 0; !isNaN(newStr[i+j]); j++) {
//                count = count + newStr[i+j]
//             }
//             newStrAll = newStrAll + newStr[i - 1].repeat(+count);
//          }
//       }
//       console.log(str + ' => ' + newStrAll);
//    }
// }
// uncompress('a');
// uncompress('a5');
// uncompress('a2b3');
// uncompress('b44a51');
// uncompress('a111b1c3');

// const btns = document.getElementsByTagName('button');
// //console.log(btns);
// for (let i = 0; i < btns.length; i++) {
// 	const a = makeCounter();
//    btns[i].onclick = function() {
//       btns[i].innerHTML = a();  
//    }
// }
// function makeCounter() {
//    let count = 0;
//    return function() {
//       return count++;
//    };
// }

// function makeCounter() {
//    let count = 0;
//    return function() {
//       return count++;
//    };
// }

// let a = makeCounter();

// console.log(a());
// console.log(a());
// console.log(a());
// const someFn = function() {
// 	return "Hello!";
//  }
//  console.log(someFn())

// function pow(a) {
// 	return (b) => {
// 		let result = 1;
// 		if (b >= 0) {
// 			for (let i = 0; i < b; i++) {
// 				result = result * a;
// 				//console.log(result);
// 			}
// 			return console.log(`${a}^${b} = ${result}`);
// 		} else {
// 			let newB = -b;
// 			let result1 = 1;
// 			//console.log(newB);
// 			for (let i = 0; i < newB; i++) {
// 				result = result * a;
// 			}
// 			result1 = 1 / result;
// 			//console.log(result1);
// 			return console.log(`${a}^${b} = ${result1}`);
// 		}
// 	}
// }
// const first = pow(-2)(3);
// const second = pow(4)(2);
// const third = pow(16)(0);
// const fourth = pow(2)(-3);

// function calculate(a) {
// 	return (b) => {
// 		return (c) => {
// 			let result = '';
// 			if (c === 0 && b === '/') {
// 				console.log(`${a} ${b} ${c} = Ошибка (на ноль делить нельзя)`);
// 			} else {
//             switch (b) {
// 					case '+':
// 						result = a + c;
// 						console.log(`${a} ${b} ${c} = ${result}`);
// 					break;
// 					case '*':
// 						result = a * c;
// 						console.log(`${a} ${b} ${c} = ${result}`);
// 					break;
// 					case '-':
// 						result = a - c;
// 						console.log(`${a} ${b} ${c} = ${result}`);
// 					break;
// 					case '/':
// 						result = a / c;
// 						console.log(`${a} ${b} ${c} = ${result}`);
// 					break;
// 					default:
// 					console.log('Не верный знак');
// 			}
// 		}
// 	}
// }
// }
// const firstCalculate = calculate(1)('+')(2);
// const secondCalculate = calculate(3)('*')(7);
// const thirdCalculate = calculate(15)('/')(5);
// const fourthCalculate = calculate(2)('/')(0);
// const fourthCalculate1 = calculate(2)('*')(0);

// let numbers = [2, 3, 5, 7, 11, 13, 17];
// function currentSums (arr) {
// 	let newNum = [];
// 	let newStrPlus = [];
// 	let str;
// 	arr.reduce((sum, total, i) => {				
// 		sum = sum + total;
//       //console.log(sum);
// 		newNum.push(sum);
//       //console.log(newNum);
// 		(i === 0) ? str = sum : str = str + '+' + total;	
//       //console.log(str);			
// 		newStrPlus.push(str);
//       //console.log(newStrPlus);	
// 		return sum;
// 	},0);
// 	return console.log(`[${newStrPlus}] = [${newNum}]`);
// }
// currentSums(numbers);

// function currentSums(numbers) {
//    let newArr = [];
//    let sumStr = '';
//    let sum = numbers.reduce(function (previousValue, currentValue) {
//       sumStr= sumStr+ ' ' + currentValue ;
//       let sum1 =  previousValue + currentValue;
//       newArr.push(previousValue + currentValue);
//       return sum1;
//    }, 0);
//    console.log(sumStr.split('+'));
//    console.log(newArr);
//    console.log(sum);
// }
// currentSums(numbers); // [2,5,10,17,28,41,58]

// const str = "Каждый охотник желает знать, где сидит фазан."; 
// function firstLettersFromString(str) {
//    let newStr = str.split(' ');
//    let firstLetters = '';
//    //console.log(newStr);
//    let strMap = newStr.map(function(item) {
//       firstLetters += item[0];
//       return firstLetters.split('');
//    })
//    //console.log(firstLetters.split(''));
//    return firstLetters.split('');
// }
// const newArr = firstLettersFromString(str);
// console.log(newArr); // [К, о, ж, з, г, с, ф]

// const startArray = [-1, 2, 3.5, -12, 4, 1.25, 16]; 
// function filteredArray(startArray) {
//    let result = startArray.filter(function(elem) {
//       	if (elem >= 0 && Number.isInteger(elem)) {
//       		return true;
//       	} else {
//       		return false;
//       	}
//       });
//       return result;
// }
// const newArray = filteredArray(startArray);
// console.log(newArray);  // [2, 4, 16]

// const array1 = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
// const array2 = [0, 2, 0, 4, 0, 6];
// const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function moveZeros(str) {
//    let newStr = str.sort((a, b) => {
//       if (a !== 0 && b === 0) return -1;
//       if (a === 0 && b !== 0) return 1;
//       return 0;
//    });
//    //console.log(newStr);
//    return newStr;
// }
// console.log(moveZeros(array1)); //[ false, 1, NaN, 2, null, 3, 4, 5, 0, 0, 0 ]
// console.log(moveZeros(array2)); //[ 2, 4, 6, 0, 0, 0 ]
// console.log(moveZeros(array3)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

// function changeArray(arr) {
//    //console.log(arr.length);
//    if (arr.length == '2') {
//       return console.log(arr.reverse());
//    } else if (arr.length % 2 === 0) {
//       //console.log(arr)
//       let count = arr.length / 2;
//       //console.log(count);
//       let arrStart = arr.slice(0, count);
//       //console.log(arrStart);
//       let arrEnd = arr.slice(count, arr.length);
//       //console.log(arrEnd);
//       let newArr = arrEnd.concat(arrStart);
//       return console.log(newArr);
//    } else if (arr.length % 2 != 0) {
//       //console.log(arr);
//       let count = (arr.length - 1) / 2;
//       //console.log(count);
//       let arrStart = arr.slice(0, count );
//       //console.log(arrStart);
//       let arrEnd = arr.slice(count + 1, arr.length);
//       //console.log(arrEnd);
//       let arrCenter = count + 1;
//       //console.log(arrCenter);
//       let newArr = arrEnd.concat(arrCenter).concat(arrStart);
//       return console.log(newArr);
//    } else {
//       return console.log('error');
//    }
// }
// changeArray([ 1, 2, 3, 4, 5 ]); //[ 4, 5, 3, 1, 2 ]
// changeArray([ 1, 2, 3, 4, 5, 6, 7]); //[ 5, 6, 7, 4, 1, 2, 3 ]
// changeArray([ 1, 2 ]); //[ 2, 1 ] 
// changeArray([ 1, 2, 3, 4, 5, 6, 7, 8]);  //[ 5, 6, 7, 8, 1, 2, 3, 4 ]

// const month = +prompt('enter month from 1 to 12', '1');
// const year = +prompt('enter a four-digit year', '2019');
// for (let i = 0; i < 1; i++) {
//       if (month != '' && year != '' && month != null && year != null) {
//          //console.log(`Month = ${month} and Year = ${year}`);  
//          i++
//       } else {
//          i--;
//       }
// }
// const titleUser = document.querySelector('.calendar__h2');

// function createCalendar(month=0, year=0, el=0) {
//    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//    let monthNum = month - 1;
//    //console.log(monthArr[monthNum]);
//    //console.log(monthNum);
//    let yearNum = year;
//    //console.log(yearNum);
//    titleUser.innerHTML = monthArr[monthNum] + ' ' + yearNum;
//    let dateAll = new Date(yearNum, monthNum);
//    //console.log(dateAll);

//    let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';

//    for (let i = 0; i < getDay(dateAll); i++) {
//       table += '<td></td>';
//    }

//    while (dateAll.getMonth() == monthNum ) {
//       table = table + '<td>' + dateAll.getDate() + '</td>';
//       console.log(dateAll.getDate());
//       if (getDay(dateAll) % 7 == 6) { 
//          table += '</tr><tr>';
//       }
//       dateAll.setDate(dateAll.getDate() + 1);
//    }

//    el.innerHTML = table;
// }
// function getDay(date) {
//    let dayOne = date.getDay();
//    //console.log(dayOne);
//    if (dayOne == 0){
//       dayOne = 7;
//       //console.log(dayOne);
//    }
//    return dayOne - 1;
// }
// createCalendar(month, year, calendarTable);

// function getCounter(a=0) {
//    this.a = a;
//       return {
//          a: a,
//          log: function() {
//             console.log(a);
//             return this;
//          },
//          count: function(b) {
//             a = a + b;
//             return this;
//          },

//          reset: function() {
//             a = 0;
//             return this;
//          },
//       };

// }
// let counter = getCounter(5);
// counter.log().count(4).log().count(3).log().reset().log().count(8).log();

// const month = 2;
// const year = 2018;
// const month = +prompt('enter month from 1 to 12', '1');
// const year = +prompt('enter a four-digit year', '2019');
// for (let i = 0; i < 1; i++) {
//       if (month != '' && year != '' && month != null && year != null) {
//          //console.log(`Month = ${month} and Year = ${year}`);  
//          i++
//       } else {
//          i--;
//       }
// }
// const titleUser = document.querySelector('.calendar__h2');

// const lastYear = document.querySelector('.calendar__last-year');
// const lastMonth = document.querySelector('.calendar__last-month');
// const nextMonth = document.querySelector('.calendar__next-month');
// const nextYear = document.querySelector('.calendar__next-year');

// function createCalendar(month=0, year=0, el=0) {
//    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//    let monthNum = month - 1;
//    //console.log(monthArr[monthNum]);
//    //console.log(monthNum);
//    let yearNum = year;
//    //console.log(yearNum);
//    titleUser.innerHTML = monthArr[monthNum] + ' ' + yearNum;
//    let dateAll = new Date(yearNum, monthNum);
//    //console.log(dateAll);

//    let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';

//    for (let i = 0; i < getDay(dateAll); i++) {
//       table = table + '<td></td>';
//    }

//    while (dateAll.getMonth() == monthNum ) {
//       table = table + '<td>' + dateAll.getDate() + '</td>';
//       console.log(dateAll.getDate());
//       if (getDay(dateAll) % 7 == 6) { 
//          table = table + '</tr><tr>';
//       };
//       dateAll.setDate(dateAll.getDate() + 1);
//    };

//    if (getDay(dateAll) != 0) {
//     for (let i = getDay(dateAll); i < 7; i++) {
//       table = table + '<td></td>';
//     };
//   };

//   table = table + '</tr></table>';
//    el.innerHTML = table;

//   lastYear.onclick = function () {
//     createCalendar(month, --year, el);
//   };
//   nextYear.onclick = function () {
//     createCalendar(month, ++year, el);
//   };
//   lastMonth.onclick = function () {
//     if (month === 1) {
//       createCalendar(month=12, --year, el);
//     } else {
//       createCalendar(--month, year, el);
//     };
//   };
//   nextMonth.onclick = function () {
//     if (month === 12) {
//       createCalendar(month=1, ++year, el);
//     } else {
//       createCalendar(++month, year, el);
//     };
//   };
// };
// function getDay(date) {
//    let dayOne = date.getDay();
//    //console.log(dayOne);
//    if (dayOne == 0){
//       dayOne = 7;
//       //console.log(dayOne);
//    };
//    return dayOne - 1;
// };
// createCalendar(month, year, calendarTable);

// var x = 'dsds';
// let y = '1111';
// console.log(this.x);
// console.log(this.y);

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const a = {a: 'a1',};
// const b = a;
// b.key = 'cccc';
// console.log(a.key)

// function calcWithFunc(num, func) {
//   if (func === undefined) {
//     return num;
//   } else {
//     return func(num);
//   };
// };
// function zero(func) {
//   return calcWithFunc(0, func);
// };
// function one(func) {
//   return calcWithFunc(1, func);
// };
// function two(func) {
//   return calcWithFunc(2, func);
// };
// function three(func) {
//   return calcWithFunc(3, func);
// };
// function four(func) {
//   return calcWithFunc(4, func);
// };
// function five(func) {
//   return calcWithFunc(5, func);
// };
// function six(func) {
//   return calcWithFunc(6, func);
// };
// function seven(func) {
//   return calcWithFunc(7, func);
// };
// function eight(func) {
//   return calcWithFunc(8, func);
// };
// function nine(func) {
//   return calcWithFunc(5, func);
// };
// function times(right) {
//   return function (left) {
//     return `${left} * ${right} = ` + left * right;
//   };
// };
// function plus(right) {
//   return function (left) {
//     return `${left} + ${right} = ` + (left + right);
//   };
// };
// function minus(right) {
//   return function (left) {
//     return `${left} - ${right} = ` + (left - right);
//   };
// };
// function dividedBy(right) {
//   return function (left) {
//     if (right === 0) {
//       return `${left} / ${right} = error`;
//     } else {
//       return `${left} / ${right} = ` + (left / right);
//     }
//   };
// };
// console.log(five(times(seven())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));
// console.log(six(dividedBy(zero())));

// let obj = {
//    a: 2,
//    'a': 5
// }
//console.log(obj['a']);
//console.log(obj[a]);

//task1 links
// let links = document.getElementsByTagName('a');
// for(let i = 0; i < links.length; i++) {
//    links[i].addEventListener('mouseover', linksFun);
// };
// function linksFun() {
//    this.innerHTML = this.title + ' (' + this.href + ') ';
//    this.removeEventListener('mouseover', linksFun);
// };

// //task2 input
// let inputs = document.getElementsByTagName('input');
// for(let i = 0; i < inputs.length; i++) {
//    inputs[i].addEventListener('blur', inputsFun);
// };
// function inputsFun() {
//    console.log('Value input = ' + this.value);
//    this.removeEventListener('blur', inputsFun);
// };

// //task3 Square number
// let itemP = document.getElementsByTagName('p');
// for(let i = 0; i < itemP.length; i++) {
//    itemP[i].addEventListener('click', itemPFun);
// };
// function itemPFun() {
//    this.innerHTML = this.innerHTML * this.innerHTML;
//    this.removeEventListener('click', itemPFun);
// };

// //task4 input data-length
// let dataLength = document.querySelectorAll('[data-length]');
// for(let i = 0; i < dataLength.length; i++) {
//    dataLength[i].addEventListener('blur', dataLengthFun);
// };
// function dataLengthFun() {
//    let maxLengthTask = this.dataset.length;
//    console.log(maxLengthTask);
//    let maxLengthValue = this.value.length
//    console.log(maxLengthValue);
//    if (maxLengthTask > maxLengthValue) {
//       this.classList.add('green');
//    } else {
//       this.classList.add('red');
//    };
// };

// const month = +prompt('enter month from 1 to 12', '1');
// const year = +prompt('enter a four-digit year', '2019');
// for (let i = 0; i < 1; i++) {
//       if (month != '' && year != '' && month != null && year != null) {
//          //console.log(`Month = ${month} and Year = ${year}`);  
//          i++
//       } else {
//          i--;
//       }
// }

//calendar3 ==================================================================================================================================================
// let years = ['Select year', 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
// let months = ['Select month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let tables = [];

// let blockHeader = document.createElement('header');
// blockHeader.classList.add('container__header');

// let selMonth = document.createElement('select');
// selMonth.setAttribute('id', 'selMonth');
// blockHeader.appendChild(selMonth);

// let selYear = document.createElement('select');
// selYear.setAttribute('id', 'selYear');
// blockHeader.appendChild(selYear);

// function addSelectFun(item, newSelect) {
//    newSelect.classList.add('container__select');
//    for(let i = 0; i < item.length; i++) {
//       let option = document.createElement('option');
//       option.innerHTML = item[i];
//       option.setAttribute('value', i);
//       newSelect.appendChild(option);
//    };
// };
// addSelectFun(months, selMonth);
// addSelectFun(years, selYear);

// let createBtn = document.createElement('button');
// createBtn.setAttribute('id', 'createBtn');
// createBtn.classList.add('create-btn');
// createBtn.innerHTML = 'Create calendar';
// blockHeader.appendChild(createBtn);

// let deleteBtn = document.createElement('button');
// deleteBtn.setAttribute('id', 'deleteBtn');
// deleteBtn.classList.add('delete-btn');
// deleteBtn.innerHTML = 'Delete calendar';
// blockHeader.appendChild(deleteBtn);

// let calendar = document.querySelector('.calendar');
// calendar.appendChild(blockHeader);

// let selMonthHtml = document.getElementById('selMonth');
// let selYearHtml = document.getElementById('selYear');

// //let deleteBtn = document.getElementById('deleteBtn')
// deleteBtn.onclick = function () {
//    let tableHtml = document.getElementsByTagName('table');
//    tableHtml[0].remove();
//    if (tableHtml.length == 0) {
//       deleteBtn.disabled = true;
//    };
// };
// let createBtnHtml = document.getElementById('createBtn');
// createBtnHtml.onclick = function() {
//    month = selMonthHtml.selectedIndex;
//    year = years[selYearHtml.selectedIndex];
//    createTable(month, year);
//    deleteBtn.disabled = false;
// };
// if (selMonthHtml.selectedIndex == 0 || selYearHtml.selectedIndex == 0) {
//    createBtnHtml.disabled = true;
// };
// function changeInput() {
//    if(selMonthHtml.selectedIndex == 0 || selYearHtml.selectedIndex == 0) {
//       createBtnHtml.disabled = true;
//    } else {
//       createBtnHtml.disabled = false;
//    };
// };
// selMonthHtml.onchange = changeInput;
// selYearHtml.onchange = changeInput;

// function createTable(mon, ye) {
//    let table = document.createElement('table');
//    tables.push(tables.length);
//    table.setAttribute('id', 'table' + tables.length);
//    calendar.appendChild(table);
//    table.classList.add('table-style');

//    let tableBlock = document.createElement('tr');
//    table.appendChild(tableBlock);
//    tableBlock.classList.add('table-block');

//    for(let i = 0; i < 5; i++) {
//       let tableDateBlock = document.createElement('th');
//       tableBlock.appendChild(tableDateBlock);
//       tableDateBlock.classList.add('table-date-block');
//    };

//    let tableHtml = document.getElementById('table' + tables.length);

//    let yearBefore = tableHtml.rows[0].cells[0];
//    yearBefore.innerHTML = `<span class="button"> << </span>`;
//    yearBefore.firstElementChild.onclick = function () {
//       ye = ye - 1;
//       displayDates();
//    };
//    let monthBefore = tableHtml.rows[0].cells[1];
//    monthBefore.innerHTML = `<span class="button"> < </span>`;
//    monthBefore.firstElementChild.onclick = function () {
//       mon = mon != 1 ? mon - 1 : 12;
//       displayDates();
//    };

//    let block = tableHtml.rows[0].cells[2];
//    block.setAttribute('colspan', "3");

//    let monthAfter = tableHtml.rows[0].cells[3];
//    monthAfter.innerHTML = `<span class="button"> > </span>`;
//    monthAfter.firstElementChild.onclick = function () {
//       mon = mon != 12 ? mon + 1 : 1;
//       displayDates();
//    };
//    let yearAfter = tableHtml.rows[0].cells[4];
//    yearAfter.innerHTML = `<span class="button"> >> </span>`;
//    yearAfter.firstElementChild.onclick = function () {
//       ye = +ye + 1;
//       displayDates();
//    };
//    let button = document.querySelectorAll('.button');
//    for(let i = 0; i < button.length; i++) {
//       button[i].classList.add('button-style');
//    };
//    for(let i = 0; i < 6; i++) {
//       let tableRow = document.createElement('tr');
//       tableRow.className = 'tableRow' + i;
//       for (let j = 0; j < 7; j++) {
//          let tableDate = document.createElement('td');
//          tableRow.appendChild(tableDate);
//          tableDate.classList.add('table-dates');
//          tableDate.className += 'tableDate' + j;
//       };
//       table.appendChild(tableRow);
//    };
//    let numOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//    let tableNumOfWeek = tableHtml.firstChild.nextSibling;
  
//    for(let i = 0; i < 7; i++) {
//       tableNumOfWeek.children[i].innerHTML = numOfWeek[i];
//    };
//    let tableRows = document.querySelectorAll('#table' + tables.length + ' tr:not(.tableRow0) td');

//    function displayDates() {
//       block.innerHTML = `${months[mon]} ${ye} year`;
//       time = new Date(ye, mon - 1, 1);
//       numOfWeek = time.getDay();

//       for (let i = 0; i < tableRows.length; i++) {
//          tableRows[i].innerHTML = '';
         
//       };
//       for (let i = 0; i < (32 - new Date(ye, mon - 1, 32).getDate()); i++) {
//          if (numOfWeek == 0) {
//             tableRows[i + numOfWeek  + 6].innerHTML = i + 1;
//             if ((i + numOfWeek ) % 7 == 0 || (i + numOfWeek  + 1) % 7 == 0) {
//                tableRows[i + numOfWeek  + 6].className += " table-dates-weekends"
//             } else {
//                tableRows[i + numOfWeek  + 6].className += " table-dates-weekdays"
//             }
//          } else {
//             tableRows[i + numOfWeek  + - 1].innerHTML = i + 1;
//             if ((i + numOfWeek ) % 7 == 0 || (i + numOfWeek  + 1) % 7 == 0) {
//                tableRows[i + numOfWeek  - 1].className += " table-dates-weekends"
//             } else {
//                tableRows[i + numOfWeek  - 1].className += " table-dates-weekdays"
//             };
//          };
//       };
//    };
//    displayDates();
//    tableHtml.addEventListener('mouseover', mouseoverFun);
//    function mouseoverFun(event) {
//       let target = event.target;
//       if(target.tagName == 'TD' && target.innerHTML && !isNaN(Number(target.innerHTML))) {
//          colorBG(target);
//       } else {
//          return;
//       };
//    };
//    tableHtml.addEventListener('mouseout', mouseoutFun);
//    function mouseoutFun(event) {
//       let target = event.target;
//       if(target.tagName == 'TD' && target.innerHTML && !isNaN(Number(target.innerHTML))) {
//          notColorBG(target);
//       } else {
//          return;
//       };
//    };
//    function colorBG(el) {
//       el.classList.add('color-red');
//    };
//    function notColorBG(el) {
//       el.classList.remove('color-red');
//    };
//    tableHtml.addEventListener('click', clickMouse);
//    function clickMouse(el) {
//       let target = el.target;
//       if(target.tagName == 'TD' && target.innerHTML && !isNaN(Number(target.innerHTML))) {
//          clickColorBG(target);
//          tableHtml.removeEventListener('mouseover', mouseoverFun);
//          tableHtml.removeEventListener('mouseout', mouseoutFun);
//       } else {
//          return;
//       };
//    };
//    let selTd;
//    function clickColorBG(el) {
//       if(selTd) {
//          selTd.classList.remove('color-red');
//       };
//       selTd = el;
//       selTd.classList.add('color-red');
//    };
// };
// createTable(03, 2022);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.filter(elem => elem % 2 == 0).map(elem=> Math.pow(elem, 2)).reduce((acc, num) => acc + num, 0);
// console.log(result);
// let sum = 0;
// function sumSquares() {
//    for(let i = 0; i <= arr.length; i++) {
//       if(arr[i] % 2 === 0) {
//          //console.log(arr[i]);
//          sum += arr[i]**2;
//       }
//    }
//    console.log(sum);
// }
// sumSquares(arr);

// const isPolindrome = (num) => {
//    if(num == 0) {
//       console.log(true);
//    } else if (num < 0) {
//       console.log(false);
//    } else if (num > 0) {
//       let numStr = String(num);
//       //console.log(numStr)
//       if(numStr === numStr.split('').reverse().join('')) {
//          //console.log(numStr);
//          console.log(true);
//       } else {
//          console.log(false);
//       }
//    }
// };
// isPolindrome(12); //false
// isPolindrome(121); //true
// isPolindrome(-121); //false
// isPolindrome(0); //true
// isPolindrome(15151); //true

// const formItem = document.getElementById('form');
// const userName = document.getElementById('name');
// const userAge = document.getElementById('date');
// const btn = document.getElementById('btn');
// const blockResult = document.getElementById('blockResult');
// const hiUser = document.getElementById('hiUser');
// const textB = document.getElementById('textB');
// const counter = document.getElementById('counter');

// btn.disabled = true;
// userName.addEventListener("input", dis);
// userAge.addEventListener("input", dis);
// function dis(){
//    if (userName.value && userAge.value){
//          btn.disabled = false;              
//    } else {
//       btn.disabled = true; 
//    }
// }
// //localStorage потому что надо после закрытия вкладки показать тоже результат
// btn.addEventListener("click", saveD);
// function saveD(event){
//    event.preventDefault();
//    const user = {
//          name: userName.value,
//          birthday: userAge.value,
//    }; 
//    localStorage.setItem("userAll", JSON.stringify(user));  
   
// }
// if (localStorage.getItem("userAll")){
//    formItem.classList.add("display-none");
//    showInfo();
// }
// function showInfo() {
//    blockResult.classList.remove("display-none");
//    let userJson = JSON.parse(window.localStorage.getItem("userAll"));
//    hiUser.textContent = "HI, " + userJson.name;
//    let birth = userJson.birthday;
//    counterAll(birth);
//    requestAnimationFrame(showInfo);
// }
// function counterAll(userBirthday) {
//    let userBirth = new Date(userBirthday);
//    let today = new Date;

//    if((userBirth.getDate() === today.getDate()) && (userBirth.getMonth() === today.getMonth())) {
//       textB.classList.add("display-none");
//       counter.textContent = `Happy birthday!`;
//       return;
//    }
//    if (userBirth.getMonth() == 1 && userBirth.getDate() == 29) {
//       let year = today.getFullYear();
//       if (userBirth.setFullYear(today.getFullYear()) < today) {
//       year += 1;
//       }
//       while (new Date(year, 1, 29).getDate() !== 29) {
//       year++;
//       }
//       userBirth.setFullYear(year);
//   } else {
//       userBirth.setFullYear(today.getFullYear());
//       if (userBirth < today) {
//           userBirth.setFullYear(today.getFullYear() + 1);
//       }
//   }
//   let time = Math.round((userBirth - today) / 1000);
//   let days = Math.floor(time / 60 / 60 / 24);
//   let hours = Math.floor((time / 60 / 60) % 24);
//   let minutes = Math.floor((time / 60) % 60);
//   let seconds = Math.floor(time % 60);
//   counter.textContent = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
// }

//Drag’n’Drop
// const body = document.body;
// const list = document.createElement('ul');
// list.classList.add('list');
// const title = document.createElement('h1');
// title.classList.add('title');
// title.innerHTML = 'Drag’n’Drop';
// body.append(title);
// body.append(list);

// let letters = ['D', 'C', 'A', 'B', 'E'];
// for(let i = 0; i < letters.length; i++) {
//    let item = document.createElement('li');
//    item.classList.add('item');
//    item.setAttribute('draggable', true);
//    item.innerHTML = letters[i];
//    list.append(item);
// }
// for(let item of list.children) {
//    switch(item.innerHTML) {
//       case 'A':
//          item.dataset.id = 1;
//          break;
//       case 'B':
//          item.dataset.id = 2;
//          break;
//       case 'C':
//          item.dataset.id = 3;
//          break;
//       case 'D':
//          item.dataset.id = 4;
//          break;
//       case 'E':
//          item.dataset.id = 5;
//          break;
//    }
// }
// let trueLetters = ['1', '2', '3', '4', '5'];

// let startPosX;
// let startPosY;

// list.addEventListener('dragstart', (event) => {
//    event.target.classList.add("focus-st")
//    let targetPos = event.target.getBoundingClientRect();
//    startPosX = event.pageX - targetPos.left;
//    startPosY = event.pageY - targetPos.top;
// });
// list.addEventListener("dragend", (event) => {
//    event.target.classList.remove("focus-st");
// });
// list.addEventListener('dragover', (event) => {
//    event.preventDefault();
//    event.dataTransfer.dropEffect = 'move';
//    const dragElement = list.querySelector(".focus-st");
//    const currentElement = event.target;
//    if(currentElement === list) {
//       return
//    }
//    currentElement.classList.add("item-focus");
//    const nextElement = (currentElement === dragElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;
//    currentElement.before(dragElement);
//    list.insertBefore(dragElement, nextElement);
// });
// list.addEventListener('dragleave', (event) => {
//    let leaveElement = event.target;
//    leaveElement.classList.remove("item-focus");
// });
// list.addEventListener('drop', (event) => {
//    event.preventDefault();
//    let currentElement = event.target;
//    if (currentElement === list) {
//       //checkFiveChildren();
//       return;
//    }
//    currentElement.classList.remove("item-focus");		
//    checkList.call(this);
// });

// function checkList() {
//    let currentLetters = [];
//    for(let item of list.children) {
//       currentLetters.push(item.dataset.id);
//    }
//    function comparison(a, b) {
//       let i = a.length;
//       if (i != b.length) return false;
//       while (i--) {
//          if (a[i] !== b[i]) return false;
//       }
//       return true;
//    }
//    (comparison(currentLetters, trueLetters)) ? list.classList.add("border-true") : list.classList.remove("border-true");
// }



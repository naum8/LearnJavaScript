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




















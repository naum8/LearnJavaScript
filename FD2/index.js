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




//console.log(str);
   // newStr = str.split('').sort();
   // //console.log(newStr);
   // firstLetter = newStr[0].split('');
   // //console.log(firstLetter);
   // for(let i = 0; i <= newStr.length; i++) {
   //    if (firstLetter[0] === newStr[i] ) {
   //       count++;
   //       console.log(count);
   //    } else {
   //       firstLetter.push(newStr[i]);
   //       console.log(firstLetter);
   //    }
   // }



function compress(str) {
   let newStr = [];
   let newStrAll = [];
   let count = 1;
   let letters = [];
   letters = str.split('');
   //console.log(letters);
   for (let i = 0; i < letters.length; ++i) {
      let x = letters[i];
      if (newStr[x] != undefined) {
         newStr[x]++;
         count++;
         //console.log(count);
         //console.log(letters[i]);
      } else {
         if (count !== 1) {
            newStrAll.push(count);
         }
         newStr[x] = 1;
         newStrAll.push(letters[i]);
         count = 1;
         //console.log(newStrAll)
      } 
   }
   newStrAll.push(count);
   console.log(str + ' => ' + newStrAll.join(''));
}
compress('a');
compress('aaa');
compress('aabbb');
compress('aabcc');


function uncompress(str) {
   let newStr = [];
   let newStrAll = [];
   let count = 0;
   let letters = [];
   letters = str.split('');
   console.log(letters);
   for (let i = 0; i < letters.length; i++) {
      if (typeof(letters[i]) === 'number') {
         console.log(letters[i]);
         
      } else {
         //console.log(letters[i]);
      }
   }


}
uncompress('a5b3')


// function uncompress (str) {
// 	var pos = 0;
// 	newStr = '';

// 	    while(str[pos]) {

// 	    	if (str[pos+1] && isNumeric (str[pos+1])) {    		
	        
// 	            for (var i = 0; i < str[pos+1]; i++) {
// 		            newStr = newStr + str[pos];
// 		    	}    
// 		    	pos = pos + 2;
// 		    } else {newStr = newStr + str[pos];
//               pos = pos + 1;
// 		    }
	    
// 	}      
// 		return console.log( str + ' => ' + newStr);
// }

// function isNumeric (n){
// return !isNaN( parseFloat(n) ) && isFinite(n);
// }


// compress("a");
//compress("aaa");
// compress("aabbb");
// compress("aaabcc");
// uncompress("a");
// uncompress("a5");
// uncompress("a2b3");
// uncompress("a12b1c3");

// Берёте всего одну переменную, которая будет содержать первую встреченную букву, затем сравниваете ее со следующей буквой из строки и если они одинаковы, то увеличиваете переменную-счётчик, а если не равно, то записываете в переменную-результат и букву и значение счетчика, после чего в переменную-букву записываете новую (ту которую встретили) букву и обнуляете счётчик

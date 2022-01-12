//task5.2
// let numFirst = +prompt('Enter number', '5');
// let numSecond = +prompt('Enter number', '3');
// let sum = numFirst + numSecond;
// console.log(sum);

// function numEnter() {
//    for (let i=0; i <= 1; i++) {
//       let num = +prompt('Enter number', '2');
//       if (isNaN(num)) {
//          let num = +prompt('Enter number', '2');
//          i--
//       } else if (num == '' || num == null) {
//          console.log(null);
//       } else {
//          console.log(num);
//       }
//    }
// }
// numEnter();

// function randomInteger(min, max) {
//    let numRandom = Math.floor(Math.random() * (max - min)) + min;
//    console.log('Random number = ' + numRandom);
//    let numRandom1 = Math.floor(Math.random() * 10)
//    console.log('Random number One = ' + numRandom1);
// }
// randomInteger(1, 10);

//item 5.3
// function ucFirst(str) {
//    console.log(str[0].toUpperCase() + str.slice(1));
// }
// ucFirst('first');

// function checkSpam(str) {
//    let newStr = str.toLowerCase();
//    if (newStr.indexOf('xxx') != -1 || newStr.indexOf('viagra') != -1 ){
//       console.log('str === SPAM');
//    } else {
//       console.log('str === DON\'T SPAM');
//    }
// }
// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");

// function truncate(str, maxLength) {
//    if (str.length > maxLength) { 
//       console.log(str.slice(0, (maxLength - 1)) + '...');
//    } else {
//       console.log(str);
//    }
// }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);// = "Вот, что мне хотело…"
// truncate("Всем привет!", 20); //= "Всем привет!"

// function extractCurrencyValue(str) {
//    console.log(str.slice(1));
// }
// extractCurrencyValue('$120');  //===120

//item 5.4
// let styles = ['jazz', 'blues'];
// console.log(styles);
// styles.push('Rok-n-roll');
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'class';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Reggae', 'Rap');
// console.log(styles);

// function sumInput() {
//    let arr = [];
//    while (true) {
//       let userText = prompt('inter text', 'oneText');

//       if (userText === '' || userText === null ) break;
//          arr.push(userText);
//          console.log('lenght = ' + arr.length);
//    }
// }
// sumInput();

//item 5.5
// function camelize(str) {
//    let arr = str.split('-');
//    for (let i = 1; i < arr.length; i++) {
//    arr[i] = (arr[i])[0].toUpperCase()+arr[i].slice(1);
//    }
//    str = arr.join('');
//    console.log(str);
// }
// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// function filterRangeInPlace(arr, a, b) {
//    arr.forEach((item, index) => {
//    (item >= a && item <= b) ? item = item : arr.splice (index, 1) })
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a, b) { return b - a; });
// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted() {
//    let cloneArr = arr.slice();
//    cloneArr.sort();
//    console.log(cloneArr);
//    console.log(arr);
// }
// copySorted();

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let names = [];
// names.push(vasya.name);
// names.push(petya.name);
// names.push(masha.name);
// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//    fullName: `${user.name} ${user.surname}`, 
//    id: user.id
// }));
// console.log(usersMapped);

// let arr = [1, 2, 3];
// function shuffle() {
//    arr.sort(() => Math.random() - 0.5);
//    console.log(arr);
// }
// shuffle();

//item 5.7
// function unique(arr) {
//    return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//    "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values));

// function aclean(arr) {
//    let obj = {};
//    for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//    }
//    return Object.values(obj);
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

//item 5.9
// function sumSalaries(salaries) {
//    let sum = 0;
//    for (let salary of Object.values(salaries)) {
//       sum = sum + salary;
//    }
//    return sum;
// }
// let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
// };
// console.log(sumSalaries(salaries));

// function count(user) {
//    let numLength = Object.values(user).length;
//    return numLength;
// }
// let user = {
//    name: 'John',
//    age: 30,
//    num: +375
// };
// console.log(count(user));




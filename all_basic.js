// variable >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  1.Number 2.String 3.Boolean

// 1. Number
var price = 20;
var Number = 10;
var students = 150;
var taka = 100;
var roll = 5211;
var seriale = 025;
var date = 26;
var code = 444;
var age = 26;
var temperature = 36;

// 2.String
var name = "Ayatullah";
var father = "Abdul Aziz Khan";
var mother = "Morzina Begum";
var vllage = "Chandosi";
var Thana = "Ghatail";
var Jela = "Tangail";
var Devition = "Dhaka";
var Country = "Bangladesh";

// 3.Boolean
var areYouOk = true;
var areYouGo = true;
var areYouCome = true;
var areYouAyatullah = true;
var areYouLiveInBangadesh = true;
var areYouGirll = false;
var areYouTeacher = false;
var areYouPoor = false;
var areYouMat = false;
var areYoufool = false;

// Math >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var chador = 120;
var ator = 60;
// console.log(chador + ator);

var chador = 120;
var ator = 60;
var resust = 120 + 60;
// console.log(resust);

var chador = 120;
var ator = 60;
var total = chador + ator;
// console.log(total);

var chador10TarDam = chador * 10;
// console.log(chadorErDam10);

// shorthand >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var price1 = 50;
// var price1 = price1 + 5;
// price1 = price1 + 5;
price1 += 5;
// console.log('5 taka dam barai mot price =', price1);

var price1 = 50;
// var price1 = price1 - 5;
// price1 = price1 - 5;
price1 -= 5;
// console.log('5 taka dam komai mot price =', price1);

// Jode 1 kore bare ba kome >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var age = 25;
// var age = 25 + 1;
// age = 25 + 1;
// age += 1;
age++;
// console.log(age);

var ayoKal = 25;
// var ayoKal = 25 - 1;
// ayoKal = 25 - 1;
// ayoKal -= 1;
ayoKal--;
// console.log(ayoKal);

// Integer float parseInt parseFloat >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Integer = purno sonkha(parseInt)
// float = dosomic sonkha(parseFloat)

// Integer
var choklet = 20;
// float
var paikareChoklet = 15.5;

var choklet = '20';
var StringToNumberForInteger = parseInt(choklet);
// console.log('string to number for integer', StringToNumberForInteger);

var paikareChoklet = '15.5';
var StringToNumberForFloat = parseFloat(paikareChoklet);
// console.log('string to number for float', StringToNumberForFloat);

// console.log('choklet o paikareChoklet er jog fol =', StringToNumberForInteger + StringToNumberForFloat);

// typeof >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var pen = 5;
// console.log(typeof pen);
var fatherName = "Abdul Aziz";
// console.log(typeof fatherName);
var iAmAStudent = true;
// console.log(typeof iAmAStudent);

// use toFixed with parseFloat >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
// console.log(total);

// modulus >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// modulus = vagses
var mangoe = 7;
var hungryPersone = 3;
// console.log(mangoe % hungryPersone);
var vagses = mangoe % hungryPersone;
// console.log(vagses);

// Array >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1.length 2.index
var number = [14, 15, 25, 34, 45, 67, 89, 100, 145, 359, 147];
// console.log(number);
var vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);
var friends = ["Arife", "Shakil", "Aminul", "Siam", "Rifat", "Happy", "Nijam", "Naser"]
// console.log(friends);

// 1.length
// console.log(friends.length);
var friendsCount = friends.length;
// console.log(friendsCount);

// 2.index
var index = friends[4];
// console.log(index);
var AminulKotoNumbereAse = friends.indexOf('Nijam');
// console.log(AminulKotoNumbereAse);
// jode pogition na pawa jai (-1)
var index = number.indexOf(333);
// console.log(index);
// thin number pogiton er number change korlam 34 theke 43
// console.log(number);
number[3] = 43;
// console.log(number);

// Add or remove element from array using push, pop >>>>>>>>>>>>>>>>>>>
// 1. push
var bondoBandob = ['Amir', 'Sakil', 'Mridul'];
bondoBandob.push('Arif');
// console.log(bondoBandob);
var exmNumber = [12, 14, 21, 25, 56];
exmNumber.push(200);
// console.log(exmNumber);


// 2.pop
var bondoBandob2 = ['Amir', 'Sakil', 'Mridul'];
bondoBandob2.pop();
// console.log(bondoBandob2);
var exmNumber2 = [12, 14, 21, 25, 56];
exmNumber2.pop();
// console.log(exmNumber2);

// condition  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//            <
//            >
//            ==
//            <=
//            >=
//            &&
//            ||

// if-else
if (5 == 5) {
    // console.log('sorto complite');
}
if (5 == 6) {
    // console.log('sorto complite');
}
else {
    // console.log('sorto complite na');
}



if (5 == 5 && 5 < 6) {
    // console.log('sorto complite');
}
if (5 == 5 && 5 > 6) {
    // console.log('sorto complite');
}
else {
    // console.log('sorto complite na');
}



if (5 == 5 || 5 > 6) {
    // console.log('sorto complite');
}
if (5 == 6 || 5 > 6) {
    // console.log('sorto complite');
}
else {
    // console.log('sorto complite na');
}




if ((5 == 5 && 5 != 6) || 5 > 6) {
    // console.log('sorto complite');
}
if ((5 == 6 && 5 != 6) || 5 > 6) {
    // console.log('sorto complite');
}
else {
    // console.log('sorto complite na');
}


// Multi stage condition  if-else
if (1 > 10) {
    // console.log('1 number sorto complite');
}
else if (2 > 10) {
    // console.log('2 number sorto complite');
}
else if (3 > 10) {
    // console.log('3 number sorto complite');
}
else if (4 > 10) {
    // console.log('4 number sorto complite');
}
else if (5 > 10) {
    // console.log('5 number sorto complite');
}
else {
    // console.log('ses sorto complite');
}


// nested condition  if-else
if (5 < 6) {
    if (5 == 5) {
        // console.log('sorter vitor sorto but taw complite');
    }
}

if (5 < 6) {
    if (5 != 5) {
        // console.log('sorter vitor sorto but taw complite');
    }
    else {
        // console.log('sorter vitor sorto but complite na')
    }
}


// Loop  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1.While  2.for
// 1.While
var badaNaPawaPorjontoCholteThake = 0;
while (badaNaPawaPorjontoCholteThake < 7) {
    badaNaPawaPorjontoCholteThake++;
    // console.log(badaNaPawaPorjontoCholteThake);
}

// while (odd)
var oddNumber = 1;
while (oddNumber < 20) {
    // console.log(oddNumber);
    oddNumber = oddNumber + 2;

}

// while (even)
var evenNumber = 2;
while (evenNumber <= 20) {
    // console.log(oddNumber);
    evenNumber = evenNumber + 2;

}

// 2.for
for (var forNumber = 0; forNumber < 7; forNumber++) {
    // console.log(forNumber);
}
for (var i = 0; i < 7; i++) {
    // console.log(i);
}

// for (odd)
for (var i = 1; i < 20; i += 2) {
    // console.log(i);
}

// for (even)
for (var i = 2; i <= 20; i += 2) {
    // console.log(i);
}

// run a loop for each element of an array     V.V.I  (lokma)
var numbers = [23, 15, 34, 59, 48, 89, 45, 11, 36, 12];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    // console.log(element);
}

var items = ['jam', 'kola', 'licho', 'atafol'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // console.log(item);
}


// function  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function functionName() {

}
// functionName();

// >>Function parameter
function functionName(taka) {
    console.log('parameter function kathamo is ok');
}
// functionName(100);


// >>function return
function jamardam(taka) {
    var ektaJamarDam = 500;
    var jamarSonkha = taka / ektaJamarDam;
    return jamarSonkha;
}
var takarMan = 5000;
var jama = jamardam(takarMan);
// console.log('mot jama pawa jabo =', jama, 'ta');


// Multiple parameter 
function tinTaNumber(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}
var number1 = 10;
var number2 = 20;
var number3 = 30;
var resust = tinTaNumber(number1, number2, number3);
// console.log('tinta number er jog fol =', resust, 'taka');


// Objects  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var book = {
    name: 'Quran', writter: 'Allah', sura: 114, ayate: 6466, resived: 'prophet Mohammad (S)'
}
// console.log(book);


var book2 = {
    name: 'Quran',
    writter: 'Allah',
    vasa: 'Arabic',
    sura: 114,
    ayate: 6466,
    resived: 'prophet Mohammad (S)'
}
// console.log(book2);

// See Object property
var book2 = {
    name: 'Quran',
    writter: 'Allah',
    vasa: 'Arabic',
    sura: 114,
    ayate: 6466,
    resived: 'prophet Mohammad (S)',
    price: 600
}
// console.log(book2);
// console.log(book2.writter);
var bookName = book2.name;
// console.log(bookName);
book2.price = 400;
book2['price'] = 300;
var priceChange = 'price';
book2[priceChange] = 250;
// console.log(book2);


// Javascript switch case break and default >>>>>>>>>>>>>>>>>>>>>>>>>>>
var color = 'skyblue';
if (color == 'blue') {
    console.log("color is blue");
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'white') {
    console.log('color is white');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    // console.log('color is black');
}

// switch case break and default
switch (color) {
    case 'blue':
        console.log('color blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
    // console.log('color is black');
}


// while and for loop break and continue  >>>>>>>>>>>>>>>>>>>>>>>>>>
var i = 0;
while (i < 10) {
    // console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
for (i = 0; i < 20; i++) {
    // console.log(i);
    if (i == 10) {
        break;
    }
}


// break
var numbers = ['15', '25', '36', '110', '36', '120', '130', '18'];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    // console.log(number);
    if (number > 100) {
        break;
    }
}

// continue (skip)
var numbers = ['15', '25', '36', '110', '46', '120', '130', '18'];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    // console.log(number);
}


// let, const  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let price = 50;
price = 30;
price = 20;

const Name = 'Ayatullah';


// Inch to Feet, miles to kilometer using function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var Inches = 132;
var feet = Inches / 12;
// console.log('132 inche =', feet, 'feet');


// Inch to Feet
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var my1stInch = 1200;
var result = inchToFeet(my1stInch);
// console.log('1200 inche =', result, 'feet');

var my2ndInch = 2400;
var result = inchToFeet(my2ndInch);
// console.log('2200 inche =', result, 'feet');

var my3rdInch = 3600;
var result = inchToFeet(my3rdInch);
// console.log('3200 inche =', result, 'feet');


// miles to kilometer
function milesToKilometer(mile) {
    var kilometers = mile * 1.609344;
    return kilometers;
}

var my1stmiles = 10;
var result = milesToKilometer(my1stmiles);
// console.log('10 mile =', result, 'kilometers');

var my2ndmiles = 20;
var result = milesToKilometer(my2ndmiles);
// console.log('20 mile =', result, 'kilometers');

var my3rdmiles = 30;
var result = milesToKilometer(my3rdmiles);
// console.log('30 mile =', result, 'kilometers');


// even and odd number using function  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// vag ses ber korar neom 
// console.log(4 % 2);
var number = 4;
var vagses = 4 % 2;
// console.log(vagses == 0);

// Even with function
function even(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
var num1 = 50;
var result = even(num1);
// console.log('50 is even =', result);

var num1 = 55;
var result = even(num1);
// console.log('55 is even =', result);


// Odd with function
function Odd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
var num1 = 45;
var result = Odd(num1);
// console.log('45 is odd =', result);

var num1 = 124;
var result = Odd(num1);
// console.log('124 is odd =', result);



// Check whether a year is a Leap Year or not  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }

}
var son = 2024;
var callResult = leapYear(son);
// console.log('2024 is a leapyear =', callResult);

var son = 2025;
var callResult = leapYear(son);
// console.log('2025 is a leapyear =', callResult);


// program to check leap year (copy)
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        // console.log(year + ' is a leap year');
    } else {
        // console.log(year + ' is not a leap year');
    }
}
// take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);
checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2000);
checkLeapYear(1800);
checkLeapYear(1900);



// Calculate Factorial of a number using for loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
// console.log(factorial);

// Factorial with function 
function getFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var result = getFactorial(7);
// console.log(result);

// Factorial using a while loop or a decrementing loop
// function getFactorial(number) {
//     var factorial = 1;
//     var i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// var result = getFactorial(7);
// // console.log(result);

function getFactorial2(number) {
    var factorial = 1;
    var i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

var result = getFactorial2(6);
// console.log(result);








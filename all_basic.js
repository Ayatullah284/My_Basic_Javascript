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
    console.log(item);
}

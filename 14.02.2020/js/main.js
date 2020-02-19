

//task 1

//Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно,
//то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном
//модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть
//запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в
//alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.


function d() {
  debugger;
}
d();

function p(){
   window.name = prompt('enter name','');
}
p();

function a() {
  alert(name);
}
a(name);

//task 2

//Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает
//два числа и возвращает большее:

let x = Math.random();
let y = Math.random();
let max = (x,  y) => {
  if (x > y) return x;
  else return y;
}
console.log(x, y);
console.log(max(x, y));

//task 3
//Используя синтаксис ES5, напишите функцию-аналог Math.min().
//Функция принимает любое количество чисел и возвращает меньшее из них:


function arrayMin(array){
  var minvalue = array[0];
    for (var i = 0; i < array.length; i++) {
      if(array[i]<minvalue) {
          minvalue = array[i];
      }

    }
console.log(minvalue);

};
arrayMin(['0', '-1', '100', '500', '100500']);




//task 4
//Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
//каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename.
//Используя встроенные функции массивов:

//1. Отфильтруйте пользователей младше 18 лет
//2. Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и
//lastname, если есть все три, и только firstname и lastname, если middlename нет
//3. Сформируйте новый массив, который содержит только полное имя пользователей

const people = [{

    firstname: "Jack",
    lastname: "London",
    age : 15

}, {

    firstname: "William",
    lastname: "Blake",
    age : 45

},{

    firstname: "Henry",
    middlename: "David",
    lastname: "Thoreau",
    age : 23

},{

    firstname: "Richard",
    lastname: "Yates",
    age : 14

},{

    firstname: "George",
    middlename: "Gordon",
    lastname: "Byron",
    age : 32

},{

    firstname: "Charles",
    lastname: "Dickens",
    age : 10

},{

    firstname: "Ernest",
    lastname: "Hemingway",
    age : 54

},{

    firstname: "Howard",
    middlename: "Phillips",
    lastname: "Lovecraft",
    age : 44

},{

    firstname: "Edgar",
    middlename: "Allan",
    lastname: "Poe",
    age : 32

},];
console.log(people);

let underage = people.filter(element => element.age < 18);
console.log(underage);


for (let i = 0; i < people.length; i++) {
	let person = people[i];

	let nameParts = [];


	if ('firstname' in person) nameParts.push(person.firstname);
	if ('middlename' in person) nameParts.push(person.middlename);
  if ('lastname' in person) nameParts.push(person.lastname);

	person.fullName = nameParts.join(' ');
}

let fullNamesOnly = people.map(function(person){
  return person.fullName;
});


console.log(fullNamesOnly);

//task 5 (hope this is an option)
//Не используя методы массива, напишите функцию аналог метода shift.
//Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

let fruits = ['apple', 'plum', 'banana', 'pineapple'];
console.log(fruits);

function removeElement() {
  let string = fruits.join(' ');
  let newString = string.substr(string.indexOf(' ') + 1);
  let newArr = newString.split(' ');
  return newArr;
}
console.log(removeElement(fruits));

//task 6

//Не используя методы массива, напишите функцию аналог метода массива push.
//Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

let sameFruits = ['apple', 'plum', 'banana', 'pineapple'];
console.log(sameFruits);
let firstNewFruit = 'apricot';
let secondNewFruit = 'orange';

function addElement() {
  let string = sameFruits.join(' ');
  let newString = (string + ' ' + firstNewFruit + ' ' + secondNewFruit);
  let newArr = newString.split(' ');
  return newArr;
}
console.log(addElement(sameFruits));

//task 7

//Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект,
//поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями
//которых будет расширяться целевой объект.

let sourceObj1 = {
  field1: 'some value',
  field2: 'other value',
  field3: 'another value',
};

let sourceObj2 = {
  sourcefield1: '12',
  sourcefield2: '54'
};

function copyFields(target,...sources) {

  let newTargetObj = target;
  for(let i = 0; i < sources.length; i++){

    for(let key in sources[i]){
      newTargetObj[key] = sources[i][key];
      // console.log(newTargetObj);
    }
  }
  return newTargetObj;
}
console.log(copyFields( {}, sourceObj1, sourceObj2) );

//task 8

//Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask
//запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать
//с полученным значением - определяет callback



function ask () {
  let defaultValue = prompt('insert default value', '');
  let question = prompt('how old r u ?', defaultValue);
  console.log(question);
  return function(){
    console.log('you are' + question)
  }
}
var inner = ask();
console.log(inner);
inner();


//task 9
//Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом,
//находит максимальное и минимальное и возвращает их



function highAndLow(numbers) {
  let arr = numbers.split(' ');
  let x = Math.min.apply(null, arr)
  console.log(x);
  let y = Math.max.apply(null, arr)
  console.log(y);
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");


//task 10 (returns undefined)
//Напишите функцию checkNumber, которая получает на вход как параметр массив любых
//значений и возвращает true, если все элементы - числа, и false - если в массиве
//хотя бы  одно не число. Для проверки массива используйте метод every или some

function checkNumber(...array){

  array.every(element => !isNaN(element));


}
console.log(checkNumber([1, 2, '3', 'a']));
console.log(checkNumber([1, 2, '3', '4']));

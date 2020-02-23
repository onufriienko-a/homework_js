
/*
task 1 (works wrong (uncomment string 34 and see what happens))
Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения
 - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции
 должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы
  некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не
  передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает на странице
  текст в формате:
<имя_автора>, <дата>
<текст_сообщения>
*/

function setComment (date, message, author = 'Anonymus') {

  let added_date = document.querySelector('.added_date');
  let actualDate = document.createElement('time');
  added_date.appendChild(actualDate);
  actualDate.innerText = date;

  let name = document.querySelector('.name');
  let authorsName = document.createElement('span');
  name.appendChild(authorsName);
  authorsName.innerText = author + ', ';

  let comment = document.querySelector('.comment');
  let authorsComment = document.createElement('span');
  comment.appendChild(authorsComment);
  authorsComment.innerText = message;


}
setComment('2016-11-02', 'Everything is ok', 'John');
//setComment('2016-11-02', 'You could do it better!');


/*
task 2
Напишите функцию, которая возвращает куб переданного числа, аналог
Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
*/

function cube(x){
  let xCube = x;
  for (let i = 1; i < 3; i++){
    xCube *= x;
  }
  return xCube;
}
console.log(cube(2));
//
// ////////////////////////////////
//
function yCube(y, n = 3) {
  if (n == 1) {
    return y;
  } else {
    return y * yCube(y, n - 1);
  }
}
console.log(yCube(2));


/*
task 3
Напишите функцию extraCube, которая принимает в качестве параметра или число,
или массив числовых значений и возвращает либо куб числа, либо массив кубов,
в зависимости от типа входящего параметра (typeof). Для расчета куба числа
вместо встроенного метода Math.pow используйте собственную функцию.
*/



function extraCube(input) {

   if (Array.isArray(input)){
     let resultArr = [];
      for (let j = 0; j < input.length; j++){
		    resultArr.push( extraCube(input[j]));
	    }
	return resultArr;
    } if (typeof input === 'number'){
      let xCube = input;
      for (let i = 0; i < 2; i++){
        xCube *= input;
    }
  return xCube;
  }
}
console.log(extraCube(2));
console.log(extraCube([2, 3, 4]));

/*
task 4
Напишите функцию, которая вызывается и работает следующим образом:
console.log( multi(2)(3)(4) ); // 24
*/


var multi = function(x) {
  return function (y) {
    return function (z) { return x * y * z };
  }
}
console.log(multi(2)(3)(4));

/*
task 6 (функция парсит все элементы всех вложенных массивов в один. не придумал как учесть глубину)
Дан массив, элементами которого могут быть любые значения, включая другие массивы.
 Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на
 глубину depth, указанную в параметре функции. По умолчанию flat поднимает элементы
  на одну глубину (то есть если depth не указан).
*/

let data1 = [1, 2, [3, 4, [5, 6]]];


function flat(array) {
  var newArrey = [];
  (function flat1(array) {
    array.forEach(function(element) {
      if (Array.isArray(element)) flat1(element);
      else newArrey.push(element);
    });
  })(array);

  return newArrey;
}
console.log(flat(data1));

/*
task 7
“История в картинках”. Создайте массив тематически связанных строковых картинок.
 Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу
один из элементов массива (одну из картинок). Тема - свободная, ограничена только
 набором доступных строковых картинок.

*/

let emojiHex = ['😀', '😃', '😄', '😁', '😆', '😅']

function storry(arr){
let emoji = document.querySelector('.emoji');
  for ( let i = 0; i < arr.length; i++){
    (function(l){
      setTimeout(function(){
        emoji.innerText = arr[l];
      }, 1000 * l)
    })(i);
  }
}
storry(emojiHex);


/*
task 8
Найдите и исправьте ошибки в коде:
function foo() {
	function bar(a) {
		i = 3;
		return i + a;
	}

	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21
*/

function foo() {
	function bar(a) {
		x = 3;
		return x + a;
	}

	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo();


/*
ЗАМЫКАНИЯ

task 2

Используя замыкания, создайте функцию createAdder(), которая принимает на вход
любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру
 второй. Функция работает по следующему принципу:
 var hello = createAdder('Hello, ');
 alert( hello('John') ); // Hello, John
 alert( hello('Harry') ); // Hello, Harry

 var plus = createAdder(5);
 alert( plus(1) ); // 6
 alert( plus(5) ); // 10

 */

function addParam (param1) {

  return function(param2) {
    return param1 + param2;

  }
}
let plus = addParam(3);
alert( plus (1) );
alert( plus (5) );

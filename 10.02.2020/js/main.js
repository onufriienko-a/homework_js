//task 1
//Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
//Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

let sum = 0;

for(let i = 0; i < arr.length; i++){
  if (isNaN(arr[i]) == true){
    continue;
  } else {
    let item = +(arr[i]);
    sum += item;
  }
}
console.log(sum);
alert(sum);


// //task 2
// //Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// //Добавьте в начало массива значение ‘Backbone.js’
// //Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// //Добавьте в массив значение ‘CommonJS’ вторым элементом
// //Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let frameworks = ['AngularJS', 'JQuery'];

frameworks.unshift ('BackboneJS');
frameworks.push ('ReactJS', 'VueJS');
frameworks.splice (1, 0,'CommonJS');
alert((frameworks.indexOf('JQuery')) + ' - Это здесь лишнее');
frameworks.splice ((frameworks.indexOf('JQuery')), 1);

console.log(frameworks);


//task 3
//Создайте массив из минимум 100 случайных целых чисел. Переберите массив
//и сгенерируйте на его основе новый, который содержит только уникальные
//(неповторяющиеся) значения исходного массива. Решите, используя только цикл for.

for (let j = 0; j < numbers.length; j++) {
  if ((numbers[i]) % (numbers[i]) !== 0) {
    unicueNumbers.push();
  }

let numbers = [];
let uniqueNumbers = [];
numbers.length = 100;


for (let i = 0; i < numbers.length; i++) {
  numbers[i] = (Math.trunc(Math.random() * 100));
}
for (let l = 0; l < numbers.length; l++) {
  let number = numbers[l];
  let k = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (number === numbers[j]) {
        k++;
      }
    }
    if (k === 1) {
      uniqueNumbers.push(number)
    }
}


console.log(numbers);
console.log(uniqueNumbers);

//task 4 (str.split returns array with the same sequence, so no need to use indexOf of splice. or I'm missing something?)
//Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’.
//Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью
//любых методов массива (indexOf, splice ...). Затем объедините элементы массива
//в строку и выведите в alert исходный и итоговый варианты.

let str = 'Как однажды Жак звонарь сломал городской фонарь';
let arr = str.split(' ');
console.log(arr);
let newStr = arr.join(' ');
console.log(newStr);
alert(str);
alert(newStr);

//task 5
//Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода
//любых символов, полученное значение добавляйте в конец созданного массива. После выхода
//из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];

let sum = 0;

for (i = 0; i < 5; i++){
  let newElement = prompt('add new element');
    arr.push(newElement);
  if (isNaN(arr[i]) !== true){
    let item = +(arr[i]);
    sum += item;
  }
}
alert(sum);

//task 6 (can't separate the parts correctly)
//Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

let tableArr = [];
let tablePartArr = [];

for (let i = 10; i >= 1; i--){
  for (let j = 10; j >= 1; j--){
    let result = `${i} x ${j} = ${i * j}`;
    tablePartArr.unshift(result);

  }
tableArr.unshift(tablePartArr);
}
console.log(tableArr);

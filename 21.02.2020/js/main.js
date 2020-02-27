/*
task 1
Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное
*/

var calculator = {
x: 0,
y: 0,

  read(){
    this.x = +prompt('insert x', '');
    this.y = +prompt('insert y', '');

    if (!this.x || !this.y) throw new Error ('x and y must be inserted!');

    console.info('x = ' + this.x, ', y = ' + this.y)
  },
  sum(){
    console.info('x + y = ' + (this.x + this.y))
  },
  multi(){
    console.info('x * y = ' + this.x * this.y)
  },
  diff(){
    console.info('x - y = ' + (this.x - this.y))
  },
  div(){
    console.info('x / y = ' + this.x / this.y)
  },
}
calculator.read();
calculator.sum();
calculator.multi();
calculator.diff();
calculator.div();

/*
task 2
Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’
и методом start(), при вызове которого – coffeeMachine.start() – через 3
секунды появляется окно с сообщением, записанным в свойстве объекта message.
*/

let coffeeMachine = {
message: 'Your coffee is ready!',

  start(){
    setTimeout(function(){
      alert(coffeeMachine.message)
    }, 3000);
  }
}

coffeeMachine.start();

/*
task 3 (chaining's not working)
Создайте объект array с методом инициализации начального значения массива,
c методами добавления, удаления последнего элемента массива и методом возврата
текущего состояния массива. Используйте концепцию chaining для создания цепочки
вызовов.
*/

let array = {
  arr: [],
  setValue() {
    this.arr[0] = +prompt('set first value', '');
    for ( let i = 0; i < 5; i++){
      this.arr[i] = this.arr[0] + i;
    }
    console.log(this.arr);
  },
  pushItem() {
    let newItem = +prompt('insert new item', '');
    this.arr.push(newItem);
    console.log(this.arr);
  },
  popItem() {
    this.arr.pop();
    console.log(this.arr);
  },
}
array.setValue();
array.pushItem();
array.popItem();

//array.setValue().pushItem().popItem();


/*
task 4
Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два
объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello()
приветствуйте каждого из пользователей персонально.
*/

let people = [
  {
    firstname: 'John',
    lastname: 'Doe'
  },

  {
    firstname: 'Tom',
    lastname: 'Smith'
  },
];

function hello(name){
  alert(` Hello,   ${this.firstname} ${this.lastname} `);
};

people.forEach(item => hello.call(item));


/*
task 5 (it works, but alert(obj.getSum()); returns x + y = undefined)
Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv.
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида
‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал
ранее созданного калькулятора.
*/




let obj = {
  xobj: calculator.x,
  yobj: calculator.y,
  getSum() {
    return (this.xobj + ' + ' + this.yobj) + ' = ' + calculator.sum(this);
  },
  getDiff() {
    return (this.xobj + ' - ' + this.yobj) + ' = ' + calculator.diff(this);
  },
  getMulti() {
    return (this.xobj + ' * ' + this.yobj) + ' = ' + calculator.multi(this);
  },
  getDiv() {
    return (this.xobj + ' / ' + this.yobj) + ' = ' + calculator.div(this);
  }
}
obj.getSum();
obj.getDiff();
obj.getDiv();
obj.getMulti();

/*
task 6
“Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText.
Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода.
Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите
цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного
html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа
к вашему элементу не должен производиться поиск по DOM-дереву.
*/
let p = '';
let object = {
  delay: 1000,
  appendTo(target){
    p = $('<p>').appendTo(target)
  },
  appendText(text) {
      text = text.split('');
      for (let i = 0; i < text.length; i++) {
          let item = text[i];
          setTimeout (function() {
              $('<span>').text(item).appendTo(p);
          }, this.delay * i);

      }
  }
}

object.appendTo('.container');
object.appendText('some very important text');

/*
task 7
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(/* Ваш код *); // Ukraine
// format.apply(/* Ваш код *); // [Ukraine]
// format.call(/* Ваш код *); // Kyiv
// format.apply(/* Ваш код *); // Kyiv
// format.apply(/* Ваш код *); // undefined

*/

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, ' ',' '); // Ukraine
format.apply(country , [' [ ', ' ] ']); // [Ukraine]
format.call(country.capital, ' ',' '); // Kyiv
format.apply(country.capital,[' ',' ']); // Kyiv
format.apply(country.name, [' ',' ']); // undefined


/*
task 8
Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().
*/

let user = {
  name: 'Jonh',
}
 function format(start, end) {
  console.log(start + this.name + end);
}

function anonymusFormat(start, end) {
  format.call(user, start, end);
}
anonymusFormat('<<<', '>>>');

let bindFormat = format.bind(user);
bindFormat('<<<', '>>>');

/*
task 9
Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом:
разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую
функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:
*/

function concat(string1, string2, separator) {
  let result = string1 + separator + string2;
  return result;
}
function hello(result) {
  let bindFunction = concat.bind(null, 'hello', result, ' ');
  return bindFunction();
}

console.log(hello('world'));

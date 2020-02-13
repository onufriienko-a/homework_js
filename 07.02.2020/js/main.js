// //task 1 (not sure if it's correct, since newKeyValue returns Array instead of inserted value)
// //Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
// //С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt,
// //и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением,
// //которое также запрашивается из prompt.
//
var person = {
  firstname: 'John',
	lastname: 'Doe',
	age: 30,
  position: 'CEO',
  salary: 4000,
  height: 180,
  weight: 80,
}

let personKey = prompt('insert key name');


if (typeof person[personKey] !== "undefined") {
  alert(personKey + ' key exists!');
} else {
  let newKeyValue = prompt('insert value');
  person[personKey] = newKeyValue;
}
console.log(person);
//
//
// //task 2
// //Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
// //прочитанными из prompt (например: brand, model, resolution, color...), не используя
// //вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

var phone = {
  brand: prompt('insert brand name'),
  color: prompt('insert color'),
  model: prompt('insert model'),
  resolution: prompt('insert resolution'),
}

person.phone = phone;

console.log(person);
//
//
// // //task 3
// // //Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete,
// // //либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте)
// // //свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять
// // //или добавлять - также читается из prompt. Какое значение будет у добавленного
// // //свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование
// // //person заканчивается. И обновленные данные распечатываются в консоли.
//
let action = '';

while (true){
  let action = prompt('choose the action');
    if (action == 'update'){
    let addKeyName = prompt('insert key name to be added');
    let addKeyValue = prompt('insert ' + addKeyName + ' value');
    person[addKeyName] = [(addKeyValue)];
  } else if (action == 'delete'){
    let deleteKeyName = prompt('insert key name to be deleted');
    delete person.deleteKeyName;
  } else if (action === null){
    break;
  } else {
    alert('wrong action');
    continue;
  }
}
console.log(person);


//task 4
//Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный
//ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства
//(работа с DOM - с использованием методов Native JS).

let list = document.createElement('dl');
document.body.appendChild(list);

for (var key in person) {

  console.log(key, person[key]);
	let dt = document.createElement('dt');
	dt.innerText = key;

	let dd = document.createElement('dd');
	dd.innerText = person[key];

	list.appendChild(dt);
	list.appendChild(dd);
}

//task 5
//Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата
//(new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте,
//попадает ли введенная дата в диапазон дат объекта dates.

let dateToCheck = new Date (prompt('insert the date', 'yyyy-MM-dd'));
let dates = {
  date1: new Date(2020, 01, 07),
  date2: new Date(2019, 01, 07)
}

if ((dateToCheck <= dates['date1']) && (dateToCheck >= dates['date2'])){
  alert('inserted date meets the requirements');
} else {
  alert('wrong date');
}

// //task 6
// //Создайте структуру данных, полностью описывающую html-разметку картинки.
// //С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая
// //значения свойств из созданного объекта.
// //<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif"
// // alt="" style="border: 1px solid #ccc" width="200" />

let image = {
src:'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
alt:'',
width:200,
style:{
	border:{
	borderWidth :'1px',
	style :'solid',
	color :'#ccc'
  }
}
}
console.log(image);

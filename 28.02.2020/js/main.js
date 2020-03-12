// Task1
/*Расширьте глобальный объект Date методом getWeek, с помощью которого можно узнать номер недели в году.
А также добавьте в прототип метод getQuarter - для получения номера годового квартала
var date = new Date();
console.log( date.getWeek() ); // 9
console.log( date.getQuarter() ); // 1
 */

Date.prototype.getWeek = function() {
    let d = new Date;
    let weeksDuration = 24 * 3600 * 1000 * 7;
    let current = ( new Date(d.getFullYear(), 0, 1) ).getTime();
    let years = d.getTime();
    let numberOfHours = years - current;
    let numberOfWeek = Math.trunc(numberOfHours / weeksDuration + 1);

    return numberOfWeek;
};

Date.prototype.getQuarter = function() {
    if (this.getMonth() <= 2) {
        return 1;
    } else if(this.getMonth() > 2 && this.getMonth() <= 5) {
        return 2;
    } else if(this.getMonth() > 5 && this.getMonth() <= 8) {
        return 3;
    } else {
        return 4;
    }
};

let date = new Date();
console.info(date);
console.info( date.getWeek() ); // 9
console.info( date.getQuarter() ); // 1

// Task2
/* Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам.
Метод изменяет исходный массив.
var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]
*/

Array.prototype.swap = function(i, j) {
    this[this.length] = this[i];
    this[i] = this[j];
    this[j] = this[this.length-1];
    this.pop();
    return this;
};

let data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]

// Task3
/* В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство
health - которое определяет базовые боевые возможности игрока (выносливость), и power - сила удара. Оба
свойства определяются при создании экземпляра класса. Также игрок должен иметь метод hit для нанесения
удара другому игроку. При нанесении удара “жертва” теряет энергии (health) соответственно значению power
игрока, который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями.
И напишите пример боя, используя соответствующие методы и свойства.
*/

function Warrior(name, health,  power) {
    this.name = name || 'Mirko Cro Cop';
    this.health = health;
    this.power = power;
}

Warrior.prototype.hit = function(player) {
    player.health = player.health - this.power;
    console.info(`Player ${this.name} hits Player ${player.name} for:`, `${this.power}`);
    console.info(` ${player.name} Current health is:`, player.health);

    if (player.health < (player.health * 0.3)) {
        this.power *= 2;
    }
}

Warrior.prototype.superHit = function(player) {
    let power = Math.floor(this.power * 1.5);
    player.health = player.health - power;
    console.info(`Player ${this.name} hits ${player.name} with a super hit for:`, `${power}`);
    console.info(` ${player.name} Current health is:`, player.health);
}

Warrior.prototype.heal = function() {

    if (this.health <= 85) {
        this.health = this.health + 20;
        console.info(`Player ${this.name} is healed for 20 hp`);
    } else if (this.health <=50 ) {
        this.health = this.health + 35;
        console.info(`Player ${this.name} is healed for 35 hp`);
    }

    console.info(`${this.name} was healed. Current health is:`, this.health);
}

function resultFight(player1, player2) {
    let result = '';

    if (player1.health <= 0) {
        result = console.info(`${player2.name} killed ${player1.name}`);
      } else if (player2.health <= 0) {
        result = console.info(`${player1.name} killed ${player2.name}`);
      } else if (player1.health > 0 && player2.health > 0){
        result = console.info('nobody wins');
      }
      return result;
    }

let player1 = new Warrior('Alistair Overeem', 170, 20);
let player2 = new Warrior('Fedor Emelianenko', 150, 25);


console.info(`${player1.name} health before fight:`, player1.health);
console.info(`${player2.name} health before fight:`, player2.health);

player1.hit(player2);

player2.hit(player1);
player2.hit(player1);
player1.hit(player2);
player2.superHit(player1);
player1.heal();
player1.superHit(player2);
player1.hit(player2);
player1.hit(player2);
player2.superHit(player1);
player1.superHit(player2);
player1.hit(player2);

console.info(`${player1.name} health is`, player1.health);
console.info(`${player2.name} health is`, player2.health);

resultFight(player1, player2);

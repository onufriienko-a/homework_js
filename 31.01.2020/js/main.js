//task 1

//task 2 (not realy sure)

let speed = prompt('set snail speed');

if (+speed > 0){
  alert('snail is moving up');
} else if (+speed < 0){
  alert('snail is moving down');
} else {
  alert('looks like snail is having some rest');
};

//task 3

let myMoney = prompt('how much I have?', '');
let friendsMoney = prompt('how much my friend has?', '');
let overall = +myMoney + +friendsMoney;

if (overall <= 1000){
  alert('lets just get drunk');
} else if (overall <= 2000){
  alert('lets study English');
}else{
  alert('lets go to Malta');
};

//task 4

let age = prompt('how old are you?');

if( +age >= 20 && +age < 30){
  alert('youre in the army now');
} else {
  alert('youre free');
}

//task 5 (not working)

let bussNumber = prompt('whats the buss number?');

if ( (bussNumber == 7) || (bussNumber == 225) || (bussNumber == 255) ) {
  alert('lets go');
} else{
  alert('wait');
}

//task 6

let day = prompt('what day is it today?');

if( (day !== 'Saturday') && (day !== 'Sunday') ){
  alert('go to work!');
};

//task 7

let username = prompt('username:');

if( (username == '') || (username == null)){
  document.location.reload(true);
} else {
  alert('hello ' + username);
};

//task 8

let amount = prompt('set amount');
let currency = prompt('set currency');
let ua = +amount * 25;
let us = +amount / 25;
switch (currency) {
  case 'USD':
  case 'usd':
    alert(ua + 'UAH');
    break;
  case 'UAH':
  case 'uah':
    alert(us + 'USD');
    break;
  default:
    alert('incorrect currency')
};

//task 9

let greeting = '';
let lang = prompt('set language', 'ru, en, de');

switch (lang) {
  case 'ru':
    alert(greeting = 'Привет!');
    break;
  case 'de':
    alert(greeting = 'Guten Tag!');
    break;
  case 'en':
    alert(greeting = 'Hello!');
    break;
  default:
    alert('wrong language');
}


//task 10



//task 11

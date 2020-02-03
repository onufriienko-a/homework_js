// task 1

let a = 8;
let b = a * 3;
let c = a + b;
alert(a);
alert(b);
alert(c);

// task 2

let firstName = prompt("Enter Firstname");
let lastName = prompt("Enter Lastname");

const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1);
const lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.slice(1);

alert('Whats up' + " " + firstNameCapitalized + " " + lastNameCapitalized + "?");

// task 3

let num1 = prompt('set x');
let num2 = prompt('set y');
let o = parseInt(num1);
let g = parseInt(num2);

alert(0 * g);
alert(0 / g);
alert(0 + g);
alert(0 - g);

// task 4

let pathLength = 384400;
let shipSpeed = prompt('set ship speed');
let speed = parseInt(shipSpeed);

alert('flight duration:' + " " + (pathLength / speed) + " " + 'h');

// task 5

let k = prompt('insert number');

if (k % 2 == 0) {
  alert(false);
} else {
  alert(true);
}



//task 6 (it works, but I'm not sure)

let age = prompt('insert age');

let t = Number.isInteger( +age );

alert(t);

// task 7 (hope I understood this task correctly)

let bytes = prompt('insert number of bytes');

let kb = (bytes / 1e+3);
let mb = (bytes / 1e+6);
let gb = (bytes / 1e+9);
alert(bytes +" "+ "bytes = " +" "+ kb + " kilobytes =" + mb  + " megabytes =" + gb  + " gigabytes");

//task 8 (I dont even know)

let n = prompt('initial number of apples');
let e = prompt('eaten apples');
let r = n - e;

alert( Boolean(r) );

//task 9

let firstColumn = prompt('insert first column height');
let secondColumn = prompt('insert second column height');
let thirdColumn = prompt('insert third column height');

let maximalHeight = Math.max ( parseInt(firstColumn) , parseInt(secondColumn), parseInt(thirdColumn) );
alert(maximalHeight + 'px');

 // //task 10
let x = Math.random();
let y = prompt('set y');
let res = ((Math.round(x * 100)) <  (y) );
alert('x < y = ' +  res  +',  '+  ('x = ' + x + ', y = ' + y));

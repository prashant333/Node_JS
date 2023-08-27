let x;

const name = "prashant";
const age = 26;

x = "Hello my name is "+ name +" and I am " +age +' years old';

// Template literals

x= `Hello my name is ${name} and I am ${age} years old.`;

// String properties and methods

const s = new String('Hello World')

x = s.length
// When we run any property or method on primitive data type, JS using
// its wrapper cretes an object and then property or method is applied. 
// const s = new String("Hello World");

// objects have prototype, and that is where all the method is stored.

x = s.__proto__;

x = s.replace("World", "Prashant")

x=  s.includes("world")

x= s.split()
x= s.split(" ")
x = s.split('')
console.log(x)

// uppercase letter

let myString = "javascript developer"
console.log("This is upppercase letter challange:", `${myString[0].toUpperCase()}${myString.slice(1)}`)
console.log(myString.toUpperCase())

const mySentence = "this is awesome resource";
const words = mySentence.split(" ")

for (let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
}

console.log(words.join(" "))

// ********************* NUMBERS ***********************

x = Math.floor(Math.random() * 100+1)
y = Math.floor(Math.random() * 50+1)

console.log(x, y)

console.log("difference of x and y",x-y)
console.log('sum of x and y',x+y)
console.log('Product of x and y',x-y)
console.log("Quotient of x and y",x/y)
console.log("Remainder of x and y",x%y)

// *************** Date object *********************

let d;
 
d = new Date();

// month value starts from 0-jan, and 11- dec
d = new Date(2023, 5, 10)

// This is string implementation of date, here month starts from 1- jan, and 11- dec
d = new Date('2021-07-10T13:30:00') // this is YYYY/MM/DD
//d= new Date("07/20/2023 12:30:00") // this is MM/DD/YYYY
d= new Date("2022-07-23") // this could give a date of earlier day, due to clash in timezone.
// it is important to understand in which format we are giving the value of time, 
// if MM-DD-YYYY -> this could result in different date output due to time zone.

d= Date.now() //this will give us current UNIX timestamp, this is calculated in miliseconds
d = new Date('07/10/2022');
d= d.getTime();

d = new Date(1657391400000) // we can pass the timestamp itself as an argument
console.log(d)



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
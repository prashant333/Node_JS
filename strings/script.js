let x;

const name = "prashant";
const age = 26;

x = "Hello my name is "+ name +" and I am " +age +' years old';

// Template literals

x= `Hello my name is ${name} and I am ${age} years old.`;

// String properties and methods

const s = 'Hello World'

x = s.length
// When we run any property or method on primitive data type, JS using
// its wrapper cretes an object and then property or method is applied. 
// const s = new String("Hello World");



console.log(x)
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
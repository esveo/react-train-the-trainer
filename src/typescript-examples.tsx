/**
 * Default import can be named anything.
 * Named imports must be named exactly as they are exported.
 */
import keineAhnung, { foo, x } from "./lib";

// No difference between single and double quotes
console.log("Hello World!!!!!");

// let x: "mouseleave" = "mouseleave";

// x = "test";

// TypeScript supports very dynamic APIs like this
// window.addEventListener('mous')

let a: number = 1.2;
let b = "test";
let c = true;
let d = {};
let e = [];
let f = null;
let g = undefined;

function sum(a: number, b: number) {
  return a + b;
}

let h: 0 | 1 | 2 = 2;
h = 0;
// h = 3;

type Tribool = 0 | 1 | 2;

function sayHello(person: { name: string }) {
  console.log(person.name);
}

let hans = { name: "hans", age: 10 };

sayHello(hans);

type Person = { name: string; age: number };

function sayHello2(person: Person) {
  console.log(
    `Person ${person.name} is ${person.age.toFixed(
      10
    )} years old`
  );
}

sayHello2(hans);

type Options = 0 | 1 | 2 | { timeout: number };

function executeSomething(options: Options) {
  if (typeof options === "number") {
    console.log(options.toFixed());
  } else {
    console.log(options.timeout);
  }
}

foo();

console.log(x);

keineAhnung();

var aa = 5;
aa = 10;

try {
  var bb = 5;
  let cc = 5;
  const x = 5;
} catch (err) {}

function test() {
  let x = 5;
  var y = 5;
}

export {};

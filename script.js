"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// object oriented peogramming (OOP) {
// Constructor Functions -
// Prototype -
// Class -
// Inheritance -
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // object oriented peogramming (OOP)

// // In JavaScript, object-oriented programming (OOP) is supported through the use of objects, prototypes, and constructor functions. While JavaScript is a multi-paradigm language, it allows you to create and work with objects and classes in an object-oriented manner. As of ES6 (ECMAScript 2015), JavaScript introduced the class syntax, making it more similar to traditional class-based OOP languages. //

//============================================================================================================================================//

// // Constructor Functions:

// // Constructor functions are used to create object instances. They act as blueprints for creating objects with shared properties and methods. To create an object using a constructor function, you use the new keyword. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Prototype:

// // JavaScript uses prototypes for inheritance. Each object has an internal reference to its prototype, which is a separate object that contains shared properties and methods. You can add properties and methods to the prototype, and all instances created using the constructor function will inherit them. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Class:

// // ES6 introduced a more concise and class-based syntax for creating constructor functions. Under the hood, classes still use prototypes for inheritance, but the syntax is more familiar to developers coming from class-based OOP languages. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Inheritance:

// // In JavaScript, you can achieve inheritance by setting up the prototype chain. You can create a new constructor function that inherits from another constructor function's prototype using Object.create() or the class syntax.  //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // class

// // In JavaScript, a class is a syntactical feature introduced in ECMAScript 2015 (ES6) to make it easier to work with constructor functions and prototype-based inheritance, providing a more familiar syntax for developers coming from class-based object-oriented languages. Despite the class syntax, JavaScript is still prototype-based, and classes are essentially a syntactical sugar over JavaScript's existing prototype-based inheritance model. //

// // ClassName: The name of the class, following the same naming conventions as other JavaScript identifiers. //

// // constructor: The special method that gets called when an instance of the class is created. It is used to initialize the object's properties and can take any number of parameters. //

// // method1, method2, etc.: These are methods that define the behaviors (functions) associated with instances of the class. //

// // Class methods are added to the prototype, and they are shared across all instances of the class, just like when using constructor functions and prototypes. //

//============================================================================================================================================//

class Student {
  constructor(fullName, birtbYear) {
    this.fullName = fullName;
    this.birtbYear = birtbYear;
  }
  clkAge() {
    return 2023 - this.birtbYear;
  }
}

const student1 = new Student("Sami Khan", 2003);
const student2 = new Student("Monkey D Luffy", 2005);

console.log(student1);
console.log(student2.fullName);
console.log(student1.clkAge());

console.log(Student.prototype);
console.log(student1.__proto__);
console.log(Student.prototype === student1.__proto__);

//--------------------------------------------------------------------------------------------------------------------------------------------//

class Computer {
  constructor() {
    this.bank = [];
  }

  cpuClockSpeed(core, thread) {
    return `${core * thread}ghz`;
  }

  depositMoney(money) {
    this.bank.push(money);
  }
}

const computer1 = new Computer();

computer1.depositMoney(1000);
computer1.depositMoney(2000);
console.log(computer1.bank);
console.log(computer1.cpuClockSpeed(4, 8));

//--------------------------------------------------------------------------------------------------------------------------------------------//

class Bank {
  // #deposits is a private property and can't be accesed outside the Bank class //
  #deposits = [];
  #password;

  constructor() {
    this.#password = 1234; // Reassigning the private #password property //
  }

  depositMoney(money) {
    this.#deposits.push(money);
    console.log(this.#deposits);
  }
}

const deposit1 = new Bank();
const deposit2 = new Bank();

deposit1.depositMoney(100);
deposit1.depositMoney(500);
deposit2.depositMoney(3000);

console.log(deposit1);
console.log(deposit2);
console.log(deposit1.__proto__ === deposit2.__proto__);
console.log(deposit1.deposits);

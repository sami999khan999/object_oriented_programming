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

// // abstraction

// // Abstraction is one of the key principles of object-oriented programming (OOP), and it is also applicable in JavaScript, which is a multi-paradigm language that supports OOP concepts. Abstraction allows you to hide the complexity of an object and only expose the essential features or behaviors that are relevant to the context of the application. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // encapsulation

// // Encapsulation is one of the fundamental principles of object-oriented programming (OOP), and it's also applicable in JavaScript. Encapsulation refers to the bundling of data (properties) and methods (functions) that operate on that data within a single unit called a class. The internal details of the object are hidden from the outside world, and only the public interface (public methods) is accessible to interact with the object. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // inheritance

// // Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. In JavaScript, inheritance can be achieved using prototype-based inheritance. Prototype-based inheritance allows objects (instances) to inherit from other objects (prototypes). Each object in JavaScript has an internal property called [[Prototype]], which refers to its prototype object. When you access a property or method on an object, and it doesn't exist on the object itself, JavaScript will look for it in its prototype chain, going up the chain until it finds the property or until it reaches the end of the chain (usually Object.prototype). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // polymorphism

// // Polymorphism is another important concept in object-oriented programming (OOP), and it refers to the ability of different objects to be treated as instances of a common superclass, while also exhibiting their unique behaviors through overridden methods. In JavaScript, polymorphism can be achieved through method overriding and method overloading. //

// // Method Overriding:
// // Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. This allows the subclass to override or replace the behavior of the method inherited from the superclass. //

// // Method Overloading (using a workaround):
// // JavaScript does not support method overloading directly (having multiple methods with the same name but different parameters). However, we can achieve method overloading using a workaround by checking the number or type of arguments passed to the method. //

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

// class Student {
//   constructor(fullName, birtbYear) {
//     this.fullName = fullName;
//     this.birtbYear = birtbYear;
//   }
//   clkAge() {
//     return 2023 - this.birtbYear;
//   }
// }

// const student1 = new Student("Sami Khan", 2003);
// const student2 = new Student("Monkey D Luffy", 2005);

// console.log(student1);
// console.log(student2.fullName);
// console.log(student1.clkAge());

// console.log(Student.prototype);
// console.log(student1.__proto__);
// console.log(Student.prototype === student1.__proto__);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// class Computer {
//   constructor() {
//     this.bank = [];
//   }

//   cpuClockSpeed(core, thread) {
//     return `${core * thread}ghz`;
//   }

//   depositMoney(money) {
//     this.bank.push(money);
//   }
// }

// const computer1 = new Computer();

// computer1.depositMoney(1000);
// computer1.depositMoney(2000);
// console.log(computer1.bank);
// console.log(computer1.cpuClockSpeed(4, 8));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// class Bank {
//   // #deposits is a private property and can't be accesed outside the Bank class //
//   #deposits = [];
//   #password;

//   constructor() {
//     this.#password = 1234; // Reassigning the private #password property //
//   }

//   depositMoney(money) {
//     this.#deposits.push(money);
//     console.log(this.#deposits);
//   }
// }

// const deposit1 = new Bank();
// const deposit2 = new Bank();

// deposit1.depositMoney(100);
// deposit1.depositMoney(500);
// deposit2.depositMoney(3000);

// console.log(deposit1);
// console.log(deposit2);
// console.log(deposit1.__proto__ === deposit2.__proto__);
// console.log(deposit1.deposits);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // constructor function

// // A constructor function is a way of creating objects in JavaScript. It is a regular function that is used with the new keyword to create instances of objects. The main purpose of a constructor function is to set up the initial state (properties) of the object being created. The convention is to capitalize the first letter of a constructor function to distinguish it from regular functions. This helps developers identify and recognize constructor functions easily. //

//============================================================================================================================================//

// function Person(nickName, birthYear) {
//   this.nickName = nickName;
//   this.birthYear = birthYear;

//   this.ageCalk = function () {
//     console.log(2023 - birthYear);
//   };
// }

// const sami = new Person("Sami", 2003);
// const jon = new Person("Jhon", 1995);

// console.log(sami);
// console.log(jon);
// console.log(Person);

// console.log(sami.__proto__);
// console.log(jon.__proto__);
// console.log(Person.prototype);

// console.log(sami instanceof Person);
// console.log(jon instanceof Person);

// console.log(sami.nickName);
// console.log(sami.birthYear);

// console.log(jon.nickName);
// console.log(jon.birthYear);

// sami.ageCalk();
// jon.ageCalk();

//--------------------------------------------------------------------------------------------------------------------------------------------//

function Cpu(core, thread) {
  this.core = core;
  this.thread = thread;
}

const cpu1 = new Cpu(6, 24);
const cpu2 = new Cpu(4, 8);

Cpu.prototype.clockSpeed = function (num) {
  return `${(this.core * this.thread) / num}Ghz`;
};

console.log(cpu1.clockSpeed(30));
console.log(cpu2.clockSpeed(10));

console.log(Cpu.prototype);
console.log(cpu1.__proto__);
console.log(cpu2.__proto__);

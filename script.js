"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// object oriented peogramming (OOP) {
// Constructor Functions -
// Prototype -
// Class -
// Inheritance -
// abstraction -
// encapsulation -
// inheritance -
// polymorphism -
// }

// constructor function -

// ES6 Class {
// static method -
// }

// object.create() -

// inharitence between multiple classes {
// constractor function -
// ES6 classes -
// Object.create() -
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

// // abstraction:

// // Abstraction is one of the key principles of object-oriented programming (OOP), and it is also applicable in JavaScript, which is a multi-paradigm language that supports OOP concepts. Abstraction allows you to hide the complexity of an object and only expose the essential features or behaviors that are relevant to the context of the application. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // encapsulation:

// // Encapsulation is one of the fundamental principles of object-oriented programming (OOP), and it's also applicable in JavaScript. Encapsulation refers to the bundling of data (properties) and methods (functions) that operate on that data within a single unit called a class. The internal details of the object are hidden from the outside world, and only the public interface (public methods) is accessible to interact with the object. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // inheritance:

// // Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. In JavaScript, inheritance can be achieved using prototype-based inheritance. Prototype-based inheritance allows objects (instances) to inherit from other objects (prototypes). Each object in JavaScript has an internal property called [[Prototype]], which refers to its prototype object. When you access a property or method on an object, and it doesn't exist on the object itself, JavaScript will look for it in its prototype chain, going up the chain until it finds the property or until it reaches the end of the chain (usually Object.prototype). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // polymorphism:

// // Polymorphism is another important concept in object-oriented programming (OOP), and it refers to the ability of different objects to be treated as instances of a common superclass, while also exhibiting their unique behaviors through overridden methods. In JavaScript, polymorphism can be achieved through method overriding and method overloading. //

// // Method Overriding - Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. This allows the subclass to override or replace the behavior of the method inherited from the superclass. //

// // Method Overloading (using a workaround) - JavaScript does not support method overloading directly (having multiple methods with the same name but different parameters). However, we can achieve method overloading using a workaround by checking the number or type of arguments passed to the method. //

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
// const jhon = new Person("Jhon", 1995);

// console.log(sami);
// console.log(jhon);
// console.log(Person);

// console.log(sami.__proto__);
// console.log(jhon.__proto__);
// console.log(Person.prototype);

// console.log(sami instanceof Person);
// console.log(jhon instanceof Person);

// console.log(sami.nickName);
// console.log(sami.birthYear);

// console.log(jhon.nickName);
// console.log(jhon.birthYear);

// sami.ageCalk();
// jhon.ageCalk();

//--------------------------------------------------------------------------------------------------------------------------------------------//

// function Cpu(core, thread) {
//   this.core = core;
//   this.thread = thread;
// }

// const cpu1 = new Cpu(6, 24);
// const cpu2 = new Cpu(4, 8);

// Cpu.prototype.clockSpeed = function (num) {
//   return `${(this.core * this.thread) / num}Ghz`;
// };

// console.log(cpu1.clockSpeed(30));
// console.log(cpu2.clockSpeed(10));

// console.log(Cpu.prototype);
// console.log(cpu1.__proto__);
// console.log(cpu2.__proto__);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // ES6 Class

// // ES6 (ECMAScript 2015) introduced a new syntax for creating classes in JavaScript, providing a more structured and familiar way to implement object-oriented programming. ES6 classes are a syntactical sugar over the existing prototype-based inheritance and constructor functions, making it easier and cleaner to define classes and work with objects. //

// // Java Script Classes are not HOISTED. //
// //  Java Script Classes are first-class functions. //
// // Java Script Classes always uses "use strict" automatically. //

//============================================================================================================================================//

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calkAge() {
//     return 2023 - this.birthYear;
//   }

//   greet() {
//     return `Hello ${this.fullName}`;
//   }
// }

// const person1 = new Person("Sami", 2003);
// const person2 = new Person("Jhon", 1995);

// console.log(person1.calkAge());
// console.log(person2.calkAge());

// console.log(person1.greet());
// console.log(person2.greet());

// console.log(Person.prototype);
// console.log(person1.__proto__.constructor);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// class CinemaHall {
//   constructor(movieName, seatCount) {
//     this.movieName = movieName;
//     this.seatCount = seatCount;
//     this.audience = [];
//   }

//   audienceCount(name) {
//     this.audience.push(name, this.movieName, this.seatCount);
//   }
// }

// const sami = new CinemaHall("Jon Wick", 4);
// const luffi = new CinemaHall("Flim Read", 10);

// sami.audienceCount("Sami");
// luffi.audienceCount("Luffi");

// console.log(sami.audience);
// console.log(luffi.audience);

//--------------------------------------------------------------------------------------------------------------------------------------------//

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
// const computer2 = new Computer();

// computer1.depositMoney(1000);
// computer1.depositMoney(2000);
// console.log(computer1.bank);
// console.log(computer1.cpuClockSpeed(4, 8));

// computer2.depositMoney(10);
// computer2.depositMoney(20);
// console.log(computer2.bank);

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

// // static method

// // In object-oriented programming, a static method is a method that belongs to the class itself rather than to instances of the class (objects). It is a method that is associated with the class definition and can be called directly on the class, without needing to create an instance of the class. In JavaScript, you can define static methods in ES6 classes using the static keyword. Static methods are useful for utility functions or operations that are not specific to any particular instance but are related to the class as a whole. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// class TechShop {
//   constructor(cpu, gpu, ram) {
//     this.cpu = cpu;
//     this.gpu = gpu;
//     this.ram = ram;
//   }

//   pcPrice() {
//     return this.cpu + this.gpu + this.ram;
//   }

//   static profit() {
//     return 45629;
//   }
// }

// const buyer = new TechShop(56000, 360000, 24000);

// console.log(buyer.pcPrice());

// // a method defined using static can only be uesed by the class. //
// console.log(TechShop.profit());

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // object.create()

// // Object.create() is a static method in JavaScript that creates a new object with a specified prototype object. It provides an alternative way to create objects and set up prototypal inheritance without using constructor functions or classes. //

//============================================================================================================================================//

// const Person = {
//   calkAge() {
//     return 2023 - this.birthYear;
//   },
// };

// const person1 = Object.create(Person);
// const person2 = Object.create(Person);

// person1.fullName = "Sami";
// person1.birthYear = 2003;

// person2.fullName = "Jhan";
// person2.birthYear = 1996;

// console.log(person1.calkAge());
// console.log(person2.calkAge());

// console.log(Person);
// console.log(person1.__proto__);
// console.log(person2.__proto__);

// console.log(person1);
// console.log(person2);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const Person = {
//   clakAge() {
//     return 2023 - this.birthYear;
//   },

//   getParam(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const person1 = Object.create(Person);
// person1.getParam("Sami", 2003);

// console.log(person1);
// console.log(person1.clakAge());

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // inheritence between multiple classes

// // Inheritance between multiple classes, also known as hierarchical inheritance or multilevel inheritance, refers to a scenario in object-oriented programming where a subclass inherits from another subclass, creating a chain of inheritance. //

//============================================================================================================================================//

// // constractor function

// // class1
// function Person(fullName, birthYear) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calkAge = function () {
//   return 2023 - this.birthYear;
// };

// const person1 = new Person("Sami", 2003);

// console.log(person1);
// console.log(person1.fullName);
// console.log(person1.calkAge());

// // class2
// function Student(fullName, birtbYear, departmant) {
//   Person.call(this, fullName, birtbYear);
//   // we called fullName and birthYear property from Peron class. //
//   this.departmant = departmant;
// }

// Student.prototype = Object.create(Person.prototype);
// // hear we licked Student class with Person class. //
// // it's better not to creat any methods in sub class. //

// const student1 = new Student("Jhon", 1995, "CSC");

// console.log(student1);
// console.log(student1.fullName);
// console.log(student1.departmant);
// console.log(student1.calkAge());

//============================================================================================================================================//

// // ES6 classes

// class player {
//   constructor(nickName, jerseyNum, rating) {
//     this.nickName = nickName;
//     this.jerseyNum = jerseyNum;
//     this.rating = rating;
//   }

//   playersJersey() {
//     console.log(`${this.nickName}'s jersey number is ${this.jerseyNum}`);
//   }
// }

// const ronaltho = new player("Ronaltho", 9, 94);

// console.log(ronaltho);
// console.log(ronaltho.__proto__);
// console.log(ronaltho.nickName);
// ronaltho.playersJersey();

// class Captain extends player {
//   // when we use (extends) to inherite properties from Player class Captain class looses it's this value //
//   constructor(nickName, jerseyNum, rating, bandCol) {
//     super(nickName, jerseyNum, rating);
//     this.bandCol = bandCol;
//   }
// }

// const messi = new Captain("Messi", 10, 92, "green");

// console.log(messi);
// console.log(messi.__proto__);
// console.log(messi.rating);
// messi.playersJersey();

//============================================================================================================================================//

// // Object.create()

// const Person = {
//   clakAge() {
//     return 2023 - this.birthYear;
//   },

//   getParam(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const person1 = Object.create(Person);
// person1.getParam("Sami", 2003);

// console.log(person1);
// console.log(person1.clakAge());

// const person2 = Object.create(person1);
// person2.getParam("Jhon", 1995);

// console.log(person2);
// console.log(person2.clakAge());

// console.log(Person);
// console.log(person1.__proto__);
// console.log(person2.__proto__);

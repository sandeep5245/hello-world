"use strict";
// console.log("This is javascript in node.");
// let z = 100;
// function addToZ(x:number, y:number) : number {
//     return x + y + z;
// }
// let annAdd = function(x:number, y:number):number{
//     return x+y+z;
// }
// console.log(addToZ(10,20));
// console.log(annAdd(30,40));
// function Foo() {
//     this.bar = 123;
// }
// // call with the new operator
// var newFoo = new Foo();
// console.log(newFoo.bar); // 123
function Animal() { }
Animal.prototype.walk = function () {
    console.log("walk");
};
function Bird() { }
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function () {
    console.log("fly");
};
let bird = new Bird();
bird.fly();
bird.walk();
class clsAnimal {
    walk() {
        console.log("walk in class");
    }
}
class clsBird extends clsAnimal {
    fly() {
        console.log("fly in class");
    }
}
let clsbird = new clsBird();
clsbird.walk();
clsbird.fly();

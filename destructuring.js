"use strict";
var rect = { x: 0, y: 10, width: 15, height: 20, len: 15, func: () => { return "parent func - 1"; } };
// Destructuring assignment
let { x, y, height, width, len, func } = rect;
var objfun = rect.func;
console.log(x, y, width, height, len, func, func.prototype); // 0,10,15,20
// console.log(objfun.__proto__);
// console.log(func.prototype.constructor);
// console.log(func.prototype === objfun.__proto__);
//console.log(func.prototype.constructor === objfun.__proto__.constructor);
console.log(func.prototype.__proto__);
var newfunc = (a) => { return "new func - " + a; };
func.prototype.__proto__ = newfunc;
console.log(func.prototype.__proto__);
console.log(objfun());
rect.x = rect.len = 10;
({ x, y, width, height, len } = rect); // assign to existing variables using outer parentheses
console.log(x, y, width, height, len); // 10,10,15,20
let { x: x1, y: y1, width: widht1, height: height1, len: len1 } = rect;
console.log(x1, y1, widht1, height1, len1);
/******************************* */
var foo = { bar: { bas: 123 } };
var { bar: { bas } } = foo; // Effectively `var bas = foo.bar.bas;`
console.log(bas);
/****************************************** */
// var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
// console.log(w, x, remaining); // 1, 2, {y:3,z:4}
// /**************************************** */
// var x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y); // 2,1
// var [x, y,...remaining] = [1,2,3,4];
// console.log(x,y,remaining);

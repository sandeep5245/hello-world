function foo(x, y, z) { 
    console.log(x, y, z);    
}
var args = [0, 1, 2];
console.log(args);
foo.apply(null, args);
// var objfoo = new foo();
// objfoo.print();
// var args1 = args;
// console.log(args1);
foo(...args);
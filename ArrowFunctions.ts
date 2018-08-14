// class Adder {
//     constructor(public a: number) {}
//     // This function is now safe to pass around
//     public add:any = (b: number): number => {
//         return this.a + b;
//     }

//     method1(){}
// }

// class ExtendedAdder extends Adder {
//     // Create a copy of parent before creating our own
//     private superAdd = this.add;
//     // Now create our override    
//     add = (b: number): number => {
//         return this.superAdd(b);
//     }
// }

// let clsadd:ExtendedAdder = new ExtendedAdder(5);
// //clsadd.a =5;
// console.log(clsadd.add(10));
/************************************************** */

// WRONG WAY TO DO IT
var foo = () => ({
    bar: 123
});

console.log(foo());

var newfoo = () => {
    return {bar:123}
}

console.log(newfoo());

var num = () => {
    return 123;
};

console.log(num());
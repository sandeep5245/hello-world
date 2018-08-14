function* idMaker(){
    let index = 0;
    while(index < 3)
      yield index++;
  }
  
  let gen = idMaker();
  
  console.log(gen.next()); // { value: 0, done: false }
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { done: true }


// function* infiniteSequence() {
//     var i = 0;
//     while(true) {
//         yield i++;
//     }
// }

// var iterator = infiniteSequence();
// while (true) {
//     console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// }

// function* externallyoperatedgenerator()
// {
//     console.log("Generator started");
//     yield "started";
    
//     console.log("Generator paused");
//     yield "paused";

//     console.log("Generator ended");
//     var foo = yield "ended";

//     console.log(`foo - ${foo}`);
// }

// var extgen = externallyoperatedgenerator();
// console.log(extgen.next("my start"));
// console.log(extgen.next());
// console.log(extgen.next());
// console.log(extgen.next('new execution started'));


// function* generator() {
//     var bar = yield 'foo';
//     console.log(bar); // bar!
// }

// const iterator = generator();
// // Start execution till we get first yield value
// const foo = iterator.next();
// console.log(foo.value); // foo
// // Resume execution injecting bar
// const nextThing = iterator.next('bar');
// const next2thing = iterator.next('bar2');
// console.log(nextThing);
// console.log(next2thing);
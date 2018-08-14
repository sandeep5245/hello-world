import fs = require('fs');

async function foo() {
    try {
        var val = await getMeAPromise();
        console.log(val);
    }
    catch(err) {
        console.log('Error: ', err.message);
    }
}

function getMeAPromise()
{
    console.log("In promise function");
    //fs.readFile("good.json",function(err:Error, data:Buffer){ console.log(data.toString());});
    console.log(fs.readFileSync("good.json").toString());
    return "promise function ended";
}
foo();

// function delay(milliseconds: number, count: number): Promise<number> {
//     return new Promise<number>(resolve => {
//             setTimeout(() => {
//                 resolve(count);
//             }, milliseconds);
//         });
// }

// // async function always returns a Promise
// async function dramaticWelcome(): Promise<void> {
//     console.log("Hello");

//     for (let i = 0; i < 5; i++) {
//         // await is converting Promise<number> into number
//         let count:number = await delay(500, i);
//         console.log(count);
//     }

//     console.log("World!");
// }

// dramaticWelcome();
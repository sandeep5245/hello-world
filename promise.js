"use strict";
exports.__esModule = true;
var fs = require("fs");
var util_1 = require("util");
/******Synchronous version*****************************************/
// function loadJsonSync(filename: string)
// {
//     return JSON.parse(fs.readFileSync(filename).toString());
// }
// console.log(loadJsonSync("good.json"));
// try{
//     console.log(loadJsonSync("absent.json"));
// }catch(err){
//     console.log(`absent.json error message - ${err.message}`);
// }
// try{
//     console.log(loadJsonSync("invalid.json"));
// }catch(err){
//     console.log(`invalid.json error message - ${err.message}`);
// }
/******Synchronous version*****************************************/
/*******Asynchronous version***************/
function loadJsonAsync(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err)
            cb(err, null);
        else {
            try {
                var objjson = JSON.parse(data);
                cb(null, objjson);
            }
            catch (err) {
                cb(err, null);
            }
        }
    });
}
loadJsonAsync('good.json', function (err, data) {
    console.log('Our callback called');
    if (!util_1.isNull(err))
        console.log("good.json error - " + err.message);
    else
        console.log(data.firstname);
});
loadJsonAsync('absent.json', function (err, data) {
    if (err)
        console.log("absent.json error - " + err.message);
    else
        console.log(data);
});
loadJsonAsync('invalid.json', function (err, data) {
    if (err)
        console.log("invalid.json error - " + err.message);
    else
        console.log(data);
});
console.log("asynchronous call end point");
/*******Asynchronous version***************/
/*******Asynchronous version with Promise********/
// const promise = new Promise((resolve, reject) => {reject();});
// promise.then(
//     (res)=>{
//         console.log(res);
//     }, 
//     (err)=>{
//         console.log("error in promise");
//     }
// );
// Promise.resolve(123)
// .then((res)=>{console.log(`promise without object - ${res}`); throw Error('456'); return 'success';})
// .then((res)=>{console.log(`resolved - ${res}`); return Promise.reject(123);})
// .then((res)=>{console.log(res); return 789}, (err)=>{console.log(`error - ${err}`); return "abc";})
// .then((res)=>{console.log(res)});
/*******Asynchronous version with Promise********/
/*****Asynchronous JSON file access with Promise ****/
// function readFileAsync(filename:string):Promise<any>
// {
//     return new Promise((resolve,reject)=> {
//         fs.readFile(filename, (err,result)=> {
//             if(err) reject(err);
//             else resolve(result);
//         });
//     });
// }
// function loadJsonAsync(filename:string):Promise<any>
// {
//     return readFileAsync(filename)
//     .then((res)=>{return JSON.parse(res)});
// }
// loadJsonAsync("good.json")
// .then((data)=>{console.log(data)}, (err)=>{console.log(`Error in good.json - ${err.message}`)})
// .then(()=>{return loadJsonAsync("absent.json")})
// .then((data)=> {console.log(data)}, (err)=>{console.log(`Error in absent.json - ${err.message}`)})
// .then(()=>{return loadJsonAsync("invalid.json")})
// .then((data)=> {console.log(data)}, (err)=>{console.log(`Error in invalid.json - ${err.message}`)})
// .then(()=>{console.log("Called void promise"); return Promise.reject("abc")})
// .catch((err)=>{console.log("called final catch block")});
/*****Asynchronous JSON file access with Promise ****/ 

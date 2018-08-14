console.log("for-in for array");
var someArray = [9, 2, 5];
for (let item in someArray) {
    console.log(item); // 0,1,2
}

console.log("for-of for array");
for(let item of someArray)
{
    console.log(item);
}

console.log("for-in for string");
var hellostr = "Hello, I am typescript.";
for(let char in hellostr)
{
    console.log(char);
}

console.log("for-of for string");
let str = '';
for (let char of hellostr)
{
    str = str + char;
    console.log(str);
}
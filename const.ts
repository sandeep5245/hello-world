const abc:number = 123;
if(100 > abc)
{
    const abc:string = '345';
}


const obj:any = {value:100};
console.log(obj.value);
obj.value = {val:50};
console.log(obj.value);
console.log(obj.value.val);
console.log(obj);
obj.valnew = 50;
console.log(obj);
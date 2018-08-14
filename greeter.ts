interface Person {
    firstname?:string;
    lastname?:string;
    fullname?:string;
}

class Student{
    fullname:string;
    constructor(public firstname:string, public middlename:string, public lastname:string){
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
}

function greeter(person:Person)
{
    return "Hello " + person.fullname + `. Welcome to typescripting language programming.
    
    And my firstname is ` + person.firstname;
}
let user = new Student("Sandeep", "M R S", "Padarthy");

//document.body.innerHTML = greeter(user[0]);
console.log(greeter(user));
"use strict";
class Student {
    constructor(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
}
function greeter(person) {
    return "Hello " + person.fullname + `. Welcome to typescripting language programming.
    
    And my firstname is ` + person.firstname;
}
let user = new Student("Sandeep", "M R S", "Padarthy");
//document.body.innerHTML = greeter(user[0]);
console.log(greeter(user));

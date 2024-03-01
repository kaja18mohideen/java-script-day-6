class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
setLastName(lastName) {
        this.lastName = lastName;
    }
setAge(age) {
        this.age = age;
    }
setAddress(address) {
        this.address = address;
    }
introduce() {
        return `Hello! My name is ${this.getFullName()} and I am ${this.age} years old. I live at ${this.address}.`;
    }
}
const john = new Person('John', 'Doe', 30, '123 Elm St, Springfield');
console.log(john.introduce());

john.setAge(31); 
console.log(john.getAge()); 

class University {
    constructor(name, age, place) {
        this.setName(name);
        this.setAge(age);
        this.setPlace(place);
    }

    static type() {
        return 'UNIVERSITY';
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getPlace() {
        return this.place;
    }
    setPlace(place) {
        this.place = place;
    }
    printHeader() {
        console.log(`${this.name} is located at ${this.place} and it is ${this.age} years old.`);
    }
}
let sofiaUni = new University('Sofia University', 100, 'Sofia');
console.log(sofiaUni.getAge(), sofiaUni.getName(), sofiaUni.getPlace());
console.log(University.type());
sofiaUni.printHeader();

console.log('\n');

class Faculty extends University {
    constructor(name, age, place, nameOfF) {
        super(name, age, place);
        this.nameOfF = nameOfF;
    }
    getFacName() {
        return this.nameOfF;
    }
    setFacName(nameOfF) {
        this.nameOfF = nameOfF;
    }
    printHeaderF() {
        console.log(`${this.getFacName()} is part of the ${this.getName()},`);
        this.printHeader();
    }
}

let faculty = new Faculty('Sofia University', 100, 'Sofia', 'Maths and Programmer faculty');
console.log(faculty.getFacName());
console.log(Faculty.type());
faculty.printHeaderF();
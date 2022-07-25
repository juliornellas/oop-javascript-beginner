class Person {

    _name;

    constructor(name, age){
        this._name = name
        this.age = age
    }

    getName(){
        return this._name;
    }

    getAge(){
        return this.age;
    }

    getDescription(){
        // console.log('THIS:', this)
        return `${this.name} is ${this.age} years old and ${this.profissao} at the Institute`;
    }

}

class Professional extends Person{
    constructor(name, age, job){
        super(name, age)
        this.job = job;
    }

    // setJob = function setPro(newJob) {
    //     this.job = newJob
    // }

    // setJob = (newJob) => {
    //     this.job = newJob
    // }

    setJob(newJob) {
        this.job = newJob
    }
}

let person = new Person("Boto", 88);
// console.log(person.name)
console.log(person.getName())
// let person2 = new Person("Tiradenes", 63, "teacher");

// person.setTipo("teacher")

// console.log(person.getDescription())
// console.log(person2.getDescription())
// console.log(person.getName());
// console.log(person.getAge());

// let person1 = new Person("Saci", 33);

let professional = new Professional("Julio", 36, "IT Analyst");

console.log(professional)

// console.log(professional.getName())
// console.log(professional.getDescription())

// professional.setJob("Teacher")

// console.log(professional.getDescription())

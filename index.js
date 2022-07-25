class Person {
    
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getDescricao(){
        // console.log('THIS:', this)
        return `${this.name} tem ${this.age} e é ${this.profissao} do IFSP`;
    }

}

class Profissional extends Person{
    constructor(name, age, profissao){
        super(name, age)
        this.profissao = profissao;
    }

    // setProfissao = function setPro(novaProfissao) {
    //     this.profissao = novaProfissao
    // }

    // setProfissao = (novaProfissao) => {
    //     this.profissao = novaProfissao
    // }

    setProfissao(novaProfissao) {
        this.profissao = novaProfissao
    }
}

// let person = new Person("Boto", 88, "terceirizado");
// let person2 = new Person("Tiradenes", 63, "professor");

// person.setTipo("professor")

// console.log(person.getDescricao())
// console.log(person2.getDescricao())
// console.log(person.getName());
// console.log(person.getAge());

// let person1 = new Person("Saci", 33);

let profissional = new Profissional("Julio", 36, "Analista de TI");

// console.log(profissional)

// console.log(profissional.getName())
console.log(profissional.getDescricao())

profissional.setProfissao("professor")

console.log(profissional.getDescricao())

class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        console.log(`Meu nome é ${this.name}`);
    }
}

module.exports = {
    Person: Person
};
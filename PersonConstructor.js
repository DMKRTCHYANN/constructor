const p1 = Person("Samuel", 24)
const p2 = Person("Joel", 36)
const p3 = Person("Lily", 24)

function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
};
const person = new Person;
Person.prototype.eat = function(food){
    this.stomach.push(food);
    return `Stomach::: ${this.stomach}`
}
Person.prototype.poop = function(){
    this.stomach = [];
    return `Stomach::: ${this.stomach}`
}

Person.prototype.toSting() = function () {
    return `${this.name}, ${this.age}`
}
console.log(person.eat("tuq u mur"), person.poop());


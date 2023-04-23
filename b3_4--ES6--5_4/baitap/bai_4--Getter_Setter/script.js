class Person {
    constructor(name) {
        this.name = name;
    }
    get get_name() {
        return this.name;
    }
    set set_name(name) {
        this.name = name;
    }
    walk() {
        console.log(this.name + " đang đi chơi");
    }
}

class Programmer extends Person {
    constructor(props, language) {
        super(props)
        this.language = language
    }
    get get_language() {
        return this.language
    }
    set set_language(language) {
        this.language = language
    }
    writeCode() {
        console.log(this.name + " " + this.language);
    }
}


let person = new Programmer("Hoàng", "Javascript")
person.writeCode()
person.walk()
console.log(person.get_language)
console.log(person.get_name)
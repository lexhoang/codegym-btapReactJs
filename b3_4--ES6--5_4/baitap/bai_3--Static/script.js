class Info {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    get get_name() { return this.name; }
    get get_description() { return this.description; }

    set set_name(name) { this.name = name; }
    set set_description(description) { this.description = description; }

    calculate(a = 1) {
        console.log(a * 3);
    }
}

class Children extends Info {
    constructor(props, long) {
        super(props);
        this.long = long;
    }
    get get_long() { return this.long }
    set set_long(long) { this.long = long }
}

let children = new Children("Hoàng", "Mô tả", "20");
children.calculate(3);
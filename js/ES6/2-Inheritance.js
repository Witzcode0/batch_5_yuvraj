class Circle{
    constructor(redius){
        this.r = redius
    }

    red(){
        return this.r
    }
}

class Area extends Circle{
    FindAreaOfCircle(){
        return 3.14 * super.red() * super.red();
    }
}

// let shape = new Area(10)

// console.log(shape.FindAreaOfCircle());


class CircleAreaInfo extends Area{
    result() {
        return super.FindAreaOfCircle()
    }
}

let obj = new CircleAreaInfo(10)
console.log(obj.result());

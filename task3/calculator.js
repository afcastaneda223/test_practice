class Calculator{
    constructor(a=2,b=2){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b
    }
    substract(){
        return this.a - this.b
    }
    multiply(){
        return this.a * this.b
    }
    divide(){
        return this.a/this.b
    }
}

module.exports = Calculator;
console.log("Hello World!")

// Arrow function which return product of two numbers.

const product = (num1, num2) => num1*num2;
console.log(product(2,10));

//Creating student object

class Student {
    constructor(name, rollNo, result){
        this.name = name;
        this.rollNo = rollNo,
        this.result = result
    }
    print(){
        console.log(this.rollNo, this.name, this.result);
    }
}

let student1 = new Student("Kumar", 10210, "Passes");
let student2 = new Student("Pushpendra", 10222, "Passes");

student1.print();
student2.print();
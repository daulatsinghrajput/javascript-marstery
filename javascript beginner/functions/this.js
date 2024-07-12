const student = {
    name: "daulat",
    id: 123,
    city: "jaipur",
    eng: 90,
    maths: 98,
    science: 97,

    avg: function(){
        let avg = (this.eng + this.maths + this.science)/3;
        console.log(`${this.name} avg marks is ${avg}`);
        console.log(this);
    }
}
console.log(student.name);
// console.log(student.avg());
student.avg();
console.log(this);
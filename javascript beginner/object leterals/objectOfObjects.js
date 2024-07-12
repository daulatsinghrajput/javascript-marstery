const classInfo = {
    daulat: {
        grade: "A+",
        city: "jaipur",
        age: 21
    },
    harsh: {
        grade:"A",
        city: "lalsot",
        age: 20
    },
    manu: {
        grade:"A",
        city: "Dausa",
        age: 22
    }
}
console.log(classInfo);
console.log(classInfo.daulat);
console.log(classInfo.manu);
console.log(classInfo.manu.city);
console.log(classInfo.daulat.grade);

classInfo.daulat.grade = "A++";
console.log(classInfo);
console.log(classInfo.harsh.grade);
console.log(classInfo.harsh.city);

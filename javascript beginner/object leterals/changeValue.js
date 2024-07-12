const student = {
    name: "daulat singh",
    id: 123,
    city: "jaipur",
    dob: "12/09/2003",
}
console.log(student);
console.log(student.name);
console.log(student["city"]);

// add value 
student.skill = "web dev";
console.log(student);

// change value
student.city = "lalsot";
console.log(student);

// delete value 
delete student.skill;
console.log(student);
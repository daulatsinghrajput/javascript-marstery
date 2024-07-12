const studentInfo = {
    name: "daulat",
    id: 123,
    city: "jaipur",

    // normal function 
    Info: function(){
        console.log(this);
        console.log(this.name);
    },
    // arrow function 
    Info1: () => {
        console.log(this);
        console.log(this.name);
    }

    

}

studentInfo.Info();
studentInfo.Info1();


class product {
    // properties -> variables -> data members
    name;
    price;
    rating;
    // behaviour -> function -> member function 
    display(){
        console.log("display");
    }
}

const p1 = new product();
console.log(p1);
p1.display();

//reguler functions
function testing(){
    console.log("texting");
}

function getTotal(a,b){
    return a+b;
}
function getFullName(a,b,c){
    return "Mr."+a+" "+b+" "+c;
}

//arrow functions
let getMade = (a,b) =>{
    return a + b;
}


//object
let Person = {
    fn : "Sirimal",
    mn : "Shantha",
    ln : "Wikramasingha"
}


console.log("opening work");

let total = getTotal(10,20); //can get return and import parameters
console.log(total);

//call function
testing();
console.log(getFullName(Person.fn,Person.mn,Person.ln));//can pass any parameters

//call arrow function
let tt = getMade(10,50);
console.log(tt);
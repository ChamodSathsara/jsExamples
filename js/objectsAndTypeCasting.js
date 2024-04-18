// create object intro
let Student = {
    firstName : "kamal",
    lastName : "nimal",
    age : 20,
    srilankans :true 
};
console.log(typeof Student);

//brack
console.log(" ");

//call object value //two types
console.log(Student.lastName);
console.log(Student['age']);

//with for in loop
for(let key in Student){
    console.log(key + " = "+Student[key]);
}

//brack
console.log(" ");

//Type casting

//String to number
let name1 = "20";
let nameNum = Number(name1);
console.log(nameNum);

//number to string
let number = 3520;
console.log(String(number));

//boolean to number
let isSave = true;
console.log(Number(isSave));
isSave = false;
console.log(Number(isSave));

//number to boolean
let isDelete = 0;
console.log(Boolean(isDelete));

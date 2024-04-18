let Student = {};

console.log(typeof Student)

if(typeof Student .object){
    alert("that is object");
}else{
    alert("that is not a object");
}

Student = {
    firstName : "kamal",
    lastName : "perera",
    age : 45,
    srilankan : true,
}

if(Student.lastName == "kamal"){
    console.log("he is "+Student.lastName);
}else if(Student.lastName == "perera"){
    console.log("he is "+Student.lastName);
}else{
    console.log("he is "+Student.lastName);
}
let num = 10;

switch(num){
    case 1 :
        console.log("number is 1");
        break;
    case 10 :
        console.log("number is 10");
        break;
    default :
        console.log("number is default");

}


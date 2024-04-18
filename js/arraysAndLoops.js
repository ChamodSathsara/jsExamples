
//array intro 
let fruits = [];
console.log(typeof fruits);

//asign values
fruits = ["banana","mango","apple"];
console.log(fruits);

//array length
let length = fruits.length;
console.log(" length of fruits array : "+length);

//add data / push data
let addItem = fruits.push("orange","avercado"); // return to new array length
console.log(fruits);


//delete data / pop data //delete for last array value
let deleteItem = fruits.pop();  //return to deleted value ex- avercado
console.log(fruits);
console.log(deleteItem);


//brack
console.log(" ");console.log("......... for each loop");

//array with loop (for each loop)
fruits.forEach(fruit => { 
    console.log(fruit);
    })

//brack
console.log(" ");console.log("......... for loop");


//array with loop (for loop)
for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}
//brack
console.log(" ");console.log(".........while loop");

//array with loop (while loop)
let i =  0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//brack
console.log(" ");console.log(".........do while loop");

//array with loop (do while loop)
 i = 0;
do{
    console.log(fruits[i]);
    i++;
}while(i<fruits.length);

//brack
console.log(" ");console.log(".........for of loop");

//array with loop (for of loop)
for(const fruit of fruits){
    console.log(fruit);
}

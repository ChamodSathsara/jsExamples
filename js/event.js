function setPara(){
    document.getElementById("para").innerHTML = "ok clicked";
}

function getTotal(a,b){
    document.getElementById("num3").value = a*b;
}

//let c = document.getElementById("num3").value;



//console.log(getTotal(10,2));


//using event listner
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    getTotal(a,b)
    // document.getElementById("num3").value = a*b;
} );







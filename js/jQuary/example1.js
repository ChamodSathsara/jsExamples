//all selector
$("*").click(function(){
    //$(this).hide();
    //$("ul li:first").hide();
});


// $("h1").mouseenter(function () { 
//     alert("enterd h1");
// });

$("#p1").mouseleave(function () { 
    alert("leaved P");
});

$("li").focus(function () { 
    $(this).css("color" ,"#ffffff")
    
});



$("#btn1").click(function(){
    $("#lbl").hide(1000);
})

$("#btn2").click(function(){
    $("#lbl").show(1000);
})

$("#btn3").click(function () { 
    $("#div1").toggle(1000);
    
});

$("#btn4").click(function(){
    $("#change").html("my name is sathsara weerarathne");
});

let isShow = true;



//logic 01

$("#btn5").click(function(){
    if(isShow==true){
        $("#ex").hide(1000);
        isShow=false;
    }else{
        $("#ex").show(1000);
        isShow=true;
    }
})
// console.log(isShow);


//slide up / down and trogger
$(".div2").click(function(){
    // $(".content").slideDown(1000);
    // $(".content").css("display","block")
    $(".content").slideToggle(1000);

})



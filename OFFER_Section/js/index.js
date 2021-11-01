var termBtn1 = document.getElementById("termBtn1").addEventListener("click",function(){
    // console.log("click");

    var para = document.querySelector(".termPara");
    if(para.style.display === "none"){
        para.style.display = "block";
    }else{
        para.style.display = "none";
    }
})


var termBtn2 = document.getElementById("termBtn2").addEventListener("click",function(){
    // console.log("click");

    var para = document.querySelector(".termPara2");
    if(para.style.display === "none"){
        para.style.display = "block";
    }else{
        para.style.display = "none";
    }
})
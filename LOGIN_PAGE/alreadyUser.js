// Javascript code for alreadyUser.html

    // input number from DOM 
    var number = JSON.parse(localStorage.getItem("mobileNumber"))||[];
    document.querySelector(".inputNumber").value = number;
    
    // checkPassword to localstorage
    var referalDiv = document.querySelector(".invalidDiv")
    document.querySelector("button").addEventListener("click",function(){
        checkUserPassword();
    })
    var value = true;
    function checkUserPassword(){
        var password = document.querySelector(".inputPassword").value;
        //console.log(document.querySelector(".inputPassword").value)
            if (password == JSON.parse(localStorage.getItem("userPassword"))){
                window.location.href = "http://127.0.0.1:5500/HOMEPAGE_CAROUSEL/first_page.html"
            } else if (value == true){
                var invalidMsg = document.createElement("p");
                invalidMsg.setAttribute("class","invalidPassword");
                invalidMsg.textContent="Invalid password."
                //appending
                referalDiv.append(invalidMsg);
                value = false;
            }
   }

       // input number from DOM 
       var number = JSON.parse(localStorage.getItem("mobileNumber"))||[];
       document.querySelector(".inputNumber").value = number;
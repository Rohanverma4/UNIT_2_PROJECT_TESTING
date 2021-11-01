// Javsascript code for Signup

   // Including number at input
   var number = JSON.parse(localStorage.getItem("mobileNumber"));
   document.querySelector(".putNumber").value = number;

//Checking Otp number
   document.querySelector(".btn").addEventListener("click",function(){
       checkOTP();
   })

   // checkOTP function
   function checkOTP(){
       var otp = document.querySelector(".otp").value;
       if (otp == "1234" && document.querySelector(".putNumber").value == number){
           window.location.href = "setPassword.html";
       }  else {
           var checkingOTP = document.querySelector(".notify");
           var invalidOTP = document.createElement("p");
           invalidOTP.setAttribute("class","checkMassage");
           invalidOTP.textContent="Invalid code. Try again with the correct code."
           //appending
           checkingOTP.append(invalidOTP);
       }
   }
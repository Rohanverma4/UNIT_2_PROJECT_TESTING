
// Javascript code for login page..
         // Handling referal code..
         document.querySelector("#refer").addEventListener("click",function(){
            handleReferal();
        })
        var referalDiv = document.querySelector(".referralDiv");
        var count = 0;
        // function for handling referal code..
        function handleReferal(){
            if (count % 2 == 0){
                var inputReferal = document.createElement("input");
                inputReferal.setAttribute("type",Text);
                inputReferal.setAttribute("id","referral");
                inputReferal.setAttribute("placeholder","referral code");
                // append input into referalDiv
                referalDiv.append(inputReferal);
            } else{
                document.querySelector(".referralDiv input").remove();
                }    
             count++;
        }
        
        // function for input number
        document.querySelector("#button1").addEventListener("click",function(){
            handleNumberInput();
        })
        
        var required = true;
        var invalid = true;
        function handleNumberInput(){
            var checkingMassage = document.querySelector(".requiredNumber");
            var invalidMassage = document.querySelector(".invalidNumber");
            var number = document.querySelector("#number").value;
            //localStorage.setItem("mobileNumber",JSON.stringify(number));
            if (number.length == 0 && required == true){
                var requiredNum = document.createElement("p");
                requiredNum.setAttribute("class","reqNumber");
                requiredNum.textContent="Mobile number is required."
                //appending
                checkingMassage.append(requiredNum);
                required = false;
            } else if(number.length != 10 && number.length > 0 && invalid == true){
                var invalidNum = document.createElement("p");
                invalidNum.setAttribute("class","invalidNumber");
                invalidNum.textContent="Invalid number."
                //appending
                invalidMassage.append(invalidNum);
                invalid = false;
            } else if (number.length == 10){
                    if (number == JSON.parse(localStorage.getItem("mobileNumber"))){
                        window.location.href = "alreadyUser.html";
                    } else{
                    localStorage.setItem("mobileNumber",JSON.stringify(number));
                    window.location.href="signup.html"
                    }
            } else{}
        }
        
        
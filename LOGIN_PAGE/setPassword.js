
 // Javascript code for setPassword.html

// input number from DOM
var number1 = JSON.parse(localStorage.getItem("mobileNumber")) || [];
document.querySelector("#inputNumber").value = number1;

// taking password
document.querySelector("button").addEventListener("click", function () {
	handlePassword();
});

//function for taking password
var digitCount = true;
var passNotMatched = true;
//    var errorDiv = document.querySelector(".errorMassageDiv")

function handlePassword() {
	var password = document.getElementById("inputPassword").value;
	var confirmPass = document.getElementById("confirmPassword").value;
	if (digitCount != true || passNotMatched != true) {
		document.querySelector(".div1").remove();
	}
	var errorDiv = document.querySelector(".div1");
	errorDiv.innerHTML = "";
	// var errorDiv = document.querySelector(".errorMassageDiv")
	var errorMassage = document.createElement("p");
	errorMassage.setAttribute("class", "errorMassage") || [];
	//   errorMassage.textContent = "";
	if (password == confirmPass && password.length >= 6) {
		localStorage.setItem("userPassword", JSON.stringify(password));
		window.location.href = "/HOMEPAGE_CAROUSEL/first_page.html";
	} else if (password.length < 6 || (confirmPass < 6 && digitCount == true)) {
		errorDiv.setAttribute("class", "errorMassageDiv");
		document.querySelector(".errorMassageDiv").textContent =
			"Password must be at least 6 characters.";
		setTimeout(() => {
			window.location.reload();
		}, 2000);

		digitCount = false;
	} else if (password != confirmPass) {
		errorDiv.setAttribute("class", "errorMassageDiv");
		document.querySelector(".errorMassageDiv").textContent =
			"Password and confirm password is different";
		passNotMatched = false;
		//Set Time Out Function
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	}
	errorDiv.append(errorMassage);
}


//C:\Users\User\Downloads\UNIT_2_PROJECT_TESTING-ADMIN_PAGE_TESTING\HOMEPAGE_CAROUSEL\first_page.html
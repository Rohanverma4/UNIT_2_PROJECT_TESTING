// Javsascript for myProfile page

// input number from DOM
var number = JSON.parse(localStorage.getItem("mobileNumber"));
document.querySelector(".inputDom").value = number;

// input name from DOM
var yourname = JSON.parse(localStorage.getItem("userName")) || [];
document.querySelector("#inputName").value = yourname;

// input email from DOM
var youremail = JSON.parse(localStorage.getItem("userEmail")) || [];
document.querySelector("#inputEmail").value = youremail;

// input name and email to DOM..
document.querySelector("#btn").addEventListener("click", function () {
	inputNameEmail();
});
// function for input
var refresh = true;
function inputNameEmail() {
	var username = document.querySelector("#inputName").value;
	var email = document.querySelector("#inputEmail").value;
	// set into localStorage

	localStorage.setItem("userName", JSON.stringify(username));
	localStorage.setItem("userEmail", JSON.stringify(email));
	if (refresh == true) {
		var successDiv = document.createElement("div");
		successDiv.setAttribute("class", "massageDiv");

		var successMassage = document.createElement("p");
		successMassage.setAttribute("class", "massage");
		successMassage.textContent = "User details updated successfully";

		successDiv.append(successMassage);
		var body = document.querySelector("body");
		body.append(successDiv);

		setTimeout(() => {
			window.location.href = "/HOMEPAGE_CAROUSEL/first_page.html";
		}, 2000);
		refresh = false;
	}
}
//User details updated successfully

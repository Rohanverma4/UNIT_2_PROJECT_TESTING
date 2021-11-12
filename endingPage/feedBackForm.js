//LOCALSTORAGES
var feedBackArray = JSON.parse(localStorage.getItem("feedBacks")) || [];

//EVENT LISTENER
document.querySelector("form").addEventListener("submit", addFeedBack);
function addFeedBack(event) {
	event.preventDefault();

	//DEFINING VARIABLES
	var fdName = document.querySelector("#name").value;
	var fdEmail = document.querySelector("#email").value;
	var firstTimeUser =
		document.querySelector("#firstYes").checked === true ? true : false;
	var findWhatNeeded =
		document.querySelector("#needYes").checked === true ? true : false;

	var primaryReason = document.querySelector("#primaryReasonTA").value;
	var productsNotFound = document.querySelector("#notFoundTA").value;

	var easiness = document.querySelectorAll(`input[name="easinessRadio"]`);
	var easiValue;
	for (let i = 0; i < easiness.length; i++) {
		if (easiness[i].checked) {
			easiValue = easiness[i].id;
		}
	}

	var returnToSite = document.querySelectorAll(`input[name="visitAgain"]`);
	var returnValue;
	for (let i = 0; i < returnToSite.length; i++) {
		if (returnToSite[i].checked) {
			returnValue = returnToSite[i].id;
		}
	}
	var adnFeedBackeasiValue = document.querySelector("#addFeedback").value;
	var feedBackObj = {
		name: fdName,
		email: fdEmail,
		firstTime: firstTimeUser,
		foundWhatNeeded: findWhatNeeded,
		reason: primaryReason,
		productsNotFound,
		easiValue,
		returnValue,
		adnFeedBackeasiValue,
	};
	feedBackArray.push(feedBackObj);
	localStorage.setItem("feedBacks", JSON.stringify(feedBackArray));
	alert("Thank You For Your Valuable Feedback");
	window.location.href = "/HOMEPAGE_CAROUSEL/first_page.html";
}

//LOCAL STORAGES
var adresses = JSON.parse(localStorage.getItem("adressArray")) || [];
var initialPrice = localStorage.getItem("totalItemsPrice") || 0;
var isChecked = JSON.parse(localStorage.getItem("cuponApplied"));

//Blocking User To Apply More Cupons if isChecked is true
if (isChecked) {
	document.getElementById("applyCupon").disabled = true;
	document.getElementById("applyCupon").textContent = "Cupon Applied";
	document.getElementById(
		"applyCupon"
	).style.backgroundColor = `rgb(255, 211, 150)`;
} else {
	document.getElementById("applyCupon").disabled = false;
}

document.querySelector("#addNewAdress").addEventListener("submit", addAdress);
document
	.querySelector("#applyCuponModal")
	.addEventListener("click", applyCupon);

// GO TO PAYMENTS PAGE
document.querySelector("#proceed").addEventListener("click", () => {
	//
	var adressSelectorCheck = document.querySelectorAll(
		'input[name="allAdressesRadio"'
	);
	var adressSelected = false;
	for (let i = 0; i < adressSelectorCheck.length; i++) {
		if (adressSelectorCheck[i].checked) adressSelected = true;
	}
	if (!adressSelected) {
		alert("Please Select an adress to proceed");
		return;
	}
	window.location.href = "/ORDER_SECTION/paymentPage.html";
});

var mainAdressDiv = document.getElementById("deliveryAdresses");

//Appending Addresses to mainAdressDiv
function addAdress(event) {
	event.preventDefault();
	let homeAdressCheck = document.getElementById("homeAdress").checked;
	let workAdressCheck = document.getElementById("workAdress").checked;

	let adressType = homeAdressCheck
		? "Home"
		: workAdressCheck
		? "Work"
		: "Other";

	let myAdressObj = {
		name: document.getElementById("name").value,
		adress: document.getElementById("fullAddress").value,
		pincode: document.getElementById("pincode").value,
		city: document.getElementById("city").value,
		state: document.getElementById("state").value,
		contact: document.getElementById("deliveryContactNumber").value,
		adressType,
	};
	adresses.push(myAdressObj);
	localStorage.setItem("adressArray", JSON.stringify(adresses));
	appendToAdressDiv(adresses);
	setTimeout(() => {
		window.location.reload();
	}, 10);
}

function appendToAdressDiv(adresses) {
	//CREATING ELEMENTS
	mainAdressDiv.innerHTML = "";
	adresses.map((obj, index) => {
		var ulAdressTag = document.createElement("ul");
		var nameTag = document.createElement("li");
		var adressTag = document.createElement("li");
		var cityTag = document.createElement("li");
		var stateTag = document.createElement("li");
		var contactTag = document.createElement("li");
		var adressType = document.createElement("p");
		var mainDiv = document.createElement("div");
		var deleteButton = document.createElement("button");
		var radioButton = document.createElement("input");
		var radioAndAdressType = document.createElement("div");
		//ADDING EVENT LISTENERS
		deleteButton.addEventListener("click", (event) => {
			deleteAdress(event, index);
		});

		//SETTING ATTRIBUTES AND TEXT CONTENTS
		//radio button attributes
		radioButton.setAttribute("name", "allAdressesRadio");
		radioButton.setAttribute("type", "radio");
		//radiobutton event listener
		radioButton.addEventListener("click", (event) => {
			selectThisAdress(event, obj);
		});

		radioAndAdressType.append(radioButton, adressType);
		radioAndAdressType.setAttribute("class", "radioAndAdress");
		deleteButton.innerHTML = `<i class="material-icons">delete</i>`;
		mainDiv.setAttribute("class", "insideAdressDiv");
		nameTag.textContent = obj.name;
		adressTag.textContent = obj.adress;
		cityTag.textContent = obj.city;
		contactTag.textContent = obj.contact;
		stateTag.textContent = `${obj.state} - ${obj.pincode}`;
		adressType.textContent = obj.adressType;
		ulAdressTag.append(nameTag, adressTag, cityTag, stateTag, contactTag);

		mainDiv.append(radioAndAdressType, ulAdressTag, deleteButton);

		mainAdressDiv.append(mainDiv);
	});

	//AddMoreButton
	var addMoreButton = document.createElement("button");
	addMoreButton.textContent = "Add More";
	addMoreButton.setAttribute("id", "addMoreAdressButton");
	addMoreButton.addEventListener("click", addMoreAdresses);
	mainAdressDiv.append(addMoreButton);
}

//Function Add More Adresses
function addMoreAdresses() {
	setTimeout(() => {
		document.getElementById("addNewAdress").style.display = "block";
	}, 10);

	mainAdressDiv.style.display = "none";
}

function deleteAdress(event, index) {
	adresses.splice(index, 1);
	localStorage.setItem("adressArray", JSON.stringify(adresses));
	window.location.reload();
}

//Inserting Prices
function addPrices() {
	var deliveryCharges;
	if (isChecked) {
		deliveryCharges = 0;
	} else {
		deliveryCharges = +initialPrice >= 500 || +initialPrice === 0 ? 0 : 15;
	}
	var totalPrice = +initialPrice + deliveryCharges;
	document.querySelector("#itemsPrice > span").textContent = initialPrice;
	document.querySelector("#deliveryFees > span").textContent = deliveryCharges;
	document.querySelector("#totalItemsPrice > span").textContent = totalPrice;
}
function addSpecialPrices() {
	var deliveryCharges = 0;
	var totalPrice = +initialPrice + deliveryCharges;
	document.querySelector("#itemsPrice > span").textContent = initialPrice;
	document.querySelector("#deliveryFees > span").textContent = deliveryCharges;
	document.querySelector("#totalItemsPrice > span").textContent = totalPrice;
}
function selectThisAdress(event, obj) {
	console.log(event.target.checked);
	localStorage.setItem("checkedAdress", JSON.stringify(obj));
}
function applyCupon() {
	var inputCupon = document.querySelector("#inputCupon").value;
	if (inputCupon) {
		initialPrice = Math.floor(
			Number(initialPrice) - 0.05 * Number(initialPrice)
		);
		localStorage.setItem("totalItemsPrice", initialPrice);
	} else {
		var masai30Code = document.getElementById("masai30").checked;
		var masai50Code = document.getElementById("masai50").checked;
		var discountToBeGiven = masai30Code ? 0.3 : masai50Code ? 0.5 : 0.1;
		initialPrice = Math.floor(
			Number(initialPrice) - discountToBeGiven * Number(initialPrice)
		);
	}
	isChecked = true;
	localStorage.setItem("totalItemsPrice", initialPrice);
	localStorage.setItem("cuponApplied", JSON.stringify(isChecked));
	addSpecialPrices();
	window.location.reload();
}
addPrices();
appendToAdressDiv(adresses);

// METHOD TO CHECK IF THERES ADRESS ALREADY PRESENT
if (!(mainAdressDiv.childElementCount === 1)) {
	document.getElementById("addNewAdress").style.display = "none";
} else if (mainAdressDiv.childElementCount === 1) {
	mainAdressDiv.style.display = "none";
}
// console.log(mainAdressDiv.childElementCount);

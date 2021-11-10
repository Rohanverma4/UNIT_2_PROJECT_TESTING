//LOCAL STORAGES
var adresses = JSON.parse(localStorage.getItem("adressArray")) || [];
var initialPrice = localStorage.getItem("totalItemsPrice") || 0;

document.querySelector("#addNewAdress").addEventListener("submit", addAdress);

// GO TO PAYMENTS PAGE
document.querySelector("#proceed").addEventListener("click", () => {
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

		deleteButton.innerHTML = `<i class="material-icons">delete</i>`;
		mainDiv.setAttribute("class", "insideAdressDiv");
		nameTag.textContent = obj.name;
		adressTag.textContent = obj.adress;
		cityTag.textContent = obj.city;
		contactTag.textContent = obj.contact;
		stateTag.textContent = `${obj.state} - ${obj.pincode}`;
		adressType.textContent = obj.adressType;
		ulAdressTag.append(nameTag, adressTag, cityTag, stateTag, contactTag);

		mainDiv.append(radioButton, adressType, ulAdressTag, deleteButton);

		mainAdressDiv.append(mainDiv);
	});
}
function deleteAdress(event, index) {
	adresses.splice(index, 1);
	localStorage.setItem("adressArray", JSON.stringify(adresses));
	event.target.parentNode.parentNode.remove();
}

//Inserting Prices
function addPrices() {
	var deliveryCharges = +initialPrice >= 500 || +initialPrice === 0 ? 0 : 15;
	var totalPrice = Number(initialPrice) + Number(deliveryCharges);
	document.querySelector("#itemsPrice > span").textContent = initialPrice;
	document.querySelector("#deliveryFees > span").textContent = deliveryCharges;
	document.querySelector("#totalItemsPrice > span").textContent = totalPrice;
}

function selectThisAdress(event, obj) {
	console.log(event.target.checked);
	localStorage.setItem("checkedAdress", JSON.stringify(obj));
}

//GO TO PAYMENT SECTION - FUNCTION
// function goToPaymentSection() {}

addPrices();
appendToAdressDiv(adresses);

//DISPLAY FORM/ADRESSES
function displayAdressesOrForm() {
	if (mainAdressDiv.innerHTML) {
		document.getElementById("addNewAdress").style.display = "none";
	}
	document.getElementById("addAnotherAdress").onclick = () => {
		document.getElementById("addNewAdress").style.display = "block";
	};
}

displayAdressesOrForm();

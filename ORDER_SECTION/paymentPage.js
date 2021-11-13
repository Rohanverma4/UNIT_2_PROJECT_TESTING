//Local Storages
var providedAdress = JSON.parse(localStorage.getItem("checkedAdress"));
var initialPrice = Number(localStorage.getItem("totalItemsPrice"));
var cuponValidator = JSON.parse(localStorage.getItem("cuponApplied"));
var addedProductsInDom = JSON.parse(localStorage.getItem("addedProducts"));
var pastOrders = JSON.parse(localStorage.getItem("pastOrdersDetails")) || [];
var userMobile = Number(JSON.parse(localStorage.getItem("mobileNumber")));

//EVENT LISTENERS FOR PLACING ORDER AND PAYING
document.querySelector("#placeOrder").addEventListener("click", placeAndPay);

//function to Load Adress to adress div
function displayAdress(obj) {
	var adressDiv = document.getElementById("adressDiv");
	//CREATING ELEMENTS
	var ulAdressTag = document.createElement("ul");
	var nameTag = document.createElement("li");
	var adressTag = document.createElement("li");
	var cityTag = document.createElement("li");
	var stateTag = document.createElement("li");
	var contactTag = document.createElement("li");
	var mainDiv = document.createElement("div");
	var adressHeading = document.createElement("h3");
	// SETTING ATTRIBUTES AND TEXT CONTENTS

	mainDiv.setAttribute("id", "givenAdress");
	ulAdressTag.setAttribute("id", "adressUl");
	adressHeading.textContent = `Address:`;
	adressHeading.setAttribute("id", "adressHeading");
	adressTag.textContent = obj.adress;
	cityTag.textContent = obj.city;
	contactTag.textContent = obj.contact;
	stateTag.textContent = `${obj.state} - ${obj.pincode}`;
	nameTag.textContent = obj.name;

	//APPENDING TO DIVS
	ulAdressTag.append(nameTag, adressTag, cityTag, stateTag, contactTag);
	mainDiv.append(adressHeading, ulAdressTag);

	adressDiv.append(mainDiv);
}

//Function to Show Prices;
function displayPrices() {
	var deliveryFees;
	if (cuponValidator) {
		deliveryFees = 0;
	} else {
		deliveryFees = +initialPrice >= 500 || +initialPrice === 0 ? 0 : 15;
	}
	var totalPrice = Number(initialPrice) + Number(deliveryFees);
	document.querySelector("#itemsPrice > span").textContent = initialPrice;
	document.querySelector("#deliveryFees > span").textContent = deliveryFees;
	document.querySelector("#totalItemsPrice > span").textContent = totalPrice;
}

//Count of users
let numUserCount = Number(JSON.parse(localStorage.getItem("userCount"))) || 0;
function placeAndPay() {
	var paymentModeRadios = document.querySelectorAll(
		`input[name="paymentRadios"]`
	);
	var isModeSelected = false;
	for (let i = 0; i < paymentModeRadios.length; i++) {
		if (paymentModeRadios[i].checked) {
			isModeSelected = true;
		}
	}
	if (!isModeSelected) {
		alert("Please Check Any One of Payment Methods");
		return;
	}
	//Defining date

	var date = new Date();
	var orderSaverObj = {
		userNumber: userMobile,
		products: addedProductsInDom,
		productsPrice: initialPrice,
		totalProductsPrice:
			initialPrice +
			Number(document.querySelector("#totalItemsPrice > span").textContent),
		adress: providedAdress,
		userName: null,
		date: date.toDateString(),
	};
	pastOrders.push(orderSaverObj);
	numUserCount++;
	localStorage.setItem("userCount", numUserCount);
	localStorage.setItem("pastOrdersDetails", JSON.stringify(pastOrders));
	localStorage.removeItem("addedProducts");
	localStorage.removeItem("counter");
	localStorage.removeItem("cuponApplied");
	localStorage.removeItem("totalItemsPrice");

	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
	window.location.href = "/endingPage/congr.html";
	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
	// FIELD TO BE CHANGED!
}

displayAdress(providedAdress);
displayPrices();

//TEXT CONTENT AND DISABLE FUNCTIONALITY OF COD
if (
	Number(document.querySelector("#totalItemsPrice > span").textContent >= 500)
) {
	document.getElementById(
		"codPTag"
	).textContent = `Eligible for Cash On Delivery`;
	document.getElementById("cod").disabled = false;
} else {
	document.getElementById(
		"codPTag"
	).textContent = `Eligible for Cash On Delivery only on Total Price More Than 500`;
	document.getElementById("cod").disabled = true;
}

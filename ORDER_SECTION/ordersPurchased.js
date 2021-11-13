//LOCAL STORAGES

let products = JSON.parse(localStorage.getItem("addedProducts")) || [];
var productDiv = document.getElementById("productDiv");
var initialPrice = Number(localStorage.getItem("totalItemsPrice")) || 0;

if (localStorage.getItem("totalItemsPrice") == 0) {
	localStorage.removeItem("totalItemsPrice");
}
var isChecked = JSON.parse(localStorage.getItem("cuponApplied"));

//Blocking User To Apply More Cupons if isChecked is true
if (isChecked) {
	document.getElementById("applyCupon").disabled = true;
	document.getElementById("applyCupon").textContent = "Coupon Applied";
	document.getElementById(
		"applyCupon"
	).style.backgroundColor = `rgb(255, 211, 150)`;
} else {
	document.getElementById("applyCupon").disabled = false;
}

document
	.querySelector("#applyCuponModal")
	.addEventListener("click", applyCupon);

// KEEPING IT GLOBALLY
let totalElemsCounter = {};
for (let elem of products) {
	totalElemsCounter[elem.name] = totalElemsCounter[elem.name]
		? totalElemsCounter[elem.name] + 1
		: 1;
}

//FILTERING OUT UNIQUE VALUES
products = Array.from(new Set(products.map((a) => a.name))).map((name) => {
	return products.find((a) => a.name === name);
});

function appendProducts(products) {
	//Products Mapping
	products.map((item) => {
		var mainDiv = document.createElement("div");
		var textDiv = document.createElement("div");
		var h4Tag = document.createElement("h4");
		var priceTag = document.createElement("p");
		var imgTag = document.createElement("img");
		var counterDiv = document.createElement("p");
		var deleteIcon = document.createElement("i");
		var selectTag = document.createElement("select");

		//VALUES INSIDE SELECT TAG
		selectTag.innerHTML += `<option>Add More</option>`;
		for (let i = 0; i < 100; i++) {
			selectTag.innerHTML += `<option value="${i}">${i}</option>`;
		}
		//Select Tag event listener
		selectTag.addEventListener("change", (event) => {
			selectTagFunction(item, event);
		});

		// Delete Icon EVENT LISTENER;
		deleteIcon.addEventListener("click", (event) => {
			deleteProduct(item, event);
		});

		//set attributes
		selectTag.setAttribute("class", "selectTag");
		deleteIcon.setAttribute("class", "material-icons");
		deleteIcon.innerText += "delete";
		counterDiv.textContent = `Total items: ${totalElemsCounter[item.name]}`;
		counterDiv.setAttribute("id", "numOfItems");
		imgTag.setAttribute("src", item.img_src);
		imgTag.setAttribute("class", "galleryCellImg");
		h4Tag.textContent = item.name;
		priceTag.textContent = `Price: ${item.price}`;
		textDiv.setAttribute("class", "galleryTextDiv");

		mainDiv.setAttribute("class", "insideProductDiv");
		textDiv.append(h4Tag, priceTag);
		mainDiv.append(imgTag, textDiv, counterDiv, selectTag, deleteIcon);
		productDiv.append(mainDiv);

		// console.log(flkty);
	});
}

//SELECT TAG EVENT FUNCTION
function selectTagFunction(item, event) {
	let selectTagValue = event.target.value;
	if (selectTagValue === "Add More") return;
	if (selectTagValue == 0) {
		let newProducts = products.filter((c) => c.name !== item.name);
		localStorage.setItem("addedProducts", JSON.stringify(newProducts));
		window.location.reload();
	} else {
		event.target.parentNode.childNodes[2].textContent = `Total items: ${selectTagValue}`;
		totalElemsCounter[item.name] = +selectTagValue;
		initialPrice = 0;
		for (let i = 0; i < products.length; i++) {
			initialPrice += products[i].price * totalElemsCounter[products[i].name];
		}
		document.querySelector("#itemsPrice > span").textContent =
			initialPrice.toFixed(2);
		document.querySelector("#deliveryFees > span").textContent =
			initialPrice >= 500 ? 0 : 15;
		document.querySelector("#totalItemsPrice > span").textContent =
			initialPrice +
			Number(document.querySelector("#deliveryFees > span").textContent);
	}
	localStorage.setItem("totalItemsPrice", initialPrice);
	event.target.removeEventListener("change", deleteProduct);
}

//DELETE ICON EVENT FUNCTION
function deleteProduct(item, event) {
	// event.target.parentNode.remove();
	let newProducts = products.filter((c) => c.name !== item.name);
	console.log(`logger`);
	console.log(products);
	console.log(newProducts);

	initialPrice -= item.price * totalElemsCounter[item.name];
	localStorage.setItem("totalItemsPrice", initialPrice);
	localStorage.setItem("addedProducts", JSON.stringify(newProducts));

	window.location.reload();
}
document.getElementById("proceed").addEventListener("click", () => {
	window.location.href = "/ORDER_SECTION/checkoutPage.html";
});

function addPrices() {
	if (!initialPrice) {
		for (let i = 0; i < products.length; i++) {
			initialPrice += products[i].price * totalElemsCounter[products[i].name];
			var deliveryCharges;
			if (isChecked) {
				deliveryCharges = 0;
			} else {
				deliveryCharges = +initialPrice >= 500 || +initialPrice === 0 ? 0 : 15;
			}

			var totalPrice = Number(initialPrice) + deliveryCharges;
			document.querySelector("#itemsPrice > span").textContent =
				parseInt(initialPrice);
			document.querySelector("#deliveryFees > span").textContent =
				parseInt(deliveryCharges);
			document.querySelector("#totalItemsPrice > span").textContent =
				parseInt(totalPrice);

			localStorage.setItem("totalItemsPrice", initialPrice);
		}
	} else {
		var deliveryCharges;
		if (isChecked) {
			deliveryCharges = 0;
		} else {
			deliveryCharges = +initialPrice >= 500 || +initialPrice === 0 ? 0 : 15;
		}

		var totalPrice = Number(initialPrice) + deliveryCharges;
		document.querySelector("#itemsPrice > span").textContent = initialPrice;
		document.querySelector("#deliveryFees > span").textContent =
			deliveryCharges;
		document.querySelector("#totalItemsPrice > span").textContent = totalPrice;

		localStorage.setItem("totalItemsPrice", initialPrice);
	}
}

function addSpecialPrices() {
	var deliveryCharges = 0;
	var totalPrice = +initialPrice + deliveryCharges;
	document.querySelector("#itemsPrice > span").textContent = initialPrice;
	document.querySelector("#deliveryFees > span").textContent = deliveryCharges;
	document.querySelector("#totalItemsPrice > span").textContent = totalPrice;
}

function applyCupon() {
	var inputCupon = document.querySelector("#inputCupon").value;
	if (inputCupon) {
		initialPrice = Math.floor(
			Number(initialPrice) - 0.05 * Number(initialPrice)
		);
	} else {
		var masai30Code = document.getElementById("masai30").checked;
		var masai50Code = document.getElementById("masai50").checked;
		var discountToBeGiven = masai30Code ? 0.3 : masai50Code ? 0.5 : 0.1;
		initialPrice = Math.floor(
			Number(initialPrice) - discountToBeGiven * Number(initialPrice)
		);
	}
	localStorage.setItem("totalItemsPrice", initialPrice);
	isChecked = true;
	document.getElementById("applyCupon").disabled = true;
	document.getElementById("applyCupon").textContent = "Cupon Applied";
	document.getElementById(
		"applyCupon"
	).style.backgroundColor = `rgb(255, 211, 150)`;
	localStorage.setItem("cuponApplied", JSON.stringify(isChecked));
	localStorage.setItem("totalItemsPrice", initialPrice);
	document.getElementById("myOrdersModal").style.display = "none";
	addPrices();
	// window.location.reload();
}

appendProducts(products);
addPrices();

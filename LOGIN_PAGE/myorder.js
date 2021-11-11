//LOCAL STORAGES
var userMobile = Number(JSON.parse(localStorage.getItem("mobileNumber")));
var pastOrders = JSON.parse(localStorage.getItem("pastOrdersDetails")) || [];

let filteredUsers = pastOrders.filter((obj) => obj.userNumber == userMobile);

//HTML TEMPLATES UNDER CONDITION
if (filteredUsers.length < 1) {
	document.getElementById("box").style.display = "block";
} else if (!(filteredUsers.length < 1)) {
	document.getElementById("box").innerHTML = "";
	document.getElementById("box").classList.add("adressesPresent");
	pastOrdersAdressDisplay(filteredUsers);
	// pastProductsDisplay(filteredUsers);
	document.querySelector("button").textContent = "Shop More";
}
// going for shopping
document.querySelector("button").addEventListener("click", function () {
	gotoShop();
});

function gotoShop() {
	window.location.href = "/HOMEPAGE_CAROUSEL/first_page.html";
}

//FUNCTION TO DISPLAY PAST ORDERS
function pastOrdersAdressDisplay(filteredUsers) {
	filteredUsers.map((obj) => {
		// CREATING TAGS FOR ADRESSES
		var nameTag = document.createElement("li");
		var ulAdressTag = document.createElement("ul");
		var adressTag = document.createElement("li");
		var cityTag = document.createElement("li");
		var stateTag = document.createElement("li");
		var contactTag = document.createElement("li");
		var adressDetailsDiv = document.createElement("div");

		//SETTING ATTRIBUTES AND TEXT CONTENTS FOR ADRESSES
		nameTag.textContent = obj.adress.name;
		adressTag.textContent = obj.adress.adress;
		cityTag.textContent = obj.adress.city;
		contactTag.textContent = obj.adress.contact;
		stateTag.textContent = `${obj.adress.state} - ${obj.adress.pincode}`;
		ulAdressTag.setAttribute("class", "ulAdressTag");
		adressDetailsDiv.setAttribute("class", "adressDetailsDiv");

		//APPENDING TO DIVS
		ulAdressTag.append(nameTag, adressTag, cityTag, stateTag, contactTag);
		adressDetailsDiv.append(ulAdressTag);
		document.getElementById("box").append(adressDetailsDiv);

		//FILTERING PRODUCTS
		var uniqueProducts = Array.from(
			new Set(obj.products.map((a) => a.name))
		).map((name) => {
			return obj.products.find((a) => a.name === name);
		});
		//MAPPING PRODUCTS
		uniqueProducts.map((product) => {
			// CREATING TAGS FOR PRODUCTS
			var productSectionDiv = document.createElement("div");
			var productTextDiv = document.createElement("div");
			var productName = document.createElement("p");
			var productImg = document.createElement("img");
			var productPrice = document.createElement("p");
			var productDescUl = document.createElement("ul");

			// FOR LOOP FOR APPENDING ALL DESCRIPTION TO PRODUCT DESC
			for (let i = 0; i < product.features.length; i++) {
				var liTag = document.createElement("li");
				var shortName = product.features;
				liTag.textContent = shortName[i];
				productDescUl.append(liTag);
			}

			//SETTING ATTRIBUTES AND TEXT CONTENT FOR PRODUCTS
			productName.textContent = product.name;
			productImg.setAttribute("src", product.img_src);
			productPrice.textContent = `Price: ${product.price}`;
			productSectionDiv.setAttribute("class", "productSectionDiv");
			productTextDiv.setAttribute("class", "productTextDiv");
			//APPENDING
			productTextDiv.append(productName, productDescUl, productPrice);
			productSectionDiv.append(productImg, productTextDiv);

			document.querySelector(".adressDetailsDiv").append(productSectionDiv);
		});
	});
}

// function pastProductsDisplay(obj) {
// 	//CREATING ELEMENTS
// 	obj.map((obj) => {
// 		var mainDiv = document.createElement("div");
// 		var textDiv = document.createElement("div");
// 		var imgTag = document.createElement("img");
// 		var nameTag = document.createElement("p");
// 		var imgDiv = document.createElement("img");
// 		mainDiv.setAttribute("class", "displayProductDiv");
// 		//SETTING ATTRIBUTES AND TEXT CONTENTS
// 		nameTag.setAttribute("class", "nameTag");
// 		nameTag.textContent = obj.products.name;

// 		imgTag.setAttribute("src", obj.products.img_src);

// 		//APPENDING DIVS
// 		textDiv.append(nameTag);
// 		imgDiv.append(imgTag);
// 		mainDiv.append(textDiv, imgDiv);
// 		document.querySelector(".adressesPresent > div").append(mainDiv);
// 	});
// }

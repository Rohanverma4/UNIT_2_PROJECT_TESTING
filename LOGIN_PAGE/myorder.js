//LOCAL STORAGES
var userMobile = Number(JSON.parse(localStorage.getItem("mobileNumber")));
var pastOrders = JSON.parse(localStorage.getItem("pastOrdersDetails")) || [];

let filteredUsers = pastOrders.filter((obj) => obj.userNumber == userMobile);
console.log(filteredUsers[2]);

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
		var ulDivTag = document.createElement("div");
		var adressTag = document.createElement("li");
		var cityTag = document.createElement("li");
		var stateTag = document.createElement("li");
		var contactTag = document.createElement("li");
		var adressDetailsDiv = document.createElement("div");
		let productsSection = document.createElement("div");
		let dateTag = document.createElement("li");
		//CREATING UNIQUE PRODUCTS
		var uniqueProducts = Array.from(
			new Set(obj.products.map((a) => a.name))
		).map((name) => {
			return obj.products.find((a) => a.name === name);
		});
		//LOOPING THROUGH PRODUCTS
		for (let i = 0; i < uniqueProducts.length; i++) {
			var product = uniqueProducts[i];
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
			ulDivTag.append();
			productTextDiv.append(productName, productDescUl, productPrice);
			productSectionDiv.append(productImg, productTextDiv);
			productsSection.append(productSectionDiv);
		}

		//SETTING ATTRIBUTES AND TEXT CONTENTS FOR ADRESSES
		dateTag.textContent = `Date of purchase: ${obj.date || "Not Provided"}`;
		dateTag.setAttribute("class", "dateTag");
		nameTag.textContent = obj.adress.name;
		productsSection.setAttribute("class", "displayProductDiv");
		adressTag.textContent = obj.adress.adress;
		ulDivTag.setAttribute("class", "ulDivTag");
		cityTag.textContent = obj.adress.city;
		contactTag.textContent = obj.adress.contact;
		stateTag.textContent = `${obj.adress.state} - ${obj.adress.pincode}`;
		ulAdressTag.setAttribute("class", "ulAdressTag");
		adressDetailsDiv.setAttribute("class", "adressDetailsDiv");

		//APPENDING TO DIVS
		ulAdressTag.append(
			nameTag,
			adressTag,
			cityTag,
			stateTag,
			contactTag,
			dateTag
		);
		ulDivTag.append(ulAdressTag);
		adressDetailsDiv.append(ulDivTag, productsSection);
		document.getElementById("box").append(adressDetailsDiv);
	});
}

// function pastProductsDisplay(filteredUsers) {
// 	//CREATING ELEMENTS
//FILTERING PRODUCTS

// 	//MAPPING PRODUCTS
// 	uniqueProducts.map((product) => {
// 		// CREATING TAGS FOR PRODUCTS
// 		var productSectionDiv = document.createElement("div");
// 		var productTextDiv = document.createElement("div");
// 		var productName = document.createElement("p");
// 		var productImg = document.createElement("img");
// 		var productPrice = document.createElement("p");
// 		var productDescUl = document.createElement("ul");

// 		// FOR LOOP FOR APPENDING ALL DESCRIPTION TO PRODUCT DESC
// 		for (let i = 0; i < product.features.length; i++) {
// 			var liTag = document.createElement("li");
// 			var shortName = product.features;
// 			liTag.textContent = shortName[i];
// 			productDescUl.append(liTag);
// 		}

// 		//SETTING ATTRIBUTES AND TEXT CONTENT FOR PRODUCTS
// 		productName.textContent = product.name;
// 		productImg.setAttribute("src", product.img_src);
// 		productPrice.textContent = `Price: ${product.price}`;
// 		productSectionDiv.setAttribute("class", "productSectionDiv");
// 		productTextDiv.setAttribute("class", "productTextDiv");
// 		//APPENDING
// 		productTextDiv.append(productName, productDescUl, productPrice);
// 		productSectionDiv.append(productImg, productTextDiv);

// 		document.querySelector(".adressDetailsDiv").append(productSectionDiv);
// 	});
// }

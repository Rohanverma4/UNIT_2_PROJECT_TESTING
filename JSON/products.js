//LOCAL STORAGES =>

var products = [
	{
		name: "Novy Pain Oil",
		vendorName: "Pugle Pharma",
		img_src: "../IMAGES/PRODUCT_IMAGES/novy_oil.jpg",
		discountPercent: 5,
		lineThroughMRP: 148,
		price: 99,
		features: [
			"100% Freshly Handpicked Herbs",
			"Relief for Arthritis, Knee/Back Pain",
			"Headache, Cold, Sinus",
			"Ayurveda | No Side Effects",
		],
		available: true,
		details: {
			SKU: "PC-41766",
			"Product Description": "Novy Pain Oil is manufactured by Fugle Pharma",
			Packing: "Bottle",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
		},
	},
	{
		name: "Conarcs Diabetic Ointment",
		vendorName: "Conarcs",
		img_src: "../IMAGES/PRODUCT_IMAGES/conarcs.jpg",
		discountPercent: 5,
		lineThroughMRP: 148,
		price: 140,
		features: [
			"100% Natural Remedy",
			"Reduces Fatigue",
			"Reduces Sugar to Normal Levels",
			"Prevents",
		],
		available: true,
		details: {
			SKU: "PC-41767",
			"Product Description":
				" Conarcs Diabetic Ointment is manufactured by Conarcs",
			Packing: "Container",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
		},
	},
	{
		name: "Shigaa Anti Lice & Dandruff Oil",
		vendorName: "Dhevi Herbal Products",
		img_src: "../IMAGES/PRODUCT_IMAGES/shigaa.png",
		discountPercent: 5,
		lineThroughMRP: 148,
		price: 110,
		features: [
			"No need of compulsory bathing & combing",
			"100% herbal, no side effects, no hairloss",
			"Get rid of dandruff in 2 weeks",
		],
		available: true,
		details: {
			SKU: "PC-44072",
			"Product Description":
				"Shigaa Anti Lice & Dandruff Oil is manufactured by Dhevi Herbal Products",
			Packing: "Unit",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
		},
	},
	{
		name: "Pankajakasthuri Orthoherb Tablet 30'S",
		vendorName: "Pankajakasthuri",
		img_src: "../IMAGES/PRODUCT_IMAGES/pankajakasthuri.jpg",
		discountPercent: 5,
		lineThroughMRP: 148,
		price: 145,
		features: [
			"Instant Joint Pain Relief",
			"Herbal, free from chemicals",
			"Relieves Back, Shoulder & Ankle Pain",
			"Get rid of dandruff in 2 weeks",
		],
		available: true,
		details: {
			SKU: "PC-26998",
			"Product Description":
				"Pankajakasthuri Orthoherb Tablet 30'S is manufactured by Pankajakasthuri",
			Packing: "Packet",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
		},
	},
];
//LOCAL STORAGE
let addedProductsInDom =
	JSON.parse(localStorage.getItem("addedProducts")) || [];

//REMOVING CUPON CHECKER
// localStorage.removeItem("")
console.log(addedProductsInDom);
let counterNumberFromLS = localStorage.getItem("counter");
localStorage.setItem("counter", addedProductsInDom.length);
document.getElementById("cartCounter").textContent = addedProductsInDom.length;

var mySecondCarousel = document.querySelector("#carousal_container_2");
function appendProducts(products) {
	products.map((item) => {
		var mainDiv = document.createElement("div");
		var textDiv = document.createElement("div");
		var h5Tag = document.createElement("h5");
		var priceTag = document.createElement("p");
		var imgTag = document.createElement("img");
		var button = document.createElement("button");
		var ulDiv = document.createElement("ul");
		for (let i = 0; i < item.features.length; i++) {
			let liTag = document.createElement("li");
			liTag.textContent = item.features[i];
			ulDiv.append(liTag);
		}
		//set attributes
		imgTag.setAttribute("src", item.img_src);
		imgTag.setAttribute("class", "galleryCellImg");
		h5Tag.textContent = item.name;
		priceTag.textContent = `Price: ${item.price}`;
		textDiv.setAttribute("class", "galleryTextDiv");
		button.textContent = "Add To Cart";
		button.addEventListener("click", () => {
			increaseCart(item);
		});
		mainDiv.setAttribute("class", "gallery-cell");
		textDiv.append(h5Tag, priceTag, ulDiv, button);
		mainDiv.append(imgTag, textDiv);
		imgTag.addEventListener("click", () => {
			goToProductPage(item);
		});
		mySecondCarousel.append(mainDiv);

		// console.log(flkty);
	});
}

$(document).ready(function () {
	appendProducts(products);
	$(".gallery-two").flickity({
		cellAlign: "left",
		wrapAround: true,
		lazyLoad: true,
	});
});

function increaseCart(item) {
	let counter = document.getElementById("cartCounter");

	counter.textContent = +counter.textContent + 1;
	localStorage.setItem("counter", counter.textContent);
	addedProductsInDom.push(item);
	localStorage.setItem("addedProducts", JSON.stringify(addedProductsInDom));
}

function goToProductPage(item) {
	localStorage.setItem("viewSingleProduct", JSON.stringify(item));
	window.location.href = "/ProductPage/productPage.html";
}

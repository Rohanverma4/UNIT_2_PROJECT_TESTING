var products = [
	{
		name: "Novy Pain Oil",
		img_src: "../IMAGES/PRODUCT_IMAGES/novy_oil.jpg",
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
		img_src: "../IMAGES/PRODUCT_IMAGES/conarcs.jpg",
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
		img_src: "../IMAGES/PRODUCT_IMAGES/shigaa.png",
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
		img_src: "../IMAGES/PRODUCT_IMAGES/pankajakasthuri.jpg",
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

var mySecondCarousel = document.querySelector("#carousal_container_2");

function appendProducts(products) {
	products.map((item) => {
		var mainDiv = document.createElement("div");
		var textDiv = document.createElement("div");
		var h5Tag = document.createElement("h5");
		var priceTag = document.createElement("p");
		var imgTag = document.createElement("img");
		var button = document.createElement("button");
		//set attributes
		imgTag.setAttribute("src", item.img_src);
		imgTag.setAttribute("class", "galleryCellImg");
		h5Tag.textContent = item.name;
		priceTag.textContent = `Price: ${item.price}`;
		textDiv.setAttribute("class", "galleryTextDiv");
		button.textContent = "Buy Now";
		mainDiv.setAttribute("class", "gallery-cell");
		textDiv.append(h5Tag, priceTag, button);
		mainDiv.append(imgTag, textDiv);
		mySecondCarousel.append(mainDiv);
		// console.log(flkty);
	});
}

$(document).ready(function () {
	appendProducts(products);
	$(".gallery-two").flickity({
		cellAlign: "left",
		wrapAround: true,
		autoPlay: 3000,
		lazyLoad: true,
	});
});

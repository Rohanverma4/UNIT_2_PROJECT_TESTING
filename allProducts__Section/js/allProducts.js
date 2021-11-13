var _products = [
	{
		name: "Novy Pain Oil",
		img_src: "../IMAGES/PRODUCT_IMAGES/novy_oil.jpg",
		price: 99,
		lineThroughMRP: 120,
		discountPercent: 10,
		quantity: "15 Tablets / Strip",
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
			vendorName: "Fugle Pharma",
		},
	},
	{
		name: "Conarcs Diabetic Ointment",
		img_src: "../IMAGES/PRODUCT_IMAGES/conarcs.jpg",
		price: 140,
		lineThroughMRP: 148,
		discountPercent: 5,
		quantity: "15 Tablets / Strip",
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
			vendorName: "Conarcs",
		},
	},
	{
		name: "Shigaa Anti Lice & Dandruff Oil",
		img_src: "../IMAGES/PRODUCT_IMAGES/shigaa.png",
		price: 110,
		lineThroughMRP: 130,
		discountPercent: 15,
		quantity: "15 Tablets / Strip",
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
			vendorName: "Dhevi herbal Products",
		},
	},
	{
		name: "Pankajakasthuri Orthoherb Tablet 30'S",
		img_src: "../IMAGES/PRODUCT_IMAGES/pankajakasthuri.jpg",
		price: 145,
		lineThroughMRP: 150,
		discountPercent: 3,
		quantity: "15 Tablets / Strip",
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
			vendorName: "Pankajakasthuri",
		},
	},
	{
		name: "Acera Capsule",
		img_src: "https://www.pulseplus.in/content/images/form/form-capsule-1.png",
		price: 61.84,
		lineThroughMRP: 82.45,
		discountPercent: 15,
		quantity: "15 Tablets / Strip",
		features: [
			"Acidity",
			"Peptic ulcer disease",
			"Gastroesophageal reflux disease (Acid reflux)",
		],
		available: true,
		details: {
			SKU: "PC-468",
			"Product Description":
				"Acera Capsule is manufactured by Ipca Laboratories Ltd",
			Packing: "Strip",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "manufactured by Ipca Laboratories Ltd",
			discountPercent: 5,
		},
	},

	{
		name: "Becadexamin Capsule container",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/becadexamin-capsule-container-pc-2652",
		price: 31.65,
		lineThroughMRP: 42.2,
		discountPercent: 4,
		quantity: "15 Tablets / Strip",
		features: [
			"Becadexamin is a unique combination of multivitamins and multimerals. ",
			"This multi-mineral vitamin complex may be used for the prophylaxis of health  and improvement of the immunity.",
			"Becadexamin is a mix of Vitamins A, D3, E, B1, B2, B6, B12, B9, B3, C, Copper sulphate, Magnesium, D-Panthenol, Potassium, Manganese, Zinc sulphate and Magnesium.",
		],
		available: true,
		details: {
			SKU: "PC-2652",
			"Product Description":
				"Becadexamin Capsule container is manufactured by Glaxo SmithKline",
			Packing: "Container",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "Glaxo SmithKline Laboratories Ltd",
		},
	},

	{
		name: "Calaptin 40 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/calaptin-40-mg-tablet-pc-5332",
		price: 18.75,
		lineThroughMRP: 25,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Verapamil is generally used in treatment of arrhythmias, chest pain (Angina) and high blood pressure",
		],
		available: true,
		details: {
			SKU: "PC-5332",
			"Product Description": "Calaptin 40 mg Tablet is manufactured by Abbott",
			Packing: " Strip",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "Abbott Laboratories Ltd",
		},
	},

	{
		name: "D Rise Sachet 1 gm",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/d-rise-sachet-1-gm-pc-8665",
		price: 32.8,
		lineThroughMRP: 41,
		discountPercent: 20,
		quantity: "15 Tablets / Strip",
		features: [
			"D-Rise contains cholecalciferol (Vitamin D3). Vitamin D3 is essential for the proper growth and development of the body.",
			" It is synthesized within the body after exposure to sunlight and is essential for many important functions of the human body. Vitamin D3 in D-Rise also increases the Calcium absorption from the intestines. D-Rise is available commercially in the form of sachets containing granules of cholecalciferol (Vitamin D3).",
		],
		available: true,
		details: {
			SKU: " PC-8665",
			"Product Description": "D Rise Sachet 1 gm is manufactured by USV Ltd",
			Packing: " Sachet",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "manufactured by USV Ltd",
		},
	},

	{
		name: "Ecosprin 150 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/ecosprin-150-mg-tablet-pc-10595",
		price: 6.75,
		lineThroughMRP: 9,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Aspirin / Acetylsalicylic acid is generally used in treatment for prevention of heart attack and stroke. ",
			"It decreases the chances of having another heart attack or stroke from a disease related to your heart or blood vessels.",
		],
		available: true,
		details: {
			SKU: " PC-10595",
			"Product Description":
				"Ecosprin 150 mg Tablet is manufactured by USV Ltd",
			Packing: " Stript",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "manufactured by USV Ltd",
		},
	},

	{
		name: "Febuget 40 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/febuget-40-mg-tablet-pc-11160",
		price: 133.88,
		lineThroughMRP: 178.5,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Febuxostat is generally used in treatment of the treatment of gout.",
		],
		available: true,
		details: {
			SKU: " PC-11160",
			"Product Description":
				"Febuget 40 mg Tablet is manufactured by Sun Pharmaceutical Industries Ltd",
			Packing: " Stript",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "Sun Pharmaceutical Industries Ltd",
		},
	},

	{
		name: "Gabantin 100 mg Capsule",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/gabantin-100-mg-capsule-pc-13488",
		price: 60,
		lineThroughMRP: 80,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Gabapentin is generally used in treatment of neuropathic pain and seizures",
		],
		available: true,
		details: {
			SKU: " PC-13488",
			"Product Description":
				"Febuget 40 mg Tablet is manufactured by Sun Pharmaceutical Industries Ltd",
			Packing: " Stript",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "Sun Pharmaceutical Industries Ltd",
		},
	},

	{
		name: "HCQS 200 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/hcqs-200-mg-tablet-pc-16288",
		price: 74.47,
		lineThroughMRP: 99.29,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Hydroxychloroquine is generally used in treatment of rheumatoid arthritis and systemic lupus erythematosus",
		],
		available: true,
		details: {
			SKU: " PC-16288",
			"Product Description":
				"HCQS 200 mg Tablet is manufactured by Ipca Laboratories Ltd",
			Packing: " Stript",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: "Ipca Laboratories Ltd",
		},
	},

	{
		name: "Insugen 30/70 40IU Injection",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/insugen-30-70-40iu-injection-pc-16019",
		price: 118.5,
		lineThroughMRP: 158,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Insulin Isophane / NPH is generally used in treatment of the treatment of diabetes.",
			"Human Insulin / Soluble Insulin is generally used in treatment of the treatment of diabetes.",
		],
		available: true,
		details: {
			SKU: " PC-16019",
			"Product Description":
				"Insugen 30/70 40IU Injection is manufactured by Biocon",
			Packing: " vial",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: " Biocon Laboratories Ltd",
		},
	},

	{
		name: "Jalra M 50/500 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/jalra-m-50-500-mg-tablet-pc-19056",
		price: 243.75,
		lineThroughMRP: 325,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Vildagliptin is generally used in treatment of the treatment of type 2 diabetes. It is generally used in treatment of addition to diet and exercise to improve blood sugar control in adult patients with type 2 diabetes.",
		],
		available: true,
		details: {
			SKU: " PC-19056",
			"Product Description":
				"Jalra M 50/500 mg Tablet is manufactured by USV Ltd",
			Packing: "strip",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: " USV Ltd",
		},
	},

	{
		name: "Janumet 50/1000 mg Tablet",
		img_src:
			"https://res.cloudinary.com/pulse-pharmacy/image/upload/product/janumet-50-1000-mg-tablet-pc-18985",
		price: 311.25,
		lineThroughMRP: 415,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Vildagliptin is generally used in treatment of the treatment of type 2 diabetes. It is generally used in treatment of addition to diet and exercise to improve blood sugar control in adult patients with type 2 diabetes.",
		],
		available: true,
		details: {
			SKU: " PC-18985",
			"Product Description":
				"Janumet 50/1000 mg Tablet is manufactured by MSD Pharmaceuticals Pvt",
			Packing: "strip",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: " USV Ltd",
		},
	},

	{
		name: "Jostel AM Tablet",
		img_src: "https://www.pulseplus.in/content/images/form/form-tablet-1.png",
		price: 52.5,
		lineThroughMRP: 70,
		discountPercent: 25,
		quantity: "15 Tablets / Strip",
		features: [
			"Telmisartan is generally used in treatment of the treatment of high blood pressure.",
			"Amlodipine is generally used in treatment of chest pain (Angina) and high blood pressure",
		],
		available: true,
		details: {
			SKU: " PC-19806",
			"Product Description":
				"Jostel AM Tablet is manufactured by Joslin Pharmaa Pvt Ltd",
			Packing: "strip",
			Condition: "New",
			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: " Joslin Pharmaa Pvt Ltd",
		},
	},
];

var products = JSON.parse(localStorage.getItem("ALL_PRODUCTS")) || [];

if (products.length < 1) {
	products = [..._products];
	localStorage.setItem("ALL_PRODUCTS", JSON.stringify(products));
}

//LOCAL STORAGES
let addedProductsInDom =
	JSON.parse(localStorage.getItem("addedProducts")) || [];

let counterNumberFromLS = localStorage.getItem("counter");

localStorage.setItem("counter", addedProductsInDom.length);

var searchQuery = localStorage.getItem("searchQueryString");
let userMobileNumber = localStorage.getItem("mobileNumber") || 0;

//SETTING CART COUNTER
document.getElementById("cartCounter").textContent = counterNumberFromLS;

//MAPPING PRODUCTS
function mapProducts(products) {
	document.querySelector(".allItems").innerHTML = "";
	products.map((product) => {
		// this id parent div
		var itemBox = document.createElement("div");
		itemBox.setAttribute("class", "item__box");

		//this is first child of itemBox
		var productName = document.createElement("div");
		productName.setAttribute("class", "productName");

		//child of productName div
		var product__Name = document.createElement("h4");
		product__Name.innerHTML = product.name;

		var productQnt = document.createElement("p");
		productQnt.innerHTML = product.quantity;

		var companyName = document.createElement("p");
		companyName.innerHTML = product.details.vendorName;

		//append the child
		productName.append(product__Name, productQnt, companyName);

		//this is second child of itemBox
		var productPrice = document.createElement("div");
		productPrice.setAttribute("class", "productPrice");

		//child of productPrice div
		var priceTag = document.createElement("p");
		priceTag.innerHTML = `<p> <span class= "lineThroughMRP"> ₹ ${product.lineThroughMRP}</span> ₹ ${product.price} </p>`;

		var addBtn = document.createElement("button");
		addBtn.innerHTML = "ADD";

		//EVENT LISTENER FOR ADD BTN
		addBtn.addEventListener("click", (event) => {
			addToCartItem(product, event);
		});

		//append the child
		productPrice.append(priceTag, addBtn);

		//append in parent div
		itemBox.append(productName, productPrice);
		productName.addEventListener("click", (event) => {
			goToProductPage(product, event);
		});
		//append main html page
		document.querySelector(".allItems").append(itemBox);
	});
}

//FUNCTION TO ADD PRODUCT TO CART
var notLoggedIn = !userMobileNumber;

function addToCartItem(obj, event) {
	if (notLoggedIn) {
		alert("Please Log In To Add Items To Your Cart");
		window.location.href = "/LOGIN_PAGE/login.html";
	} else {
		let counter = document.getElementById("cartCounter");

		counter.textContent = +counter.textContent + 1;
		localStorage.setItem("counter", counter.textContent);
		addedProductsInDom.push(obj);
		localStorage.setItem("addedProducts", JSON.stringify(addedProductsInDom));
	}
}

//REDIRECTING TO CART PAGE
document.getElementById("cartAnchor").addEventListener("click", goToOrdersPage);
function goToOrdersPage() {
	window.location.href = "/ORDER_SECTION/myOrderPurchased.html";
}

function goToProductPage(item, event) {
	localStorage.setItem("viewSingleProduct", JSON.stringify(item));
	window.location.href = "/ProductPage/productPage.html";
}

//CHECKING IF SEARCH QUERY EXISTS
if (searchQuery) {
	var newProducts = products.filter((obj) =>
		obj.name.toLowerCase().startsWith(searchQuery)
	);
	mapProducts(newProducts);
} else {
	mapProducts(products);
}

var footerSection = `
<div id="featuresBox">
				<div class="insideFeaturesBox">
					<img src="../IMAGES/trust.png" alt="placeholder image" />
					<h5>Genuine</h5>
					<p>Wide Range of Wellness & OTC Products</p>
				</div>
				<div class="insideFeaturesBox">
					<img src="../IMAGES/save.png" alt="placeholder image" />
					<h5>Save up to 50%*</h5>
					<p>Flat Discount & Cashback on Medicine</p>
				</div>
				<div class="insideFeaturesBox">
					<img src="../IMAGES/secure.png" alt="placeholder image" />
					<h5>Trust</h5>
					<p>100% Secure Payments</p>
				</div>
				<div class="insideFeaturesBox">
					<img src="../IMAGES/refill.png" alt="placeholder image" />
					<h5>Easy Monthly Refills</h5>
					<p>Subscribe for hassle free monthly refills</p>
				</div>
			</div>
			<div id="footerSection">
				<div id="contactInfo">
					<div class="insidecontactInfo">
						<h2>INFORMATION</h2>
						<a href="#"><p>About Pulse Pharmacy</p></a>
						<a href="#"><p>Terms & Conditions</p></a>
						<a href="#"><p>Offers</p></a>
						<a href="#"><p>Blog</p></a>
						<a href="#"><p>Apply for API</p></a>
					</div>
					<div class="insidecontactInfo">
						<h2>BUY ONLINE</h2>
						<a href="#"><p>Browse by Category</p></a>
						<a href="#"><p>Browse by A-Z</p></a>
						<a href="#"><p>Upload Prescription</p></a>
						<a href="#"><p>Returns & Refund Policy</p></a>
						<a href="#"><p>Shipping Policy</p></a>
					</div>
					<div class="insidecontactInfo">
						<h2>CONTACT</h2>
						<a href="#"><p id="whatsApp_line">About Pulse Pharmacy</p></a>
						<a href="#"><p>sales@puslepharmacy.in</p></a>
						<a href="#"><p>7795600600</p></a>
						<a href="#"
							><p>194, NSR Rd, Saibaba Colony, Coimbatore - 641041</p></a
						>
					</div>
					<div class="insidecontactInfo">
						<img
							src="https://www.pulseplus.in/content/images/icons/facebook.png"
							alt="facebook icon"
						/>

						<img
							src="https://www.pulseplus.in/content/images/icons/insta.png"
						/>
						<img
							src="https://www.pulseplus.in/content/images/icons/twitter.png"
						/>
					</div>
				</div>
				<!-- 
				---------------------------------------------
				-
				---------------------------------------------
				- PARTNERS IMAGES SECTION BELOW - USE MAPPING
			--->
				<div id="partnerSection"></div>
				<!--
				---------------------------------------------
				-
				---------------------------------------------
				- PARTNERS IMAGES SECTION ABOVE - USE MAPPING
			-->
				<div id="aboutPara">
					<h3>About Pulse Pharmacy</h3>
					<p>
						About Pulse Pharmacy Pulse Pharmacy is a leading Online Pharmacy in
						India that offers prescription medicines, OTC products & generic
						medications all over India. Our aim at Pulse Pharmacy is to ensure
						health to all the individuals, and deliver healthcare commerce in a
						personalized way. We make simple and user-friendly way for people to
						buy the prescribed medicines online from anywhere in India and can
						buy at any time at best deals and prices.<br />
						Pulse Pharmacy simplifies the search for needed medicines and
						toorder medicines onlines. Our priority is to satisfy the customer
						and to build the trust factor by providing medicines packed by
						qualified & experienced pharmacists from our own & operated
						outlets.<br /><br />
						In our current world, life-saving medications became costly and, so
						we have opened a gate to an opportunity that saves your money on
						medications. You can buy or order medicines particularly generic
						medicine, OTC medicine & prescription medicines at a cheaper price
						at the convenience of your home. Pulse Pharmacy is the best Online
						Pharmacy in India, that delivers medicines from 100% owned and
						operated outlets.<br /><br />
						You can use the brand name to search the medicine you prefer to
						order medicine online.<br />
						<br />
						Note: We don't process requests for Schedule X and other habit
						forming drugs, due to compliance with Drugs and Cosmetics Act of
						India. You need to upload a valid prescription from a registered
						medical practitioner while placing an order for Schedule H and H1
						drugs
					</p>
					<p id="copyRight">© 2021 Pulse Pharmacy. All Rights Reserved</p>
				</div>
			</div>
`;
var myNavbar = `
<nav id="navbar">
				<div id="mySidepanel" class="sidepanel">
					<a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
						>×</a
					>

					<h2>Welcome Guest</h2>
					<a href="../LOGIN_PAGE/login.html"
						><i class="material-icons">power_settings_new</i
						><span id="logininsideSidePanel">Login/Signup</span></a
					>
					<a href="#"><i class="material-icons">lightbulb</i>About Pulse</a>
					<a href="#">
						<i class="material-icons">undo</i>Returns & refund Policy</a
					>
					<a href="#"> <i class="material-icons">lock</i>Privacy Policy</a>
					<a href="#">
						<i class="material-icons">local_shipping</i>Shipping Policy</a
					>
					<a href="#">
						<i class="material-icons">description</i>Terms & Condition</a
					>
					<a href="#"> <i class="material-icons">search</i>Browse by A-Z</a>
				</div>
				<button class="openbtn" onclick="openNav()">☰</button>

				<img
					id="plusPlusImg"
					src="https://www.pulseplus.in/content/images/icons/logo-pulse-pharmacy-trans.png"
				/>
				<div id="search-box">
					<input
						type="text"
						class="search"
						placeholder="Search medicines.E.g.amlong,dolo,etc"
					/>
					<button type="submit" class="search-btn">
						<i id="searchIcon" class="material-icons">search</i>
					</button>
				</div>
				<!-- COLLAPSE SIDE PANEL TESTING -->
				<!-- COLLAPSE SIDE PANEL TESTING -->
				<ul>
					<li>
						<button id="myBtn">
							<i class="material-icons">location_on</i><span>Location</span>
						</button>

						<!-- The Modal -->
						<div id="myModal" class="modal">
							<!-- Modal content -->
							<div class="modal-content">
								<div class="modal-header">
									<span class="close">&times;</span>
									<img src="../IMAGES/select-city-header.png" />
								</div>
								<div class="modal-body">
									<form id="modalForm">
										<input type="text" placeholder="Enter your city" />
										<label for="nd">
											<input
												id="nd"
												type="radio"
												name="location"
												value="New Delhi"
											/>
											New Delhi
										</label>

										<label for="mumbai">
											<input
												id="mumbai"
												type="radio"
												name="location"
												value="Mumbai"
											/>
											Mumbai
										</label>

										<label for="bengaluru">
											<input
												id="bengaluru"
												type="radio"
												name="location"
												value="Bengaluru"
											/>
											Bengaluru
										</label>

										<label for="kolkata">
											<input
												id="kolkata"
												type="radio"
												name="location"
												value="Kolkata"
											/>
											Kolkata
										</label>

										<label for="chennai">
											<input
												d="chennai"
												type="radio"
												name="location"
												value="Chennai"
											/>
											Chennai
										</label>

										<label for="noida">
											<input
												id="noida"
												type="radio"
												name="location"
												value="Noida"
											/>
											Noida
										</label>

										<label for="pune">
											<input
												id="pune"
												type="radio"
												name="location"
												value="Pune"
											/>
											Pune
										</label>

										<label for="hyderabad">
											<input
												id="hyderabad"
												type="radio"
												name="location"
												value="Hyderabad"
											/>
											Hyderabad
										</label>

										<input
											type="submit"
											id="applyModalLocation"
											value="Apply"
										/>
									</form>
								</div>
							</div>
						</div>
					</li>
					<li id="loginSignupHref">
						<a href="../LOGIN_PAGE/login.html">Login/Signup</a>
					</li>

					<li>
						<a id="cartAnchor" href="#" onclick="goToOrdersPage()">
							<span id="cartCounter">0</span>
							<i id="cartIcon" class="material-icons">shopping_bag</i>
						</a>
					</li>
				</ul>
			</nav>
`;

//Local Storages
var toBeViewedProduct = JSON.parse(localStorage.getItem("viewSingleProduct"));
let addedProductsInDom =
	JSON.parse(localStorage.getItem("addedProducts")) || [];

let counterNumber = localStorage.getItem("counter");

setTimeout(() => {
	let counter = document.getElementById("cartCounter");
	counter.textContent = addedProductsInDom.length;
	// if (counterNumber) counter.textContent = counterNumber;
	// else counter.textContent = 0;
}, 10);

console.log(addedProductsInDom);

//Select Tag
var selectTag = document.getElementById("numProductsSelect");
for (let i = 0; i <= 100; i++) {
	var optionTag = `<option value="${i}">${i}</option>`;
	selectTag.innerHTML += optionTag;
}
//Select Tag Event listener
selectTag.addEventListener("change", numItemsInCart);
function numItemsInCart() {
	let selectValue = selectTag.value;
	for (let i = 0; i < selectValue; i++) {
		addedProductsInDom.push(toBeViewedProduct);
	}
}

document.getElementById("bottomSection").innerHTML = footerSection;
document.getElementById("navBar").innerHTML = myNavbar;

document.getElementById("cartAnchor").addEventListener("click", () => {
	var counter = document.getElementById("cartCounter");
	if (counter.textContent == 0) {
		window.location.href = "/ORDER_SECTION/myOrder.html";
	} else {
		window.location.href = "/ORDER_SECTION/myOrderPurchased.html";
	}
});

//Function To Display Product In productPage.html
function displayProduct(product) {
	var imageSection = document.querySelector("#productImage");
	var productNameSection = document.querySelector("#descDiv > h2:nth-child(1)");
	var vendorNameSection = document.querySelector("#descDiv p");
	var ulTag = document.querySelector("#descDiv ul");
	var priceTag = document.querySelector("#price");
	var discountPercent = document.querySelector("#discount");
	var lineThroughPrice = document.querySelector("#lineThroughText");
	var availability = document.querySelector("#inStock");
	var productSKU = document.querySelector("#sku > span");
	var productDesc = document.querySelector("#productDescription > span");
	var packingType = document.querySelector("#packingType > span");
	var condition = document.querySelector("#condition > span");
	var soldBy = document.querySelector("#seller > span");

	//FOR LOOP FOR LI TAG
	for (let i = 0; i < product.features.length; i++) {
		let liTag = document.createElement("li");
		liTag.textContent = product.features[i];
		ulTag.append(liTag);
	}

	//Setting Attributes and Text Contents
	if (product.available) {
		availability.textContent = "In Stock";
	} else if (!product.available) {
		availability.style.color = "tomato";
		availability.textContent = "Unavailable";
		document.querySelector(".Addtocart").disabled = true;
	}

	productSKU.textContent = product.details.SKU;
	productDesc.textContent = product.details["Product Description"];
	packingType.textContent = product.details.Packing;
	condition.textContent = product.details.Condition;
	soldBy.textContent = product.details["Sold by"];
	lineThroughPrice.textContent = product.lineThroughMRP;
	discountPercent.textContent = `${product.discountPercent}% off`;
	priceTag.textContent = `Rs ${product.price}`;
	vendorNameSection.textContent = product.vendorName;
	productNameSection.textContent = product.name;
	imageSection.setAttribute("src", product.img_src);
}

//Add to Cart Function
document.querySelector(".Addtocart").addEventListener("click", () => {
	addToCart(toBeViewedProduct);
});
function addToCart(something) {
	addedProductsInDom.push(something);

	localStorage.setItem("addedProducts", JSON.stringify(addedProductsInDom));

	var noneDisplays = document.querySelectorAll(".noneDisplay");
	for (let i = 0; i < noneDisplays.length; i++) {
		noneDisplays[i].style.setProperty("display", "inline-block", "important");
	}
	var addToCartButtons = document.querySelectorAll(".Addtocart");
	for (let i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].textContent = "Checkout";
		// addToCartButtons[i].classList.remove("Addtocart");
		addToCartButtons[i].classList.add("checkoutClass");
		document.querySelector(".checkoutClass").addEventListener("click", () => {
			window.location.href = "/ORDER_SECTION/myOrderPurchased.html";
		});
	}
}
//INVOKING FUNCTION
//Go button functionality;
document.getElementById("go").addEventListener("click", () => {
	var zipCode = document.getElementById("zipCode").value;
	if (!(zipCode == Number(zipCode))) {
		alert("Zip Code Field Expects Only Number");
	} else if (String(zipCode).length !== 6) {
		alert("Zip Code Entered Incorrectly");
	} else {
		document
			.getElementById("deliveryExpected")
			.style.setProperty("display", "block");
	}
});

//FUNCTION FOR CHECKOUT BUTTON

displayProduct(toBeViewedProduct);

//FUNCTION FOR CARTICON IN NAVBAR
function goToOrdersPage() {
	var counter = document.getElementById("cartCounter");
	if (counter.textContent == 0) {
		window.location.href = "/ORDER_SECTION/myOrder.html";
	} else {
		window.location.href = "/ORDER_SECTION/myOrderPurchased.html";
	}
}

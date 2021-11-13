//LOCALSTORAGES
var feedBackArray = JSON.parse(localStorage.getItem("feedBacks")) || [];
console.log(feedBackArray);

// FUNCTIONS FOR DEFINING REVIEW DATA
function firstTimeUsers(feedBackArray) {
	var fTimeUsers = 0;
	var lTimeUsers = 0;
	for (let i = 0; i < feedBackArray.length; i++) {
		if (feedBackArray[i].firstTime) {
			fTimeUsers += 1;
		} else {
			lTimeUsers += 1;
		}
	}
	let firstPercentage = (fTimeUsers * 100) / (fTimeUsers + lTimeUsers);
	let lastPercentage = (lTimeUsers * 100) / (fTimeUsers + lTimeUsers);
	document.querySelector("#firstTimeUsers > span").textContent = `${
		firstPercentage || 0
	}%`;
	document.querySelector("#returningUsers > span").textContent = `${
		lastPercentage || 0
	}%`;
}

function usersNavViews(feedBackArray) {
	var veryEasy = 0;
	var easy = 0;
	var med = 0;
	var hard = 0;
	var vHard = 0;

	for (let i = 0; i < feedBackArray.length; i++) {
		switch (feedBackArray[i].easiValue) {
			case "veryEasy":
				veryEasy++;
				break;
			case "easy":
				easy++;
				break;
			case "medium":
				med++;
				break;
			case "hard":
				hard++;
				break;
			case "veryHard":
				vHard++;
				break;
		}
	}
	var vEasyPer = (veryEasy * 100) / (veryEasy + easy + med + hard + vHard);
	var easyPer = (easy * 100) / (veryEasy + easy + med + hard + vHard);
	var medPer = (med * 100) / (veryEasy + easy + med + hard + vHard);
	var hardPer = (hard * 100) / (veryEasy + easy + med + hard + vHard);
	var vHardPer = (vHard * 100) / (veryEasy + easy + med + hard + vHard);

	document.querySelector("#veryEasy > span").textContent = `${vEasyPer || 0}%`;
	document.querySelector("#easy > span").textContent = `${easyPer || 0}%`;
	document.querySelector("#medium > span").textContent = `${medPer || 0}%`;
	document.querySelector("#hard > span").textContent = `${hardPer || 0}%`;
	document.querySelector("#veryHard > span").textContent = `${vHardPer || 0}%`;
}

function recentUsersReviews(feedBackArray) {
	if (feedBackArray.length > 10) {
		for (let i = 0; i < 10; i++) {
			var userNameTag = document.createElement("td");
			var reasonTag = document.createElement("td");
			var returningOrNew = document.createElement("td");
			var productsNotFoundTag = document.createElement("td");
			var trTag = document.createElement("tr");

			//SETTING ATTRIBUTES AND TEXTCONTENTS

			var object = feedBackArray[i]; //SHORTHAND

			userNameTag.textContent = object.name || "Not Provided";
			reasonTag.textContent = object.reason;
			returningOrNew.textContent = object.firstTime
				? "First Time"
				: "Returning User";
			productsNotFoundTag.textContent =
				object.productsNotFound || "Not Provided";

			//Appending to Divs
			trTag.append(userNameTag, reasonTag, returningOrNew, productsNotFoundTag);
			document.querySelector("#dashBoardTable > tbody").append(trTag);
		}
	} else {
		feedBackArray.map((object) => {
			// CREATING TAGS
			var userNameTag = document.createElement("td");
			var reasonTag = document.createElement("td");
			var returningOrNew = document.createElement("td");
			var productsNotFoundTag = document.createElement("td");
			var trTag = document.createElement("tr");

			//SETTING ATTRIBUTES AND TEXTCONTENTS
			userNameTag.textContent = object.name || "Not Provided";
			reasonTag.textContent = object.reason;
			returningOrNew.textContent = object.firstTime
				? "First Time"
				: "Returning User";
			productsNotFoundTag.textContent =
				object.productsNotFound || "Not Provided";

			//Appending to Divs
			trTag.append(userNameTag, reasonTag, returningOrNew, productsNotFoundTag);
			document.querySelector("#dashBoardTable > tbody").append(trTag);
		});
	}
}
var myPanelTemplate = `
<h2 id="overviewH2">Website Overview</h2>
			<div id="detailsContainer">
				<div id="numProducts" class="websiteDetails">
					<i class="material-icons">inventory_2</i>
					<div class="webSiteDetailsText">
						<h2 id="productP"></h2>
						<p>Products</p>
					</div>
				</div>
				<div id="numPartners" class="websiteDetails">
					<i class="material-icons">gesture</i>
					<div class="webSiteDetailsText">
						<h2 id="partnerP">120</h2>
						<p>Partners</p>
					</div>
				</div>
				<div id="numUsers" class="websiteDetails">
					<i class="material-icons">people_alt</i>
					<div class="webSiteDetailsText">
						<h2 id="usersP"></h2>
						<p>Users</p>
					</div>
				</div>
				<div id="numVisitors" class="websiteDetails">
					<i class="material-icons">leaderboard</i>
					<div class="webSiteDetailsText">
						<h2 id="visitorsP">120</h2>
						<p>Visitors</p>
					</div>
				</div>
			</div>
			<div id="dashboardTableDiv">
				<h4>Users Feedback Details</h4>
				<div id="feedBackInsights">
					<div id="firstTimeUsersDiv">
						<h4>Users Percentage</h4>
						<p id="firstTimeUsers">First Time Users: <span>0</span></p>
						<p id="returningUsers">Returning Users: <span>0</span></p>
					</div>
					<div id="easyReview">
						<h4>Users view on navigation</h4>
						<ul id="allEasyLevels">
							<li id="veryEasy">Very Easy: <span>0</span></li>
							<li id="easy">Easy: <span>0</span></li>
							<li id="medium">Medium: <span>0</span></li>
							<li id="hard">Hard: <span>0</span></li>
							<li id="veryHard">Very Hard: <span>0</span></li>
						</ul>
					</div>
				</div>
				<h3>Recent Users Feedback</h3>
				<table id="dashBoardTable">
					<thead>
						<tr>
							<th>User Name</th>
							<th>Reason for Visiting</th>
							<th>Returning Or New User</th>
							<th>Any Missing Products</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
			`;

var myFormTemplate = `
<h3>Product Form</h3>
			<form id="productForm">
				<label for="productName"
					>Product Name:
					<input
						required
						type="text"
						id="productName"
						placeholder="Enter Product Name"
					/>
				</label>
				<label for="vendorName">
					Vendor Name:
					<input
						required
						type="text"
						id="vendorName"
						placeholder="Enter vendor name"
					/>
				</label>
				<label for="productPrice"
					>Product Price:
					<input
						required
						type="number"
						id="productPrice"
						placeholder="Enter Product Price"
					/>
				</label>
				<label for="discountPercent"
					>Discount Percentage:
					<input
						required
						type="number"
						id="discountPercent"
						placeholder="Enter Discount Percentage"
					/>
				</label>
				<label for="oldPrice"
					>Old Price:
					<input
						required
						type="number"
						id="oldPrice"
						placeholder="Enter Old Price"
					/>
				</label>
				<label for="productFeatures"
					>Product Features:
					<input
						required
						type="text"
						id="productFeatures"
						placeholder="Enter product Features"
					/>
				</label>
				<label for="productSKU"
					>Product SKU:
					<input
						required
						type="text"
						id="productSKU"
						placeholder="Enter product SKU"
					/>
				</label>
				<label for="productDesc"
					>Product Description:
					<input
						required
						type="text"
						id="productDesc"
						placeholder="Enter product Description"
					/>
				</label>
				<label for="productPacking"
					>Product Packing:
					<input
						required
						type="text"
						id="productPacking"
						placeholder="Enter product Packing"
					/>
				</label>
				<label for="productCondition"
					>Product Condition:
					<input
						required
						type="text"
						id="productCondition"
						placeholder="Enter product Condition"
					/>
				</label>
				<label for="productUrl"
					>Product Image:
					<input
						required
						type="text"
						id="productUrl"
						placeholder="Enter product Url"
					/>
				</label>

				<label for="productAvaliability"
					>Product Avaliability:
					<select id="productAvaliability">
						<option>-----</option>
						<option value="yes">yes</option>
						<option value="no">no</option>
					</select>
				</label>
				<span id="twoButtons">
					<input id="submitDetails" type="button" value="Submit Details" onclick="addProductDetails()" />
					<button id="goToProductsPage" onclick="goToProductsPageFunc()">
						Go To Products Page
					</button>
				</span>
			</form>
		
`;
var myUserDetails = `
<h3>User Details</h3>
			<div id="userTableDiv">
				<table id="userTable">
					<thead>
						<tr>
							<th>Name</th>
							<th>User Id</th>
							<th>Date of purchasing</th>
							<th>Order from</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
`;
var myAdminCredForm = `
<div id="adminProfileView">
				<div id="imgAndName">
				</div>
				<form id="adminProfile">
					<label for="adminUserName">
						Admin Username:
						<input
							type="text"
							id="adminUserName"
							placeholder="Update Admin	Name"
						/>
					</label>
					<label for="adminPassword">
						Admin Password:
						<input
							type="pasword"
							id="adminPassword"
							placeholder="Update Admin	Password"
						/>
					</label>
					<label for="adminRetypePassword">
						Retype Password:
						<input
							type="pasword"
							id="adminRetypePassword"
							placeholder="Update Admin	Password"
						/>
					</label>
					<label for="adminImage">
						Admin Image Update:
						<input
							type="text"
							id="adminImage"
							placeholder="Update Admin Image"
						/>
					</label>
					<input
						type="submit"
						id="submitAdminDetails"
						value="Update Credentials"
					/>
				</form>
			</div>
`;
document.getElementById("container").innerHTML = myPanelTemplate;

//All SIDE PANEL ACCESSES
// document.getElementById("container").innerHTML = myFormTemplate;

var myDashboardHref = document.getElementById("dashBoard");
myDashboardHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myPanelTemplate;
});

var myProductsHref = document.getElementById("productsBoard");
myProductsHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myFormTemplate;
	//console.log(1)

	// document.getElementById("goToProductPage")
	// 	.addEventListener("click", function () {
	// 		location.href = "/ProductPage/productPage.html";
	// 	});
});
// document
// 	.getElementById("submitDetails")
// 	.addEventListener("click", addProductDetails);

var myUserDetailsHref = document.getElementById("allUsers");
myUserDetailsHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myUserDetails;
	addDetails();
});

var myAdminProfileHref = document.getElementById("adminHref");
myAdminProfileHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myAdminCredForm;

	//R CODE
	var beforeUpdateDetails = document.getElementById("imgAndName");
	var beforeProfile = JSON.parse(localStorage.getItem("adminProfile")) || [];
	// GETTING IMAGE AND NAME
	if (beforeProfile.length >= 1) {
		var beforeName = beforeProfile[beforeProfile.length - 1].nameOfAdmin;
		var beforeImage = beforeProfile[beforeProfile.length - 1].adminImageUrl;
		// console.log(beforeImage,beforeName)
		var img = document.createElement("img");
		img.setAttribute("src", beforeImage);
		img.setAttribute("alt", "profile image");

		var name = document.createElement("h2");
		name.setAttribute("id", "adminName");
		name.textContent = `Hi, ${beforeName}`;

		beforeUpdateDetails.append(img, name);
		// //END
	}
	document
		.getElementById("submitAdminDetails")
		.addEventListener("click", function () {
			adminDetails();
			location.href = "/ADMIN/AdminPanel/adminPanel.html";
		});
});

var logOutHref = document.getElementById("logout");
logOutHref.addEventListener("click", () => {
	window.localStorage.removeItem("UserDetails");
	window.location.href = "/ADMIN/AdminLogin/admin.html";
});

//  PUTTING PRODUCT DATA INTO DOM
var productArr = JSON.parse(localStorage.getItem("productInfo")) || [];
var value = true;

var productsINDOM = JSON.parse(localStorage.getItem("ALL_PRODUCTS"));
// FUNCTION FOR ADDING PRODUCT
function addProductDetails() {
	var product_name = document.getElementById("productName").value;
	var product_price = document.getElementById("productPrice").value;
	var productFeatures = document.getElementById("productFeatures").value;
	var productSKU = document.getElementById("productSKU").value;
	var productPacking = document.getElementById("productPacking").value;
	var productCond = document.getElementById("productCondition").value;
	var product_description = document.getElementById("productDesc").value;
	var product_image = document.getElementById("productUrl").value;
	var product_avaliability = document.getElementById(
		"productAvaliability"
	).value;
	var vendorName = document.getElementById("vendorName").value;
	var discountPercent = document.getElementById("discountPercent").value;
	var oldPrice = document.getElementById("oldPrice").value;

	productFeatures = productFeatures.split(",");
	var singleProduct = {
		name: product_name,
		vendorName: vendorName,
		img_src: product_image,
		discountPercent: discountPercent,
		lineThroughMRP: oldPrice,
		price: product_price,
		features: productFeatures,
		quantity: "15 Tablets / Strip",
		available: product_avaliability,
		details: {
			SKU: productSKU,
			"Product Description": product_description,
			Packing: productPacking,
			Condition: productCond,
			"Sold By": "Pulse Pharmacy India Pvt. Ltd.",
			vendorName: vendorName,
		},
	};
	productsINDOM.push(singleProduct);
	localStorage.setItem("ALL_PRODUCTS", JSON.stringify(productsINDOM));
}

//  PUTTING ADMIN DATA INTO DOM
var adminInfoArr = JSON.parse(localStorage.getItem("adminProfile")) || [];

// FUNCTION FOR INPUT ADMIN
function adminDetails() {
	//console.log(1)
	var adminUser_name = document.getElementById("adminUserName").value;
	var admin_password = document.getElementById("adminPassword").value;
	var confirm_password = document.getElementById("adminRetypePassword").value;
	var admin_image = document.getElementById("adminImage").value;

	if (admin_password != confirm_password) {
		alert("Password and Confirm password is not matched");
	} else if (admin_password.length < 6) {
		alert("Password most contain 6 digits");
	} else {
		// CREATING OBJECT FOR ARRAY..
		var adminData = {
			nameOfAdmin: adminUser_name,
			passwordOfAdmin: admin_password,
			adminImageUrl: admin_image,
		};
		// ALERT FOR EMPTY ENTRY
		var count = 0;
		for (var input in adminData) {
			if (adminData[input] == "") {
				alert(`Please input the ${input}`);
				break;
			} else {
				count++;
			}
		}
		// CHECKING ENTRY IS FULL OR NOT
		if (count == Object.keys(adminData).length) {
			adminInfoArr.pop();
			adminInfoArr.push(adminData);
			localStorage.setItem("adminProfile", JSON.stringify(adminInfoArr));
			alert("Updated Successfully!!");
		}
	}
}

// SECURITY REASONS PLEASE DON'T ACCESS THE CODE..
if (window.localStorage.getItem("UserDetails") == null) {
	location.href = "/ADMIN/AdminLogin/admin.html";
} else {
	var SavedUser = window.localStorage.getItem("UserDetails");
	try {
		SavedUser = JSON.parse(SavedUser);
		if (SavedUser.user != "admin" || SavedUser.pass != "admin") {
			location.href = "/ADMIN/AdminLogin/admin.html";
		}
	} catch (error) {
		location.href = "/ADMIN/AdminLogin/admin.html";
	}
}

// DYNAMIC ADMIN PANEL FRONT..
// ** products
var adminPanelProducts = JSON.parse(localStorage.getItem("productInfo")) || [];
var lengthProducts = adminPanelProducts.length;
// document.getElementById("productP").innerHTML = lengthProducts;

// ** visitors
var numOfVisitors = JSON.parse(localStorage.getItem("visitors")) || 0;
document.getElementById("visitorsP").innerHTML = numOfVisitors;

// ** USERS
var countOfUser = JSON.parse(localStorage.getItem("userCount")) || 0;
document.getElementById("usersP").innerHTML = countOfUser;

//INVOKING REVIEWS FUNCTION
usersNavViews(feedBackArray);
firstTimeUsers(feedBackArray);
recentUsersReviews(feedBackArray);

// RECENT USERS DETAILS
var detailsArr = JSON.parse(localStorage.getItem("adressArray")) || []; //checkedAdress;
function addDetails() {
	for (var i = 0; i < detailsArr.length; i++) {
		var bodyUsers = document.querySelector("#userTable");

		var detailsRow = document.createElement("tr");

		var userName = document.createElement("td");
		userName.textContent = detailsArr[i].name;

		var userMobileNumber = document.createElement("td");
		userMobileNumber.textContent = detailsArr[i].contact;

		var orderDate = document.createElement("td");
		orderDate.textContent = detailsArr[i].dateOfOrder;

		var orderDetails = document.createElement("td");
		orderDetails.textContent = detailsArr[i].adress;

		detailsRow.append(userName, userMobileNumber, orderDate, orderDetails);
		bodyUsers.append(detailsRow);
	}
}

// document.querySelector("#goToProduct").addEventListener("click",function(){
// 	location.href = "/ProductPage/productPage.html";
// })
// document
// 	.getElementById("goToProductsPage")
// 	.addEventListener("click", goToProductsPageFunc);

function goToProductsPageFunc() {
	var product_name = document.getElementById("productName").value;
	var product_price = document.getElementById("productPrice").value;
	var productFeatures = document.getElementById("productFeatures").value;
	var productSKU = document.getElementById("productSKU").value;
	var productPacking = document.getElementById("productPacking").value;
	var productCond = document.getElementById("productCondition").value;
	var product_description = document.getElementById("productDesc").value;
	var product_image = document.getElementById("productUrl").value;
	var product_avaliability = document.getElementById(
		"productAvaliability"
	).value;
	var vendorName = document.getElementById("vendorName").value;
	var discountPercent = document.getElementById("discountPercent").value;
	var oldPrice = document.getElementById("oldPrice").value;

	productFeatures = productFeatures.split(",");
	var singleProduct = {
		name: product_name,
		vendorName: vendorName,
		img_src: product_image,
		discountPercent: discountPercent,
		lineThroughMRP: oldPrice,
		price: product_price,
		features: productFeatures,
		available: product_avaliability,
		details: {
			SKU: productSKU,
			"Product Description": product_description,
			Packing: productPacking,
			Condition: productCond,
			"Sold By": "Pulse Pharmacy India Pvt. Ltd.",
		},
	};
	localStorage.setItem("viewSingleProduct", JSON.stringify(singleProduct));
	window.location.href = "/ProductPage/productPage.html";
}

// {
// 		name: "Novy Pain Oil",
// 		vendorName: "Pugle Pharma",
// 		img_src: "../IMAGES/PRODUCT_IMAGES/novy_oil.jpg",
// 		discountPercent: 5,
// 		lineThroughMRP: 148,
// 		price: 99,
// 		features: [
// 			"100% Freshly Handpicked Herbs",
// 			"Relief for Arthritis, Knee/Back Pain",
// 			"Headache, Cold, Sinus",
// 			"Ayurveda | No Side Effects",
// 		],
// 		available: true,
// 		details: {
// 			SKU: "PC-41766",
// 			"Product Description": "Novy Pain Oil is manufactured by Fugle Pharma",
// 			Packing: "Bottle",
// 			Condition: "New",
// 			"Sold by": "Pulse Pharmacy India Pvt. Ltd.",
// 		},
// 	},

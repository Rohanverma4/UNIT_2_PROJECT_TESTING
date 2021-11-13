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
						<h2 id="usersP">120</h2>
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
						type="text"
						id="productName"
						placeholder="Enter Product Name"
					/>
				</label>
				<label for="productPrice"
					>Product Price:
					<input
						type="number"
						id="productPrice"
						placeholder="Enter Product Price"
					/>
				</label>
				<label for="productDetails"
					>Product Details:
					<input
						type="text"
						id="productDetails"
						placeholder="Enter product Details"
					/>
				</label>
				<label for="productDesc"
					>Product Description:
					<input
						type="text"
						id="productDesc"
						placeholder="Enter product Description"
					/>
				</label>
				<label for="productUrl"
					>Product Image:
					<input type="text" id="productUrl" placeholder="Enter product Url" />
				</label>

				<label for="productAvaliability"
					>Product Avaliability:
					<select id="productAvaliability">
						<option>-----</option>
						<option value="yes">yes</option>
						<option value="no">no</option>
					</select>
				</label>
				<input id="submitDetails" type="submit" value="Submit Details" />
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
							<th>Date of Joining</th>
							<th>Orders</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Aman</td>
							<td>12221</td>
							<td>3/Nov/2021</td>
							<td>nil</td>
						</tr>
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
	window.location.reload();
});

var myProductsHref = document.getElementById("productsBoard");
myProductsHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myFormTemplate;
	//console.log(1)
	document
		.getElementById("submitDetails")
		.addEventListener("click", function () {
			addProductDetails();
		});
});

var myUserDetailsHref = document.getElementById("allUsers");
myUserDetailsHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myUserDetails;
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

// FUNCTION FOR ADDING PRODUCT
function addProductDetails() {
	var product_name = document.getElementById("productName").value;
	var product_price = document.getElementById("productPrice").value;
	var product_details = document.getElementById("productDetails").value;
	var product_description = document.getElementById("productDesc").value;
	var product_image = document.getElementById("productUrl").value;
	var product_avaliability = document.getElementById(
		"productAvaliability"
	).value;
	// CREATING OBJECT FOR ARRAY..
	var productData = {
		nameOfProduct: product_name,
		price: product_price,
		details: product_details,
		description: product_description,
		image_url: product_image,
		avaliability: product_avaliability,
	};
	// ALERT FOR EMPTY ENTRY
	var count = 0;
	for (var input in productData) {
		if (productData[input] == "") {
			alert(`Please input the product ${input}`);
			break;
		} else {
			count++;
		}
	}
	// CHECKING ENTRY IS FULL OR NOT
	if (count == Object.keys(productData).length) {
		productArr.push(productData);
		localStorage.setItem("productInfo", JSON.stringify(productArr));
	}
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
document.getElementById("productP").innerHTML = lengthProducts;

// ** visitors
var numOfVisitors = JSON.parse(localStorage.getItem("visitors")) || 0;
document.getElementById("visitorsP").innerHTML = numOfVisitors;

// var headDiv = document.getElementById("imgAndName");

// var img = document.createElement("img");
// img.setAttribute("src", admin_image);
// img.setAttribute("alt","profile image");

// var name = document.createElement("h2");
// name.setAttribute("id", "adminName");
// name.textContent = `Hi, ${adminUser_name}`;

// headDiv.append(img,name);

//INVOKING REVIEWS FUNCTION
usersNavViews(feedBackArray);
firstTimeUsers(feedBackArray);
recentUsersReviews(feedBackArray);

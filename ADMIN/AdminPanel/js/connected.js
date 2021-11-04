var myPanelTemplate = `
<h2 id="overviewH2">Website Overview</h2>
			<div id="detailsContainer">
				<div id="numProducts" class="websiteDetails">
					<i class="material-icons">inventory_2</i>
					<div class="webSiteDetailsText">
						<h2 id="productP">120</h2>
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
				<h4>Recent Users</h4>
				<table id="dashBoardTable">
					<thead>
						<tr>
							<th>User Name</th>
							<th>User Number</th>
							<th>Date of Joining</th>
							<th>Order Details</th>
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
	document.getElementById("container").innerHTML = myPanelTemplate;

});



var myProductsHref = document.getElementById("productsBoard");
myProductsHref.addEventListener("click", () => {
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").innerHTML = myFormTemplate;
	//console.log(1)
	document.getElementById("submitDetails").addEventListener("click", function () {
		addProductDetails();
	})
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
			var beforeName = (beforeProfile[beforeProfile.length - 1].nameOfAdmin)
			var beforeImage = (beforeProfile[beforeProfile.length - 1].adminImageUrl)
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
	document.getElementById("submitAdminDetails").addEventListener("click", function () {
		adminDetails();
        location.href = "/ADMIN/AdminPanel/adminPanel.html";
	})
});

var logOutHref = document.getElementById("logout");
logOutHref.addEventListener("click", () => {
	window.localStorage.removeItem("UserDetails")
	window.location.href="http://127.0.0.1:5500/ADMIN/AdminLogin/admin.html";
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
	var product_avaliability = document.getElementById("productAvaliability").value;
	// CREATING OBJECT FOR ARRAY..  
	var productData = {
		nameOfProduct: product_name,
		price: product_price,
		details: product_details,
		description: product_description,
		image_url: product_image,
		avaliability: product_avaliability,
	}
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
	} else {
		// CREATING OBJECT FOR ARRAY..  
		var adminData = {
			nameOfAdmin: adminUser_name,
			passwordOfAdmin: admin_password,
			adminImageUrl: admin_image,
		}
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
			// var headDiv = document.getElementById("imgAndName");

			// var img = document.createElement("img");
			// img.setAttribute("src", admin_image);
			// img.setAttribute("alt","profile image");

			// var name = document.createElement("h2");
			// name.setAttribute("id", "adminName");
			// name.textContent = `Hi, ${adminUser_name}`;

			// headDiv.append(img,name);
			alert ("Updated Successfully!!");
		}

	}
}
if (window.localStorage.getItem("UserDetails") == null) {
	location.href = 'http://127.0.0.1:5500/ADMIN/AdminLogin/admin.html';
}
else {
	var SavedUser = window.localStorage.getItem("UserDetails");
	try {
		SavedUser = JSON.parse(SavedUser);
		if (SavedUser.user != 'admin' || SavedUser.pass != 'admin') {
			location.href = 'http://127.0.0.1:5500/ADMIN/AdminLogin/admin.html';
		}
	} catch (error) {
		location.href = 'http://127.0.0.1:5500/ADMIN/AdminLogin/admin.html';
	}

}














// var headDiv = document.getElementById("imgAndName");

			// var img = document.createElement("img");
			// img.setAttribute("src", admin_image);
			// img.setAttribute("alt","profile image");

			// var name = document.createElement("h2");
			// name.setAttribute("id", "adminName");
			// name.textContent = `Hi, ${adminUser_name}`;

			// headDiv.append(img,name);
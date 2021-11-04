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
					>Product Image Url:
					<input type="text" id="productUrl" placeholder="Enter product Url" />
				</label>

				<label for="productAvaliability"
					>Product Availability:
					<select id="productAvaliability">
						<option>-----</option>
						<option value="yes">yes</option>
						<option value="no">no</option>
					</select>
				</label>
				<input type="submit" value="Submit Details" />
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
					<img src="https://via.placeholder.com/60" alt="profile image" />
					<h2 id="adminName">Hi, Abc</h2>
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
});

var logOutHref = document.getElementById("logout");
logOutHref.addEventListener("click", () => {
	window.location.href = "/ADMIN/AdminLogin/admin.html";
});

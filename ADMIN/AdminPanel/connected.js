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
			`;

var myFormTemplate = `
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
					>Product Details:
					<input type="text" id="productUrl" placeholder="Enter product Url" />
				</label>

				<label for="productAvaliability"
					>Product Details:
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
<table id="userTable">
				<thead>
					<tr>
						<th>Name</th>
						<th>User Id</th>
						<th>Date of Joining</th>
						<th>Orders</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
`;
var myAdminCredForm = `
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
					<input type="text" id="adminImage" placeholder="Update Admin Image" />
				</label>
				<input
					type="submit"
					id="submitAdminDetails"
					value="Update Credentials"
				/>
			</form>
`;
// document.getElementById("container").innerHTML = myAdminCredForm;

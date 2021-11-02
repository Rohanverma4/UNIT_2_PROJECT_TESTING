// COLLAPSE SIDE PANEL TESTING
function openNav() {
	document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

var myNavbar = `
<nav id="navbar">
			<div id="mySidepanel" class="sidepanel">
				<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>

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
				src="https://www.pulseplus.in/content/images/icons/logo-pulse-pharmacy-trans.png"
			/>
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
									<input type="text" placeholder="Enter your city"/>
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

									<input type="submit" id="applyModalLocation" value="Apply" />
								</form>
							</div>
						</div>
					</div>
				</li>
				<li id="loginSignupHref">
					<a href="../LOGIN_PAGE/login.html">Login/Signup</a>
				</li>

				<li>
					<a id="cartAnchor" href="#">
						<span id="cartCounter">0</span>
						<i id="cartIcon" class="material-icons">shopping_bag</i>
					</a>
				</li>
			</ul>
		</nav>
`;
document.getElementById("navbarDiv").innerHTML = myNavbar;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

//FOR SHYAMAL

// location select section

var form = document.getElementById("modalForm");
console.log(form);
form.addEventListener("submit", function (event) {
	event.preventDefault();
	// var locationBox = document.getElementById("myBtn");
	// console.log(locationBox);
	var locationName = document.getElementsByName("location");
	console.log(locationName);
	for (var i = 0; i < locationName.length; i++) {
		if (locationName[i].checked) {
			document.querySelector("#myBtn > span").textContent =
				locationName[i].value;
		}
	}
});
document
	.getElementById("applyModalLocation")
	.addEventListener("click", function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});

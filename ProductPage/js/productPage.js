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
						<a id="cartAnchor" href="#">
							<span id="cartCounter">0</span>
							<i id="cartIcon" class="material-icons">shopping_bag</i>
						</a>
					</li>
				</ul>
			</nav>
`;
document.getElementById("bottomSection").innerHTML = footerSection;
document.getElementById("navBar").innerHTML = myNavbar;
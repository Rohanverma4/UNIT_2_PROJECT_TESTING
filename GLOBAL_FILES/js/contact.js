var contactSection = `
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
						alt="facebook icon" onclick="goTofaceBookHandler()"
					/>

					<img src="https://www.pulseplus.in/content/images/icons/insta.png" onclick="goToInstaHandler()"/>
					<img
						src="https://www.pulseplus.in/content/images/icons/twitter.png" onclick="goToTwitterHandler()"
					/>
				</div>
 `;

var contactDiv = document.getElementById("contactInfo");
contactDiv.innerHTML = contactSection;

function goTofaceBookHandler() {
	window.location.href = "https://www.facebook.com/PulsePlusOfficial";
}
function goToInstaHandler() {
	window.location.href = "https://www.instagram.com/pulsepharmacy/?hl=en";
}
function goToTwitterHandler() {
	window.location.href = "https://twitter.com/pulsepharm";
}

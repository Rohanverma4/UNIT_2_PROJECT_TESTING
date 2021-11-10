// Get the modal
var orderModal = document.getElementById("myOrdersModal");

// Get the button that opens the modal
var orderBtn = document.getElementById("applyCupon");

// Get the <span> element that closes the modal
var orderSpan = document.querySelectorAll(".ordersModal .close")[0];

// When the user clicks the button, open the modal
orderBtn.onclick = function () {
	orderModal.style.display = "block";
};

// When the user clicks on <orderSpan> (x), close the modal
orderSpan.onclick = function () {
	orderModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		orderModal.style.display = "none";
	}
};

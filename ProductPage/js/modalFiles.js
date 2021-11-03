setTimeout(() => {
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
		modal.style.display = "none";
	});
}, 0.1);

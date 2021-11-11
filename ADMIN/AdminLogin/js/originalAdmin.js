// document.querySelector("form").addEventListener("submit", loginAdmin);
// let userDetails = JSON.parse(localStorage.getItem("Users")) || [];
// function loginAdmin(event) {
// 	event.preventDefault();
// 	let enteredUsername = document.getElementById("username").value;
// 	let enteredPassword = document.getElementById("password").value;
// 	// let checkedBox = document.getElementById("saveUserCreds");

// 	// if (checkedBox.check) {
// 	// 	if (userDetails.length < 1) {
// 	// 		userDetails.push([enteredUsername, enteredPassword]);
// 	// 	}
// 	// 	let [username, userpass] = userDetails.pop();
// 	// 	document.getElementById("username").value = username;
// 	// 	document.getElementById("password").value = userpass;
// 	// }
	
// 	if (enteredPassword === "admin" && enteredUsername === "admin") {
// 		details = {"user":enteredUsername,"pass":enteredPassword}
// 		localStorage.setItem("UserDetails",JSON.stringify(details));
// 		window.location.href = "/ADMIN/AdminPanel/adminPanel.html";
// 		// alert("Login Successful");
// 	} else {
// 		alert("This incident will be recorded");
// 		console.log(
// 			`Entered User Name: ${enteredUsername}, Entered User Password: ${enteredPassword}`
// 		);
// 	    var details = (
// 			`Entered User Name: ${enteredUsername}, Entered User Password: ${enteredPassword}`
// 		);
        
// 	}
// }

document.onkeydown = function(e){
	if (event.keyCode == 123){
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
		return false;
	}

	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
		return false;
	}
}

document.addEventListener("contextmenu",function(rightClickDisable){
	rightClickDisable.preventDefault();
});


// Heron Creative 2020

var xhr1;

function submitMessage(email, name, message) {
	
	document.querySelector(".message-send-button").value = "Sending...";

	var params = {"email": email, "name": name, "message": message};

	xhr1 = new XMLHttpRequest();
	xhr1.open("POST", "https://heroncreative.azurewebsites.net/api/messageFormFunction?code=Z7fFYi8DLsfPPn2dBPXB2QcbNTeWW0T5CYU2OY7fkMJ%2FftGhZ%2F6bOg%3D%3D", true);
	xhr1.send(JSON.stringify(params));

	xhr1.onreadystatechange = submitMessageConfirmation;
}

function submitMessageConfirmation(e) {
	if(xhr1.readyState == 4 && xhr1.status == 200) {

		document.querySelector(".message-form").style.opacity = "0.5";
		document.querySelector(".above-message-form").innerHTML = "Thankyou for your message! We will be in contact as soon as possible.";
		document.querySelector(".message-send-button").value = "Success";
	}
	else if (xhr1.status == 400) {
		document.querySelector(".above-message-form").innerHTML = "Please include an email adress, name and message.";
		document.querySelector(".message-send-button").value = "Try Again";
	}
	else if (xhr1.status == 500 || xhr1.status == 404) {
		document.querySelector(".above-message-form").innerHTML = "Sorry, please try again or send us an email.";
		document.querySelector(".message-send-button").value = "Try Again";
	}
}


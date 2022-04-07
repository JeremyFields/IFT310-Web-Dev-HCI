// Week 7 - Final Website
// Author: Jeremy Fields

// setting up function that is called by myForm
function validator() {
	
	// setting variables / getting input from form
	var name = document.forms["myForm"]["name"].value;
	var phone = document.forms["myForm"]["phone"].value;
	var email = document.forms["myForm"]["email"].value;
	
	// setting variables to check if there are errors
	var errorFieldN = 0;
	var errorFieldP = 0;
	var errorFieldE = 0;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	// setting variable that will be returned at the end of the function
	var isValid = true;
	
	// checking if the first name is within normal parameters
	// if error is present, un-hide error message
	if (name.length == 0 || name.length > 25) {
		document.getElementById("divNameError2").style.display = "block";
		errorFieldN = 1;
	}
	// if no error, leave error messages hidden
	else {
		document.getElementById("divNameError2").style.display = "none";
	}
	
	// checking if the phone input matches the reg expression
	// if no error and the phone matches the correct format, leave error message hidden
		if (phone.match(phoneformat)) {
		document.getElementById("divPhoneError2").style.display = "none";
	}
	// if therte is an error, show error message
	else {
		document.getElementById("divPhoneError2").style.display = "block";
		errorFieldP = 1;
	}
	
	// checking if the email input matches the reg expression
	// if no error and the email matches the correct format, leave error message hidden
	if (email.match(mailformat)) {
		document.getElementById("divEmailError2").style.display = "none";
	}
	// if there is an error, show error messages
	else {
		document.getElementById("divEmailError2").style.display = "block";
		errorFieldE = 1;
	}
	
	// if we have errors in any of these input fields, return false
	if (errorFieldN == 1 || errorFieldE == 1 || errorFieldP == 1)	{
		return !isValid;
	}
	// otherwise, return true
	else {
		return isValid;
	}
}



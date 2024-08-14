alert("Welcome to Ghana's Look Alike. Please Fill and Submit The Form For Registration.")
function sendToWhatsapp() {
	let number = "+233245032899";

	let name = document.getElementById('name').value;
	let date = document.getElementById('date').value;
	let gender = document.getElementById('gender').value;
	let contact = document.getElementById('contact').value;
	let location = document.getElementById('location').value;
	let lookAlike = document.getElementById('look-alike').value;
	let NextOfKin = document.getElementById('next-of-kin').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
		+ "Name : " + name + "%0a"
		+ "Date Of Birth : " + date + "%0a"
		+ "Gender : " + gender + "%0a"
		+ "Contact : " + contact + "%0a"
		+ "Location : " + location + "%0a"
		+ "Look-Alike : " + lookAlike + "%0a"
		+ "Next Of Kin : " + NextOfKin + "%0a"
		+ "Message : " + message + "%0a%0a";

	window.open(url, '_blank').focus();
}
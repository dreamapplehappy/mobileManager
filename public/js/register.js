$("#registerForm").submit(function(e){
	e.preventDefault();
	var form = $("#registerForm")[0];
	var username = form.username.value;
	var password = form.password.value;
	var email = form.email.value;
	var phone = form.phone.value;

	user.set("username", username);
	user.set("password", password);
	user.set("email", email);
	user.set("mobilePhoneNumber", phone);

	user.signUp(null, {
		success: function(user) {
			window.location.reload();
		},
		error: function(user, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
});
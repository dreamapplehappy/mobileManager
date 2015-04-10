$(document).ready(function(){
	$("#loginInForm").submit(function(e){
		e.preventDefault();
		var form = $("#loginInForm")[0];
		var username = form.username.value;
		var password = form.password.value;
		AV.User.logIn(username, password, {
			success: function(user) {
				window.location.href='/';
			},
			error: function(user, error) {
				alert(error.code+":("+error.message);
			}
		});
	});
});
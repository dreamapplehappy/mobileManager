if (currentUser) {
	var username = currentUser.attributes.username;
	$('ul.navbar-nav').append("<li><a href='/task'>" +username+ "</a></li>");
	$('ul.navbar-nav').append("<li><a class='logout' href='#'>Logout</a></li>");
} else {
  	$('ul.navbar-nav').append("<li><a href='/login'>Login Please</a></li>");
}

$('.logout').click(function(){
	AV.User.logOut();
	currentUser = AV.User.current();
	window.location.reload();
});
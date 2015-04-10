if (currentUser) {
	$('ul.navbar-nav').append("<li><a href='/task'>User Has Login</a></li>");
	$('ul.navbar-nav').append("<li><a href='/task'>Logout</a></li>");
} else {
  	$('ul.navbar-nav').append("<li><a href='/task'>Login Please</a></li>");
}


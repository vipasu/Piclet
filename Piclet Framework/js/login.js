var __me;

function me(){
	return __me;
}

function loadMe(me){
	__me = me;
	loadFriends();
}

function checkPermissions(me){
	console.log('Checking Permissions..');
	FB.api('/me/permissions', function(response){
		response = response.data[0];
		if ('user_photos' in response && response.user_photos == 1 && 'friends_photos' in response && response.friends_photos == 1 ){
			loginSuccessful();
		}else{
			login();
		}
	});
}

function loginSuccessful(){
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		loadMe(response);
	});
}

function login() {
	console.log('Logging in..');
	FB.login(function(response) {
		if (response.authResponse) {
			// connected
			loginSuccessful();
		} else {
			// cancelled
			alert("You Need To Login With Facebook In Order To Use This Site. Thanks!");
		}
	}, {scope: 'user_photos,friends_photos'});
}

window.fbAsyncInit = function() {
	// init the FB JS SDK
	FB.init({
		appId : '574102942618712', // App ID from the App Dashboard
		channelUrl : '//127.0.0.1:8020/Piclet/channel.html', // Channel File for x-domain communication
		status : true, // check the login status upon init?
		cookie : true, // set sessions cookies to allow your server to access the session?
		xfbml : true // parse XFBML tags on this page?

	});

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			// connected
			checkPermissions();
		} else if (response.status === 'not_authorized') {
			// not_authorized
			login();
		} else {
			// not_logged_in
			login();
		}
	}, {scope: 'user_photos,friends_photos'});

	// Additional initialization code such as adding Event Listeners goes here

};

// Load the SDK's source Asynchronously
// Note that the debug version is being actively developed and might
// contain some type checks that are overly strict.
// Please report such bugs using the bugs tool.
( function(d, debug) {
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all" + ( debug ? "/debug" : "") + ".js";
		ref.parentNode.insertBefore(js, ref);
	}(document, /*debug*/false));
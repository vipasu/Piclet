/**
 * @author Charles
 * Gets photos (and their comments, likes, tags) from user's Facebook
 * and puts them into a file (array?) not sure about that yet.
 */


//Allows access to friends photos and albums
<fb:login-button scope="user_photos,friends_photos,"
                onlogin="getAlbums()">

             
// Get your friend's albums, string friendID comes from the search. Can I set friendID = 'me' as default somehow?
window.getPhotos = function(friendID) {
	var photoURL = '/'.concat(friendID.concat('/photos'));
	// photoURL = '/*friendID*/photos'
  FB.api(photoURL, function(response) {
    Log.info('Photos', response);
    var ul = document.getElementById('photos');
    for (var i=0, l=response.data.length; i<l; i++) {
      var
        photo = response.data[i],
        li = document.createElement('li'),
        a = document.createElement('a');
      a.innerHTML = photo.name;
      a.href = photo.link;
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
};


/* Original from JavaScript Test Console

<fb:login-button scope="user_photos,friends_photos,user_photo_video_tags,friends_photo_video_tags"
                 onlogin="getAlbums()">
  Grant Permissions to Allow access to Photos and Albums
</fb:login-button>
<ul id="albums"></ul>

<script>
window.getAlbums = function() {
  FB.api('/me/albums', function(resp) {
    Log.info('Albums', resp);
    var ul = document.getElementById('albums');
    for (var i=0, l=resp.data.length; i<l; i++) {
      var
        album = resp.data[i],
        li = document.createElement('li'),
        a = document.createElement('a');
      a.innerHTML = album.name;
      a.href = album.link;
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
};
</script>
*/

numLikes = function(photo) {
	
};




function login() {
	FB.login(function(response) {
		if (response.authResponse) {
			// connected
			alert("Connected.")
			testAPI();
		} else {
			// cancelled
			alert("Cancelled.")
		}
	});
}

function testAPI() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
	});
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
			alert("Connected.");
			testAPI();
		} else if (response.status === 'not_authorized') {
			// not_authorized
			alert("Not Authorized.");
			login();
		} else {
			// not_logged_in
			alert("Not Logged In.");
			login();
		}
	});

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
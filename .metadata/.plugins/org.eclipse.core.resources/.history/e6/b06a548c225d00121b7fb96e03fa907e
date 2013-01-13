function loadFriends() {
	friends = [];
	FB.api('/me/friends', function(response){
		for (var i = 0; i < response.data.length; i++){
			friends[i] = response.data[i].name;
		}
	});
	return friends;
}

function setFriends(friends){
	$('#picsearch').typeahead({ source : friends});	
}
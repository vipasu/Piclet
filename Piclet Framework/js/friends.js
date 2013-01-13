// Loads friend list from Facebook
// Includes the person as a friend of themselves
function loadFriends() {
	
	FB.api('/me/friends', function(response){
		
		addFriend(me().name, me().id);
		
		for (var i = 0; i < response.data.length; i++){	
			addFriend(response.data[i].name, response.data[i].id);
		}
		
		setTypeahead();
		
	});

}

var __friendData = {};

function addFriend(name, id){
	__friendData[name] = id;
}

function getFriends(){
	return __friendData;	
}

function setTypeahead(){
	var friendData = getFriends();
	var friends    = [];
	var i          = 0;

	for (friend in friendData){
		friends[i] = friend;
		i++;
	}
	
	$('#picsearch').typeahead({ source : friends});	
	
}
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

function getFriendNames(){
	var i          = 0;
	var friends    = [];
	
	for (friend in getFriends()){
		friends[i] = friend;
		i++;
	}
	
	return friends;
}

function setTypeahead(){

	$('#picsearch').typeahead({ source : getFriendNames()});	
	
}
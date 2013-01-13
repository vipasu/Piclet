// Loads friend list from Facebook
// Includes the person as a friend of themselves
function loadFriends() {
	
	FB.api('/me/friends', function(response){
		
		addFriend(me().name, me().id);
		
		for (var i = 0; i < response.data.length; i++){	
			addFriend(response.data[i].name, response.data[i].id);
		}
		
		setTypeahead();
		loadPhotos(me().id);
	});

}

var __friendData = {};
var __idData     = {};

function addFriend(name, id){
	__friendData[name] = id;
	__idData[id]       = name;
}


function getFriendNames(){
	var i          = 0;
	var friends    = [];
	
	for (friend in __friendData){
		friends[i] = friend;
		i++;
	}
	
	return friends;
}

function getFriendIds(){
	var i          = 0;
	var friends    = [];
	
	for (friend in __idData){
		friends[i] = friend;
		i++;
	}
	
	return friends;
}

function getFriendName(id){
	if (!(id in __idData)) return -1;
	return __idData[id];
}

function getFriendId(name){
	if (!(name in __friendData)) return -1;
	return __friendData[name];
}

function setTypeahead(){

	$('#picsearch').typeahead({ source : getFriendNames()});	
	
}

function profilePicURL(id){
    var url ="https://graph.facebook.com/";
    url += id;
    url += "/picture?type=square";
    return url;
}

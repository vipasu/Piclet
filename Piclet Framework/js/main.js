function printUser(){
	var name = $("#picsearch").val();
	//add the people
	//clear the field
	$('#picsearch').val("");
	var indexInAllFriends = $.inArray(name, getFriendNames());
	var indexInSearchedFriends = $.inArray(name, friendsToSearch);
	
	if(indexInAllFriends != -1 && indexInSearchedFriends == -1){
		var id = getFriendId(name);
		var lihtml = "<li onclick= \"callRemove(this.id)\" class = \"removable\" id=\"" + id + "\">"+ name + "</li>";
		$('#list').append(lihtml);
		friendsToSearch.push(name);
		getPhotos(friendsToSearch);
	}
}

function callRemove(id){
	var friendName = getFriendName(id);
	$("#" + id).remove();	
}

function printArray(){
	for(var s in friendsToSearch){
		$('#tosearch').append(friendsToSearch[i] +"<br>");
	}
}

//to do on submit of the form
$('#idform').submit(function () {
 	printUser();
	 return false;
});

var friendsToSearch = [];
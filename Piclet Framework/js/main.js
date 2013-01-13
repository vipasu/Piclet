
function printUser()
{
	var name = $("#picsearch").val();
	//add the people
	//clear the field
	$('#picsearch').val("");
	var indexInAllFriends = $.inArray(name, getFriendNames());
	var indexInSearchedFriends = $.inArray(name, friendsToSearch);
	
	//$('#tosearch').append(index);
	if(indexInAllFriends != -1 && indexInSearchedFriends == -1){
		$('#tosearch').append(name +"<br>");
		friendsToSearch.push(name);
	}
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


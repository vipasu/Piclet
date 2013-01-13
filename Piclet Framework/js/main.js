
function printUser()
{
	var name = $("#picsearch").val();
	//add the people
	//clear the field
	$('#picsearch').val("");
	var indexInAllFriends = $.inArray(name, getFriendNames());
	var indexInSearchedFriends = $.inArray(name, friendsToSearch);
	
	if(indexInAllFriends != -1 && indexInSearchedFriends == -1){
		var lihtml = "<li onclick= \"callRemove(this.id)\" class = \"removable\" id=\"" + name + "\">"+ name + "</li>";
		$('#list').append(lihtml);
		friendsToSearch.push(name);
	}
}

function callRemove(id){
	var name = '#' + id;
	alert(name);
	$(".removable").remove();	
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


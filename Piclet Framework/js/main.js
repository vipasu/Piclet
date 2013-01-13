
function printUser()
{
	var name = $("#picsearch").val();
	//add the people
	//clear the field
	$('#picsearch').val("");
	var index = $.inArray(name, getFriendNames());
	//$('#tosearch').append(index);
	if(index != -1){
		$('#tosearch').append(name +"<br>");
	}
	friendsToSearch.push(name);
//	printArray();
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


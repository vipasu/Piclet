function displayUserNavBar(){
	var name = $("#picsearch").val();
	//add the people
	//clear the field
	$('#picsearch').val("");
	var indexInAllFriends = $.inArray(name, getFriendNames());
	var indexInSearchedFriends = $.inArray(name, friendsToSearch);
	
	if(indexInAllFriends != -1 && indexInSearchedFriends == -1){
		var id = getFriendId(name);
		var url = profilePicURL(id);
		var lihtml = '<li onclick= "callRemoveNavBar(this.id)"  id="' + id + '" class="media" style= "cursor: pointer;"><a class="pull-left" href="#"><img class="media-object" data-src="holder.js/64x64" src="' + url + '" alt="64x64"></a><div class="media-body"><h4 class="media-heading">' + name + '</h4></div></li>';
		//console.log(lihtml);
		$('#list-prof').append(lihtml);
		friendsToSearch.push(name);
		$(".photos").remove();
		getPhotos(friendsToSearch);
	}
	
}
	
function callRemoveNavBar(id){
	$(".photos").remove();
	var friendName = getFriendName(id);
	$("#" + id).remove();
	for(var i=0; i<friendsToSearch.length; i++){
		if(friendsToSearch[i]==friendName){
			friendsToSearch.splice(i, 1);
		}
	}
	getPhotos(friendsToSearch);	
}

function displayPhotos(photoLinkArray){
	$(".photos").remove();
	console.log("Number of photos received:" + photoLinkArray.length);
	$("#container").width(960 * photoLinkArray.length);
	for (var i=0; i < photoLinkArray.length; i++) {
      var url = photoLinkArray[i];
      var lihtml ='<li class = "photos" ><img id="__image' + i + '" src="' + url + '" alt="" style= "max-height:500px" border="0" /></li>';
	  $('#photoList').append(lihtml);
	  //$("#container").width($("#container").width() + document.getElementById("__image"+i).clientWidth + 100);
	}
	if ($("#container").width() < window.Width){
		$("#container").width(window.Width);
	}
}

function printArray(){
	for(var s in friendsToSearch){
		$('#tosearch').append(friendsToSearch[i] +"<br>");
	}
}

//to do on submit of the form
$('#idform').submit(function () {
 	displayUserNavBar();
	 return false;
});

var friendsToSearch = [];
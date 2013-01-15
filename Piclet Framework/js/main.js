/**
 * Main functions that interact with the display to add and remove users and photos.
 */

function displayUserNavBar() {
	var name = $("#picsearch").val();
	//Clear the field
	$('#picsearch').val("");

	var indexInAllFriends = $.inArray(name, getFriendNames());
	var indexInSearchedFriends = $.inArray(name, friendsToSearch);

	//Add the people
	if (indexInAllFriends != -1 && indexInSearchedFriends == -1) {
		var id = getFriendId(name);
		var url = profilePicURL(id);
		var lihtml = '<li onclick= "callRemoveNavBar(this.id)"  id="' + id + '" class="media" style= "cursor: pointer;"><a class="pull-left" href="#"><img class="media-object" data-src="holder.js/64x64" src="' + url + '" alt="64x64"></a><div class="media-body"><h4 class="media-heading">' + name + '</h4></div></li>';
		$('#list-prof').append(lihtml);
		friendsToSearch.push(name);
		$("#containercontent").css("display", "none");
		$('#list-prof').css("visibility", "visible");
		$("#list").css("display", "inline");
		getPhotos(friendsToSearch);

	}
}

function displayTitle() {
	$("#containercontent").css("display", "inline");
}

function callRemoveNavBar(id) {
	var friendName = getFriendName(id);
	$("#" + id).remove();
	for (var i = 0; i < friendsToSearch.length; i++) {
		if (friendsToSearch[i] == friendName) {
			friendsToSearch.splice(i, 1);
		}
	}
	getPhotos(friendsToSearch);
	if (friendsToSearch.length == 0) {
		$("#list").css("display", "none");
		$('#list-prof').css("visibility", "none");
		$("#descriptions").css("display", "inline");

	}

}

function setWindowSize() {
	if ($("#container").width() < $(window).width() - 400) {
		$("#container").width($(window).width() - 400);
	}
	if ($("#container").width() < 900) {
		$("#container").width(900);
	}
}

function displayPhotos(photoLinkArray) {
	$(".photos").remove();
	console.log("Number of photos received:" + photoLinkArray.length);
	$("#container").width(960 * photoLinkArray.length);
	for (var i = 0; i < photoLinkArray.length; i++) {
		var url = photoLinkArray[i];
		var lihtml = '<li class = "photos" ><img class= "images" id="__image' + i + '" src="' + url + '" alt="" style= "min-height: 500px; max-height:500px" border="0" /></li>';
		$('#photoList').append(lihtml);

	}
	setWindowSize();
	if (photoLinkArray.length == 0) {
		displayTitle();
	}

	removeWheel();
}

//to do on submit of the form
$('#idform').submit(function() {
	displayUserNavBar();
	return false;
});

var friendsToSearch = [];

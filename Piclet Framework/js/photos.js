/**
 * Gets photos (and their comments, likes, tags) from user's Facebook.
 */

var photoData = {};
photoData.users = {};
var pq;
var __countdown = 0;

function extractSrc(photoObjects) {
	var src = [];
	for (index in photoObjects) {
		src[src.length] = photoObjects[index].src_big;
	}
	return src;
}

// Loads friends' photos
function loadPhotos(id, isLast) {

	console.log("Loading Photos..");
	if ( id in photoData.users && photoData.users[id].length > 0) {
		console.log("User " + getFriendName(id) + " Already Loaded.");
		enqueueArray(photoData.users[id], pq);
		__countdown--;
		if (__countdown == 0) {
			display();
		}
		return;
	}
	//FB.api({method: 'fql.query', query: 'SELECT object_id,src_big,like_info,comment_info FROM photo WHERE object_id IN (SELECT object_id FROM photo_tag WHERE subject = ' + id + ') OR owner = '+ id}, function(response) {
	FB.api('/fql', {
		q : {
			"query1" : "SELECT object_id,src_big,like_info,comment_info FROM photo WHERE (object_id IN (SELECT object_id FROM photo_tag WHERE subject = " + id + ")) OR (owner = " + id + ") AND like_info.like_count > 0 LIMIT 3000",
			"query2" : "SELECT object_id,text FROM photo_tag WHERE object_id IN (SELECT object_id FROM #query1)"
		}
	}, function(response) {
		if ("data" in response) {
			photos = response.data[0].fql_result_set;
			//comments = response.data[1].fql_result_set;
			tags = response.data[1].fql_result_set;

			photoArray = {};
			photoArray.data = {};

			for (var i = 0; i < photos.length; i++) {
				photoObject = photos[i];
				photoObject.tags = [];
				photoObject.comments = [];
				photoObject.comment_count = photoObject.comment_info.comment_count;
				photoObject.like_count = photoObject.like_info.like_count;
				delete photoObject.comment_info;
				delete photoObject.like_info;
				photoArray.data[photoObject.object_id] = photoObject;
			}

			for (var i = 0; i < tags.length; i++) {
				var tagArr = photoArray.data[tags[i].object_id].tags;
				tagArr[tagArr.length] = tags[i].text;
			}
			/*
			for (var i = 0; i < comments.length; i++){
			var commentOb = photoArray.data[comments[i].object_id].comments;
			commentOb[commentOb.length] = comments[i].text;
			}*/

			//photoArray.comments_length = comments.length;
			photoArray.length = photos.length;
			photoArray.userId = id;

			enqueueArray(photoArray, pq);
			photoData.users[id] = photoArray;
			console.log("Loaded " + photoArray.length + " Photos For " + getFriendName(photoArray.userId) + ".");
		}

		__countdown--;

		if (__countdown == 0) {
			display();
		}

	});
};

function display() {
	var important = dequeueImportant(pq);
	console.log("Sorted Photos By Importance.");
	var important_src = extractSrc(important);
	console.log("Extracted Links.");
	displayPhotos(important_src);
}

function getPhotos(userList) {

	if (__countdown != 0) {
		setTimeout(function() {
			getPhotos(userList)
		}, 3000);
		return;
	}

	console.log("Getting New Photos");
	loadWheel();
	pq = new buckets.PriorityQueue(compareImportance);
	__countdown = userList.length;
	for (var i = 0; i < userList.length; i++) {
		loadPhotos(getFriendId(userList[i]));
	}

	if (userList.length == 0) {
		display();
	}

}

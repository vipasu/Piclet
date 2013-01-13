function getLikeCount(photoObject){
    var count = 0;
    if (photoObject.comments.data != undefined)
    for (like in photoObject.likes.data){
        count++;
    }
    return count;
}

function getCommentCount(photoObject){
    var count = 0;
    if (photoObject.comments.data!= undefined)
    for (comment in photoObject.comments.data){
        count++;
    }
    return count;
}

function ParseComment(comment){
    var bonus = 0;
    var positive = ["GOOD", "GREAT", "BEAUTIFUL", "HANDSOME", "SWEET", "PRETTY", ":)"]
    //var negative = ["UGLY", "BAD", "SAD", "TERRIBLE"]
    for (phrase in positive){
        if (comment.message.toUpperCase().find(phrase)!=-1)
            bonus += 1;
    }
    /*for (phrase in negative){
        if (message.find(phrase)!=-1){
            bonus -= 1;
        }
    }*/
    bonus *= (1 + Math.sqrt(comment.like_count))
    return bonus;
}


function importanceFactor(photoObject){
    var weight = 0,
    	commentCount = getCommentCount(photoObject),
    	likeCount = getLikeCount(photoObject);
    weight += LikeCount + CommentCount;
	if (commentCount != 0){
    	for (comment in photoObject.comments.data){
        	weight += ParseComment(comment);
    	}
   	}
    return weight;
}

/**
 * Assigns each photo an importance value.
 */


function getLikeCount(photoObject){
    return photoObject.like_count;
}

function getCommentCount(photoObject){
   return photoObject.comment_count;
}

function parseComment(comment){
    var bonus = 0;
    var positive = ["GOOD", "GREAT", "BEAUTIFUL", "HANDSOME", "SWEET", "PRETTY", ":)", "PERFECT", "LOVE"]
    //var negative = ["UGLY", "BAD", "SAD", "TERRIBLE"]
    for (phrase in positive){
        if (comment.toUpperCase().search(phrase)!=-1)
            bonus += 1;
    }
    /*for (phrase in negative){
        if (message.find(phrase)!=-1){
            bonus -= 1;
        }
    }*/
    //bonus *= (1.0 + Math.sqrt(comment.likes))
    return bonus;
}

function importanceFactor(photoObject){
    var weight = 0;
    weight += (2 * getLikeCount(photoObject) + getCommentCount(photoObject));
    /*for (index in photoObject.comments){
        weight += parseComment(photoObject.comments[index]);
    }*/
    if (photoObject.tags.length > 10)
        return weight/10.0;
    else if (photoObject.tags.length > 5)
        return weight/5.0;
    else
        return weight;
}

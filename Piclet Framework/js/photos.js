/**
 * @author Charles
 * Gets photos (and their comments, likes, tags) from user's Facebook
 * and puts them into a file (array?) not sure about that yet.
 */


//Allows access to friends photos and albums
             
// Get your friend's albums, string friendID comes from the search. Can I set friendID = 'me' as default somehow?
var photoArray = [];
window.loadPhotos = function(id) {
	var end = 0;
  	FB.api({method: 'fql.query', query: 'SELECT object_id,src_big FROM photo WHERE object_id IN (SELECT object_id FROM photo_tag WHERE subject = ' + id + ') OR owner = '+ id}, function(response) {
    
    for (var i=0; i < response.length; i++) {
      photoArray[i] = response[i];
      end++;
    }
	alert("Found " + photoArray.length + " Photos.");
  });

};
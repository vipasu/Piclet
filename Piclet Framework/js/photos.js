/**
 * @author Charles
 * Gets photos (and their comments, likes, tags) from user's Facebook
 * and puts them into a file (array?) not sure about that yet.
 */


//Allows access to friends photos and albums
             
// Get your friend's albums, string friendID comes from the search. Can I set friendID = 'me' as default somehow?
window.getPhotos = function() {
  FB.api('/me/photos?limit=0', function(response) {
    console.log('Photos', response);
    var ul = document.getElementById('fb-root');
    var photoArray = new Array();
    for (var i=0; i < response.data.length; i++) {
      var
        photo = response.data[i],
        li = document.createElement('li'),
        a = document.createElement('a');
      photoArray[i] = photo;
      a.innerHTML = photo.id;
      a.href = photo.link;
      li.appendChild(a);
      ul.appendChild(li);
    }
    return photoArray;
  });
};


/*
 *      <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
 *       <script src="js/photos.js"></script>
 *       <script src="js/friends.js"></script>
 *		<script src="js/login.js"></script>
 */
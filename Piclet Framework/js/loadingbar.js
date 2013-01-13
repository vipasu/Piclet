/**
 * Creates a wheel icon that indicates the page is loading.
 */


function loadWheel() {
     var img = '<img id="loader" src="ajax-loader.gif"/>';
     $("#searchrow").append(img);
}

function removeWheel(){
	$("#loader").remove();
}

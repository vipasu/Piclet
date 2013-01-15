/**
 * Creates a wheel icon that indicates photos are being loaded.
 */

function loadWheel() {
     var img = '<img id="loader" src="ajax-loader.gif"/>';
     $("#searchrow").append(img);
}

function removeWheel(){
	$("#loader").remove();
}

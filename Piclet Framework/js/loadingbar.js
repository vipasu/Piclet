/**
 * Creates a wheel icon that indicates the page is loading.
 */


function loadWheel() {
     var img = '<img id="loader" src="ajax-loader.gif" style= "max-height: 20px; margin-left: 10px"/>';
     $("#searchrow").append(img);
}

function removeWheel(){
	$("#loader").remove();
}

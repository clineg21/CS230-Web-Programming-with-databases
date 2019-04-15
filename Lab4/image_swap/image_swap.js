$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	$("#image_list a").click(function(evt) {
		$("#caption").fadeOut(1000);
		//start callback function
		$("#image").fadeOut(1000, function() {
			
			$("#image").attr("src", imageURL).fadeIn(1000);
			
			$("#caption").text(caption).fadeIn(1000);
		});

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	


	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready

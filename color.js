(function () {
	var height = window.innerHeight;
	var width = window.innerWidth;
	var heightDiv = Math.floor(height / 255);
	var widthDiv =  Math.floor(width / 255);
	var sumDiv = Math.floor((height + width) / 255)
	
	$("body").mousemove(function(event) {
		// debugger
		console.log(event.clientX + " " + sumDiv + " " + (heightDiv + widthDiv))
		var rgbVal = Math.floor((event.clientX / widthDiv)) + "," + 
								 Math.floor((event.clientY / heightDiv)) + "," + 
								 Math.floor(((event.clientX + event.clientY) / sumDiv));
		console.log(rgbVal);
		$("body").css("background-color", "rgb(" + rgbVal + ")");
	});

   
})();


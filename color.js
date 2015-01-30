(function () {
	var height = window.innerHeight;
	var width = window.innerWidth;
	var heightDiv = Math.floor(height / 255);
	var widthDiv =  Math.floor(width / 255);
	var sumDiv = Math.floor((height + width) / 255)
	$("body").mousemove(function(event) {
		// debugger
		console.log(event.clientX + " " + sumDiv + " " + (heightDiv + widthDiv))
		$("body").css("background-color", "rgb(" + 
			(event.clientX / widthDiv) + "," + 
			(event.clientY / heightDiv) + "," + 
			((event.clientX + event.clientY) / sumDiv) + ")");
	})

   
})();


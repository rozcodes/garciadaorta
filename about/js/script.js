
 $(document).ready(function() {

//INCREASE IMAGE SIZE
	$('#titlepage').click(function(zoom) {
		$("#titlepage").toggleClass('expand');
		$("#titlepage").toggleClass('small');
		$(".pg").toggleClass('p');
		$(".pg").toggleClass('widep');
		$("h6").toggleClass("disappear");
		$("h3").toggleClass("disappear");

		});

//SHOW ADDITIONAL READING
	$("#show").click(function(show) {
		$(".showp").toggleClass("disappear");
		console.log("disappear")
	});
});
 



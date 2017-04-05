// CHANGE COLOR TO YELLOW
$(document).ready(function(yellow) {

	$(".tab").click(function(yellow) {
		$(".tab").removeClass("active");
		$(this).addClass("active");

	});
});


// DISPLAY CONTENT
function hide1() {
	$(".other1descr").css("display", "none")
}
function hide2() {
	$(".other2descr").css("display", "none")
}
function hide3() {
	$(".other3descr").css("display", "none")
}
function hide4() {
	$(".other4descr").css("display", "none")
}

function show() {
	$(".diseasebox").css("display", "inline-block");
	$(".disease-panel").css("display", "inline-block");

}

$("#tab2").click(function(dysentery) {
 		show();
 		hide2();
 	
});

$("#tab3").click(function(syphilis) {
 		show();
		hide3();
});

$("#tab4").click(function(womens) {
 		show();
 		hide4();
});

$("#tab1").click(function(cholera) {
 		show();
 		hide1();
});


 
 
// swap question for result
$('.btn_question').on('click', showResult)

function showResult() {
	$('.show-question').css("display", "none");
	$('.show-result').css("display", "inline");
}

// toggle citation
$('.info').on('click', function(event) {
	event.preventDefault();
	$('.citation').slideToggle(200)
});
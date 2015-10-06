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



// test of using window size

var windowHeight = $(window).height();
$('#').css('height', windowHeight);



// share plugin

new ShareButton({
  networks: {
    facebook: {
      app_id: "abc123"
    }
  }
});
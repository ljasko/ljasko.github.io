// SWAP QUESTION FOR RESULT
$('.btn_question').on('click', showResult)

function showResult() {
	$('.show-question').css("display", "none");
	$('.show-result').css("display", "inline");
}

// TOGGLE CITATION
$('.info').on('click', function(event) {
	event.preventDefault();
	$('.citation').slideToggle(200)
});



// // SHARE PLUGIN
// new ShareButton({
//   networks: {
//     facebook: {
//       app_id: "abc123"
//     }
//   }
// });


// // TEST OF USING WINDOW SIZE
// var windowHeight = $(window).height();
// $('#').css('height', windowHeight);
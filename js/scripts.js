// CONTENT
var pplData = [
  {
    name: 'Marco Rubio',
    party: 'Republican',
    issue: 'Education',
    quote: '“The public school system for millions of disadvantaged American children is a disaster. Many of these schools deny opportunity to those who need it most. We need to allow charter schools and other innovative schools to flourish."',
    citation: '<a href="http://www.forbes.com/sites/maureensullivan/2015/04/13/marco-rubio-on-education-5-things-the-presidential-candidate-wants-you-to-know/" target="_blank"><em>source</em></a>: <em>Sullivan, Maureen</em>. "Marco Rubio On Education: 5 Things The Presidential Candidate Wants You To Know." <em>Forbes</em>. Web. Dec. 2012.>'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Immigration',
    quote: '“I am adamantly against illegal immigrants. Certainly we’ve got to do more at our borders. People have to stop employing illegal immigrants.”',
    citation: '<a href="http://dailycaller.com/2015/05/07/unearthed-audio-hillary-said-shes-adamantly-against-illegal-immigrants-audio/" target="_blank"><em>source</em></a>: Ross, Chuck. <em>The John Gambling Show</em>. Feb. 2003. <em>The Daily Caller</em>. Web. 07 May 2015.'
  },
  {
    name: "Carly Fiorina",
    party: 'Republican',
    issue: 'Economy',
    quote: '"I prefer a tax code that\'s three pages long, not 70,000 pages long. I prefer a tax code that anybody can understand and can fill out without having to hire an accountant or a lawyer to do so."',
    citation: '<a href="http://www.foxnews.com/transcript/2015/06/26/carly-fiorina-explains-why-not-afraid-to-take-on-hillary-clinton-on-hannity/" target="_blank"><em>source</em></a>: <em>Hannity</em>. "Exclusive: One-on-one with Presidential Candidate Carly Fiorina." <em>Fox News</em>. Web. 25 June 2015.>'
  },
  {
    name: 'Rand Paul',
    party: 'Republican',
    issue: 'Economy',
    quote: '“If you were to cut hundreds of billions of dollars in taxes, that money\'s left in communities...We\'re always trying to tax [poor communities] and then give them back a little bit to help them...We ought to leave the money in their communities because the money left will be left for productive people... It doesn\'t work to send it to Washington and then send it back.”',
    citation: '<a href="http://www.foxnews.com/transcript/2015/04/08/exclusive-one-on-one-with-presidential-candidate-rand-paul/" target="_blank"><em>source</em></a>: <em>Hannity</em>. "Exclusive: One-on-one with Presidential Candidate Rand Paul." <em>Fox News</em>. Web. 08 Apr. 2015.>'
  },
  {
    name: 'Bernie Sanders',
    party: 'Democrat',
    issue: 'Ideology',
    quote: '"If we are going to transform America, we need a political revolution in this country."',
    citation: '<a href="https://www.youtube.com/watch?v=3we0_pSujjM" target="_blank"><em>source</em></a>: Speech. <em>Iowa State Fair</em>. Web. 15 Aug. 2015.>'
  },
  {
    name: 'Donald Trump',
    party: 'Republican',
    issue: 'Immigration',
    quote: '"This has to do with stopping illegal immigration. The southern border is totally porous. If you\'re going to have a country, you can\'t have that. It has to be legal immigration, not illegal immigration."',
    citation: '<a href="http://theconservativetreehouse.com/2015/09/02/donald-trump-interview-with-don-lemon-september-1st-cnn/" target="_blank"><em>source</em></a>: <em>Don Lemon</em>. "Exclusive: One-on-One with Presidential Candidate Donald Trump" <em>CNN</em>. Web. 1 Sep. 2015.>'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Economy',
    quote: '"Don\'t let anybody tell you that it\'s corporations and businesses that create jobs."',
    citation: '<a href="https://www.youtube.com/watch?v=PyUoCiWsTfI" target="_blank"><em>source</em></a>: Speech. Democratic rally in Massachusetts. Web. 24 Oct. 2014.>'
  }
];
var index = 0;

// SWAP QUESTION AND RESULT
$('.btn_question').on('click', showResult)

function showResult() {
  $('.show-question').css("display", "none");
  $('.show-result').css("display", "inline");
}

function hideResult() {
  $('.show-result').css("display", "none");
  $('.show-question').css("display", "inline");
}

// UPDATE CONTENT
$('.btn_next').on('click', function(){
  index++;
  hideResult();
  updatePage();
  console.log('next clicked', index)
  console.log('candName: ', candName)
});

function clearFields(){
  $('#candidate-citation, #candidate-name, #candidate-party, #candidate-issue, .candidate-quote, #candidate-citation').html('');
  console.log('clearFields()')
}

// TOGGLE CITATION
$('.info').on('click', function(event) {
	event.preventDefault();
	$('.citation').slideToggle(200)
});

function updatePage(){
  console.log("updatePage")
  clearFields()

  var candName = pplData[index].name;
  var candParty = pplData[index].party;
  var candIssue = pplData[index].issue;
  var candQuote = pplData[index].quote;
  var candCitation = pplData[index].citation;
  var candImage = candName.replace(/\s+/g, '-').toLowerCase();
  $('main.inner_result').css('background-image', 'url("images/bios/bio-' + candImage + '.jpg")');

  $('#candidate-name').html(candName);
  $('#candidate-party').html(candParty);
  $('#candidate-issue').html(candIssue);
  $('.candidate-quote').html(candQuote);
  $('#candidate-citation').html(candCitation);
}

updatePage();

function nextButton(){
  index++;
  updatePage();
}

function prevButton() {
  index--;
  updatePage();
}

// FORM
$('form').validate();

$('input[name="candidate"]').autocomplete({
  minLength: 1,
    source: [
      "Ben Carson",
      "Chris Christie",
      "Hillary Clinton",
      "Ted Cruz",
      "Carly Fiorina",  
      "Lindsey Graham",
      "Mike Huckabee",
      "Bobby Jindal",
      "John Kasich",
      "Martin O'Malley",
      "George Pataki",
      "Rand Paul",
      "Marco Rubio",
      "Bernie Sanders",
      "Rick Santorum",
      "Donald Trump",
      "Scott Walker",
      "Jim Webb"
  ]
});

$('.submit').on('click', thankYou);

function thankYou() {
  event.preventDefault();
  $("form").trigger('reset');
  $('#thanks').css('display', 'inline');
};
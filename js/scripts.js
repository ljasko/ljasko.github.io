// CONTENT
var pplData = [
  {
    name: 'John Kasich',
    party: 'Republican',
    issue: 'Immigration',
    quote: '"We can\'t ship 11 million people out of this country. Children would be terrified, and it will not work."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Ben Carson',
    party: 'Republican',
    issue: 'Economy',
    quote: '"Everybody should pay the same proportion of what they make. You make $10 billion, you pay a billion. You make $10, you pay one. You get same rights and privileges."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Economy',
    quote: '"I know we can afford it because we\'re gonna make the wealthy pay for it."',
    citation: '<a href="http://nymag.com/thecut/2015/10/debate-democrats-stop-freaking-out.html#" target="_blank"><em>source</em></a>: <em>Traiser, Rebecca</em>. "It’s Time for Democrats to Stop Freaking Out About 2016." Democratic Debate. <em>CNN</em>. Web. Oct. 2015.'
  },
  {
    name: "Carly Fiorina",
    party: 'Republican',
    issue: 'Healthcare',
    quote: '"Let us ensure that as patients and customers we have the information to shop wisely for our healthcare."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Bernie Sanders',
    party: 'Democrat',
    issue: 'Foreign Policy',
    quote: '"Together, leading the world, this country will rid our planet of this barbarous organization called ISIS."',
    citation: '<a href="http://www.newsday.com/news/nation/democratic-debate-quotes-from-hillary-rodham-clinton-bernie-sanders-martin-o-malley-nov-14-2015-1.11124302" target="_blank"><em>source</em></a>: <em>NewsDay</em>. "Democratic debate: Notable quotes from the candidates, Nov. 14, 2015" <em>CBS News</em>. Web. 14 Nov. 2015.'
  },
  {
    name: 'Rand Paul',
    party: 'Republican',
    issue: 'Foreign Policy',
    quote: '"When you think it\'s going to be a good idea to have a no fly zone over Iraq...be ready to send your sons and daughters to another war in Iraq. I don\'t want to see that happen."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Foreign Policy',
    quote: '"[The Middle East] is an incredibly complicated region of the world. And many of the fights that are going on are not ones that the United States has either started or have a role in."',
    citation: '<a href="http://www.newsday.com/news/nation/democratic-debate-quotes-from-hillary-rodham-clinton-bernie-sanders-martin-o-malley-nov-14-2015-1.11124302" target="_blank"><em>source</em></a>: <em>NewsDay</em>. "Democratic debate: Notable quotes from the candidates, Nov. 14, 2015" <em>CBS News</em>. Web. 14 Nov. 2015.'
  },
  {
    name: 'Ted Cruz',
    party: 'Republican',
    issue: 'Economy',
    quote: '"I have rolled out a bold and simple flat tax: 10 percent for every American, that would produce booming growth and 4.9 million new jobs within a decade."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Jeb Bush',
    party: 'Republican',
    issue: 'Foreign Policy',
    quote: '"If you want to deal with the four million refugees that are leaving Syria because of the devastation there, then we \'ought to create safe zones for them to stay in the region rather than go to Europe."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Donald Trump',
    party: 'Republican',
    issue: 'Foreign Policy',
    quote: '"We can\'t continue to be the policeman of the world. We are $19 trillion dollars [in debt]...We have to start investing in our country.',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/10/well-be-annotating-the-gop-debate-here/" target="_blank"><em>source</em></a>: <em>Washington Post</em>. "Who said what and what it meant: The 4th GOP debate, annotated." <em>FOX Business</em>. Web. 10 Nov. 2015.'
  },
  {
    name: 'Bernie Sanders',
    party: 'Democrat',
    issue: 'Education',
    quote: '"It\'s their time to bail out the middle class, help our kids be able to go to college tuition-free. So we pay for this by demanding that the wealthiest people and the largest corporations...start paying their fair share."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/14/the-cbs-democratic-debate-transcript-with-insight-from-the-fix/" target="_blank"><em>source</em></a>: <em>The Fix</em>. "The CBS Democratic debate transcript, annotated." <em>CBS News</em>. Web. 15 Nov. 2015.'
  },
  {
    name: 'Martin OMalley',
    party: 'Democrat',
    issue: 'Education',
    quote: '"I believe that the goal should be debt-free college."',
    citation: '<a href="https://www.washingtonpost.com/news/the-fix/wp/2015/11/14/the-cbs-democratic-debate-transcript-with-insight-from-the-fix/" target="_blank"><em>source</em></a>: <em>The Fix</em>. "The CBS Democratic debate transcript, annotated." <em>CBS News</em>. Web. 15 Nov. 2015.'
  },
  {
    name: 'Rand Paul',
    party: 'Republican',
    issue: 'Economy',
    quote: '"Services like Uber, Airbnb, and Lyft stimulate our economy and work towards lower prices." ... "We need more innovation, not less."',
    citation: '<a href="https://twitter.com/RandPaul" target="_blank"><em>source</em></a>: <em>Twitter</em>. Web. 13 July 2015.'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Economy',
    quote: '“Many Americans are making extra money renting out a spare room, designing websites, selling products they design themselves at home, or even driving their own car. [...] This on-demand, or so-called ‘gig economy’ is...raising hard questions about workplace protections. I’ll crack down on bosses who exploit employees by misclassifying them as contractors.”',
    citation: '<a href="http://techcrunch.com/2015/07/13/what-will-a-good-job-look-like-in-the-future/#.nqgt0ka:dpIq" target="_blank"><em>source</em></a>: <em>Constine, Josh</em>. "Hillary Clinton Says On-Demand Economy Raises Hard Questions About Workplace Protections" <em>Tech Crunch</em>. Web. 13, July 2015.'
  },
  {
    name: 'Marco Rubio',
    party: 'Republican',
    issue: 'Education',
    quote: '“The public school system for millions of disadvantaged American children is a disaster. Many of these schools deny opportunity to those who need it most. We need to allow charter schools and other innovative schools to flourish."',
    citation: '<a href="http://www.forbes.com/sites/maureensullivan/2015/04/13/marco-rubio-on-education-5-things-the-presidential-candidate-wants-you-to-know/" target="_blank"><em>source</em></a>: <em>Sullivan, Maureen</em>. "Marco Rubio On Education: 5 Things The Presidential Candidate Wants You To Know." <em>Forbes</em>. Web. Dec. 2012.'
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
    citation: '<a href="http://www.foxnews.com/transcript/2015/06/26/carly-fiorina-explains-why-not-afraid-to-take-on-hillary-clinton-on-hannity/" target="_blank"><em>source</em></a>: <em>Hannity</em>. "Exclusive: One-on-one with Presidential Candidate Carly Fiorina." <em>Fox News</em>. Web. 25 June 2015.'
  },
  {
    name: 'Rand Paul',
    party: 'Republican',
    issue: 'Economy',
    quote: '“If you were to cut hundreds of billions of dollars in taxes, that money\'s left in communities...We\'re always trying to tax [poor communities] and then give them back a little bit to help them...We ought to leave the money in their communities because the money left will be left for productive people... It doesn\'t work to send it to Washington and then send it back.”',
    citation: '<a href="http://www.foxnews.com/transcript/2015/04/08/exclusive-one-on-one-with-presidential-candidate-rand-paul/" target="_blank"><em>source</em></a>: <em>Hannity</em>. "Exclusive: One-on-one with Presidential Candidate Rand Paul." <em>Fox News</em>. Web. 08 Apr. 2015.'
  },
  {
    name: 'Bernie Sanders',
    party: 'Democrat',
    issue: 'Ideology',
    quote: '"If we are going to transform America, we need a political revolution in this country."',
    citation: '<a href="https://www.youtube.com/watch?v=3we0_pSujjM" target="_blank"><em>source</em></a>: Speech. <em>Iowa State Fair</em>. Web. 15 Aug. 2015.'
  },
  {
    name: 'Donald Trump',
    party: 'Republican',
    issue: 'Immigration',
    quote: '"This has to do with stopping illegal immigration. The southern border is totally porous. If you\'re going to have a country, you can\'t have that. It has to be legal immigration, not illegal immigration."',
    citation: '<a href="http://theconservativetreehouse.com/2015/09/02/donald-trump-interview-with-don-lemon-september-1st-cnn/" target="_blank"><em>source</em></a>: <em>Don Lemon</em>. "Exclusive: One-on-One with Presidential Candidate Donald Trump" <em>CNN</em>. Web. 1 Sep. 2015.'
  },
  {
    name: 'Ben Carson',
    party: 'Republican',
    issue: 'Education',
    quote: '"If you happen to be in an affluent community, there’s a lot more money for the schools, better facilities, everything. All that does is perpetuate the situation. Wouldn’t it make more sense to put the money in a pot and redistribute it throughout the country so that public schools are equal, whether you’re in a poor area or a wealthy area?"',
    citation: '<a href="http://www.politico.com/magazine/story/2014/04/who-is-dr-ben-carson-105875_Page2.html#.VjFABrerRD-" target="_blank"><em>source</em></a>: <em>Hamblim, James</em>. "Who is Dr. Ben Carson?" <em>Politico Magazine</em>. Web. 21 Apr. 2014.'
  },
  {
    name: 'Hillary Clinton',
    party: 'Democrat',
    issue: 'Economy',
    quote: '"Don\'t let anybody tell you that it\'s corporations and businesses that create jobs."',
    citation: '<a href="https://www.youtube.com/watch?v=PyUoCiWsTfI" target="_blank"><em>source</em></a>: Speech. Democratic rally in Massachusetts. Web. 24 Oct. 2014.'
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

// MEET THE CANDIDATES
$('li').hover(function() {
  var textTitle = $(this).data('cand');
  var textHref = $(this).data('href');

  var html = '<div class="popup">';
    html += '<h3>' + textTitle + '</h3>';

  $('.popup').remove();
  $(this).append(html);
});

// FORM
$('form').validate();

$('input[name="candidate"]').autocomplete({
  minLength: 1,
    source: [
      "Ben Carson",
      "Bernie Sanders",
      "Carly Fiorina",
      "Chris Christie",
      "Donald Trump",
      "George Pataki",
      "Hillary Clinton",
      "Jeb Bush",
      "John Kasich",
      "Lindsey Graham",
      "Marco Rubio",
      "Martin O'Malley",
      "Mike Huckabee",
      "Rand Paul",
      "Rick Santorum",
      "Scott Walker",
      "Ted Cruz"
  ]
});

// $('.submit').on('click', thankYou);

// function thankYou() {
//   event.preventDefault();
//   $("form").trigger('reset');
//   $('#thanks').css('display', 'inline');
// };
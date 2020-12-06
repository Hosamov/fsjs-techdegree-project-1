/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Quotes contained in an array of objects
const quotes = [{
    quote: "Every moment is a fresh beginning.",
    source: "T.S. Eliot",
    citation: "www.keepinspiring.me/famous-quotes",
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: "Mark Twain",
    occupation: "Writer/Humorist"
  },
  {
    quote: "Never regret anything that made you smile.",
    source: "Mark Twain",
    occupation: "Writer/humorist"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
    year: "1963",
    occupation: "35th President of the United States"
  },
  {
    quote: "It is hard to fail, but it is worse never to have tried to succeed.",
    source: "Theodore Roosevelt",
    occupation: "26th President of the United States"
  },
  {
    quote: "If you want to be happy, be.",
    source: "Leo Tolstoy"
  },
  {
    quote: "I never knew how to worship until I knew how to love.",
    source: "Henry Ward Beecher"
  },
  {
    quote: "A friend is someone who gives you total freedom to be yourself.",
    source: "Jim Morrison",
    citation: "www.keepinspiring.me/famous-quotes"
  },
  {
    quote: "Life is trying things to see if they work.",
    source: "Ray Bradbury"
  },
  {
    quote: "Success is how high you bounce when you hit bottom.",
    source: "George S. Patton",
    occupation: "General, U.S. Army"
  },
  {
    quote: "Be ready to revise any system, scrap any method, abandon any theory, if the success of the job requires it.",
    source: "Henry Ford",
    citation: "Ford News, p. 2",
    year: "1923"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee",
    citation: "www.keepinspiring.me/famous-quotes",
    occupation: "Martial artist/Actor/Director"
  }
];

//getRandomQuote Function
function getRandomQuote() {
  //Get a random quote
  let getQuote = Math.floor(Math.random() * Math.floor(quotes.length)); //Make a random integer value between 0 and quotes.length using Math.floor()
  return quotes[getQuote]; //return the random number so we can use it in printQuote() to retrieve a new random quote
}

//printQuote Function
function printQuote() {
  let randomQuote = getRandomQuote(); //call getRandomQuote() function to return the random quote needed
  //capture the random quote w/ source in HTML tags for viewing
  let quoteData = `<p class="quote">${randomQuote.quote}</p>
                   <p class="source">${randomQuote.source}`;

  //Verify whether the quote includes a citation
  if (randomQuote.citation) {
    quoteData += `<span class="citation">${randomQuote.citation}</span>`; //concatinate .citation into quoteData variable
  }

  //Verify whether the quote includes a year
  if (randomQuote.year) {
    quoteData += `<span class="year">${randomQuote.year}</span>`; //concatinate .year into quoteData variable
  }

  //Check whether the quote includes an occupation for the quote's source
  if (randomQuote.occupation) {
    quoteData += `, <span class="occupation">${randomQuote.occupation}</span>`; //concatinate .occupation into quoteData variable
  }

  quoteData += "</p>"; //add closing tag for html data

  //Call function getRandombackgroundColor(), send to DOM
  //background color changes upon refresh or button click
  document.body.style.backgroundColor = getRandomBackgroundColor();



  //return new random quote directly to the DOM
  return document.getElementById('quote-box').innerHTML = quoteData;
}

//Get a random background color
function getRandomBackgroundColor() {
  const bgColor = []; //Initialize a new array to hold rgb values

  //Return 3 random numbers between 0 and 256
  for (let i = 0; i < 3; i++) {
    bgColor.push(Math.floor(Math.random() * 255)); //add numbers to array bgColor
  }

  //Convert the 3 numbers in bgColor array to hex using .toString(16) and concatenate using .join()
  //Note: learned converting to hex (.toString(16) specifically) from stackoverflow.com
  let color = bgColor.map(hexColor => hexColor.toString(16)).join('');

  //If hex val is less than 6, add a 0 on the end to ensure virtually no chance of color staying the same
  if(color.length < 6) color += "0";

  return `#${color}`;
}

//Using setInterval, call printQuote() to refresh quote every 10 seconds
setInterval(function(){printQuote();}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

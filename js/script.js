/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [];
quotes = [
  { quote: 'I am the best',
    source: 'Nicki Minaj',
    citation: 'her music',
    year: 2010
  },

  { quote: 'I want my mama',
    source: 'Omar Alsharif',
    year: 'Every Day'
  },

  { quote: 'I just want to build something cool',
    source: 'Safiyah Ismail'
  },

  { quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
    source: 'Steve Jobs'
  },

  { quote: 'I find that the harder I work, the more luck I seem to have.',
    source: 'Thomas Jefferson',
    year: '1888'
  }
]


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
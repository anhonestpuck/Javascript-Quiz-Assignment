// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// what do i need?

// First I need a collection of variables.  I know that some of these variables will 
// be questions and answers
// After I put together the questions I have to set up the function so that each
// follows the other when an input is given....how do i do that? I'm understanding how to jam
// the new stuff in there but I don't remember how to just move onto the next one after
// or if I just keep writing in the variables.
var pageDefault = document.querySelector('body');
var button = document.querySelector('.startbutton');
var quiz = document.querySelector('.quiz');
var question1 = document.querySelector('.question1');
var question2 = document.querySelector('.question2');
var question3 = document.querySelector('.question3');
var question4 = document.querySelector('.question4');
var initials = document.querySelector('.initials');
var ca1 = document.querySelector('.ca1');
var ca2 = document.querySelector('.ca2');
var ca3 = document.querySelector('.ca3');
var ca4 = document.querySelector('.ca4');



// at this point i'd rather have variables and not need them, than the other
// pretty much just put together the rest of the variables.  do I really need to go in and juice up my css to make this work?
button.addEventListener('click', displayQuestion);


function displayQuestion() {
    question1.setAttribute('style', 'visibility: visible');
    if (ca1.addEventListener('click', ca1.target)){
        // so I got here.  I haven't stopped for more than 30 min
        // It's now 11:30.  I can't figure out how to make sure that the question clears
        // if the user clicks the correct answer so I can blanketly give a result
        // for any other click and then track the correct answer (in an empty array then display the length as the score?) 
        // then rinse repeat for each question and tie it up by displaying the score
        // and giving the user a chance to enter their initials
    }

    // He said to just turn it in.  basically at this point I was going to build the function
    // on to take off the answer if they click the right choice
    // otherwise pop an alert saying wrong and transition into the next question
    // then repeat this process for each question
    // afterward i would have the input show and ask for they're initials
    // as well as insert a string that is the value of the length of the string which is an array collecting each element
    // as one of the values in the string so that the number of strings logged equates to the number of points
    // and then go back in and add a timer
    // with a modifier that every wrong click drops 5 seconds

    console.log('hello');

}
window.onload = function () {
fetchingQuestions()
givenQuestions(questions)
}

// Fetching questions and answers from given API
const fetchingQuestions = function() {

    let questions

    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(response => response.json())
    .then(data => questions = data.results)
    .then(questions => console.log(questions))

    displayQuestions(questions)
}

// Displaying fetched questions in html form and creating DOM nodes
const displayQuestions = function(givenQuestions) {
    
}
window.onload = function () {

fetchingQuestions()
}

// Fetching questions and answers from given API
const fetchingQuestions = async function() { 
    try {

        let result = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
        let data = await result.json()
        let questions = data.results
        console.log(questions)
        // loop through questions and get values
        questions = questions.map(item => {
            const question = item.question
            const category = item.category
            const difficulty = item.difficulty
            const incorrectAnswers = item.incorrect_answers
            const correctAnswer = item.correct_answer

            return {question, category, difficulty, incorrectAnswers, correctAnswer}
        })

        // call a display function when data is ready
        displayQuestions(questions)
        return questions

    } catch (error) {
        console.log(error)
    }
}

// Displaying questions in DOM 
const displayQuestions = function(questions) {

    let htmlForm = ''
    let formDOM = document.querySelector(".formDOM")

    questions.forEach(questionsArr => {
        htmlForm += `
        <form class="border p-3">
            <label class="fw-bolder">${questionsArr.question}</label>
            <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
        </form>
        `
    })
    formDOM.innerHTML = htmlForm

}
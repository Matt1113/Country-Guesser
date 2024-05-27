const countries = ["Armenia", "Cyprus", "Georgia", "Turkey", "Kosovo", "Albania", "Andorra", "Austria", 
"Belgium", "Bulgaria", "Bosnia and Herzegovina", "Belarus", "Switzerland", "Czech Republic", "Germany", 
"Denmark", "Estonia", "Finland", "United Kingdom", "Greece", "Croatia", "Hungary", "Ireland", "Iceland", 
"Italy", "Liechtenstein", "Lithuania", "Luxembourg", "Latvia", "Moldova", "Macedonia", "Montenegro", 
"Netherlands", "Norway", "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "Sweden", 
"Ukraine", "France", "Spain"]
const countryElement = document.querySelector(".country")
const incorrectElement = document.querySelector(".incorrect")
const score = document.querySelector(".score")
const numberOfCountries = countries.length
let correctAnswers = 0
let currentCountry = ""

function displayRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countries.length)
    currentCountry = countries.splice(randomIndex, 1)[0]
    countryElement.textContent = currentCountry
    score.textContent = correctAnswers + "/" + numberOfCountries
}

function checkAnswer(event) {
    if (event.target.tagName === 'path') {
        //correct country selected
        if (event.target.getAttribute('name') === currentCountry) {
            updateAfterCorrectAnswer(event)
        } else { //incorrect country selected
            incorrectElement.style.display = "block"
        }
    }
}

function updateAfterCorrectAnswer(event) {
    incorrectElement.style.display = "none"
    event.target.setAttribute('fill', '#00ff00')
    correctAnswers++
    displayRandomCountry()
}

document.querySelector(".map").addEventListener("click", checkAnswer)
displayRandomCountry()
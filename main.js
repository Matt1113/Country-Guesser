const countryLists = {
    europe : '/country lists/europe.js',
    us : '/country lists/us.js',
    'south america' : '/country lists/south america.js'
}
const svgMaps = {
    europe : '/svg maps/europe.svg',
    us : '/svg maps/us.svg',
    'south america' : '/svg maps/south america.svg'
}
const countryElement = document.querySelector(".country")
const incorrectElement = document.querySelector(".incorrect")
const score = document.querySelector(".score")
let continentElement = document.querySelector(".continent")
let mapElement = document.querySelector(".map")
let countries
let numberOfCountries
let correctAnswers
let currentCountry

startGame()
document.querySelector(".map").addEventListener('click', checkAnswer)
document.querySelector(".continent").addEventListener('change', startGame)

async function startGame(event) {
    correctAnswers = 0
    countries = await getCountryList()
    numberOfCountries = countries.length
    changeContinent()
    displayRandomCountry()
}

async function getCountryList() {
    let continent = continentElement.value
    let countryListModule = await import(countryLists[continent])
    return [...countryListModule.countries]
}

async function changeContinent() {
    let continent = continentElement.value
    let svgResponse = await fetch(svgMaps[continent])
    let svg = await svgResponse.text()
    mapElement.innerHTML = svg
}

function displayRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countries.length)
    currentCountry = countries.splice(randomIndex, 1)[0]
    countryElement.textContent = currentCountry
    score.textContent = correctAnswers + "/" + numberOfCountries
}

function checkAnswer(event) {
    if (event.target.tagName === 'path') {
        //correct country selected
        console.log(event.target.getAttribute('d'))
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
const countries = ["Albania", "Austria", "Belgium", "Bulgaria", "Bosnia and Herz.", "Belarus", 
"Switzerland", "Czech Rep.", "Germany", "Denmark", "Estonia", "Finland", "United Kingdom", "Greece", 
"Croatia", "Hungary", "Ireland", "Iceland", "Italy", "Lithuania", "Luxembourg", "Latvia", "Moldova", 
"Macedonia", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Serbia", "Slovakia", 
"Slovenia", "Sweden", "Ukraine", "France", "Spain"]
const countryHeader = document.querySelector(".info h1")
const incorrectHeader = document.querySelector(".info h2")
let currentCountry = ""

function displayRandomCountry() {
    let randomIndex = Math.floor(Math.random() * countries.length)
    currentCountry = countries.splice(randomIndex, 1)[0]
    countryHeader.textContent = currentCountry
}

function checkAnswer(event) {
    if (event.target.tagName === 'path') {
        //correct country selected
        if (event.target.getAttribute('name') === currentCountry) {
            displayRandomCountry()
            incorrectHeader.style.display = "none"
            event.target.setAttribute('fill', '#00ff00')
        } else { //incorrect country selected
            incorrectHeader.style.display = "block"
        }
    }
}

document.querySelector(".map").addEventListener("click", checkAnswer)
displayRandomCountry()
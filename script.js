const clickMeElement = document.getElementById('clickMeBtn')
const colorCodeEl = document.getElementById('colorCode')

clickMeElement.addEventListener("click", function() {
    const hexColor = '#' + getRandomHexNumber()

    document.body.style.backgroundColor = hexColor
    clickMeElement.style.backgroundColor = hexColor
    colorCodeEl.innerText = hexColor.toUpperCase()
})

function getRandomHexNumber() {
    return Math.floor(Math.random()*16777215).toString(16);
}

// import each module
const DomBuilder = require("./DomBuilder")
const CardFactory = require("./CardFactory")
const InputFieldFactory = require("./InputFieldFactory")
const ButtonFactory = require("./ButtonFactory")

//Dom element to appennd
const output = document.querySelector(".output")

//fragment to append to dom
const fragment = document.createDocumentFragment()

//dom elements
const createCardButton = ButtonFactory("button--submit", "Create Card")
const cardTextInput = InputFieldFactory("input--text", "Enter card text here", "text")

//event listener for button
createCardButton.addEventListener("click", function () {
    const userEntry = cardTextInput.value
    output.appendChild(CardFactory("card", userEntry))
    cardTextInput.value = ""
})

//append to fragment
fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)

//append fragment to dom
DomBuilder(fragment, ".output")
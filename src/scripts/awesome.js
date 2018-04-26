const output = document.querySelector(".output")

const fragment = document.createDocumentFragment()

const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}

const buttonFactory = (classList, textContent) => {
    const button = document.createElement("button")
    button.classList = classList
    button.textContent = textContent
    return button
}

const inputField = inputFieldFactory("input--text", "Enter card text here", "text")


fragment.appendChild(inputField)



const inputButton = buttonFactory("button--submit", "Create Card")
inputButton.addEventListener("click", () => {
    const card = document.createElement("section")
    const input = document.querySelector(".input--text")
    card.textContent = input.value
    input.value = ""
    output.appendChild(card)
})

fragment.appendChild(inputButton);










output.appendChild(fragment)
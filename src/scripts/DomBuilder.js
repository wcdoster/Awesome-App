const DomBuilder = (what, where) => {
    const parent = document.querySelector(where);
    parent.appendChild(what)
}

module.exports = DomBuilder
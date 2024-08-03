const cubesJSON = await fetch("./mainPage.json");
const cubesData = await cubesJSON.json();

const cardFrame = document.getElementById("cardsFrame");
const cardTemplate = document.querySelector("#puzzleCard");
cubesData.forEach(e => {
    const aux = cardTemplate.content.cloneNode(true);
    aux.querySelector("h2").textContent = e.name;
    const auxText = aux.querySelector(".puzzleCardText");
    e.methods.forEach(m => {
        const mthName = document.createElement('p');
        mthName.textContent = m;
        auxText.appendChild(mthName);
    })
    aux.querySelector('img').src = e.image;
    cardFrame.appendChild(aux)
});


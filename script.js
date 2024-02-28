guessButton.onclick = function () {
    let isBald = baldCheckbox.checked;
    let isGlasses = glassesCheckbox.checked;
    let isHat = hatCheckbox.checked;
    


    let isSam = isBald && isGlasses  && !isHat;
    let isMike = !isBald && !isGlasses && !isHat;
    let isEric =  !isBald && !isGlasses && isHat;


    if (isSam) {
        alert = (`It's Me Sam!`);
        divA.style.backgroundColor = `green`;
        divA.textContent =`I am Sam`;
        }
        else if (isMike) {
        alert = (`It's Me Mike!`);
        divB.style.backgroundColor = `green`;
        divB.textContent = `I am Mike`;
        }
        else if (isEric) {
        alert = (`It's Me Eric`);
        divC.style.backgroundColor = `green`;
        divC.textContent = `I am Eric`;
        }
}


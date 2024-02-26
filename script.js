guessButton.onclick = function () {
    let isBald = baldCheckbox.checked;
    let isGlasses = glassesCheckbox.checked;
    let isHat = hatCheckbox.checked;
    


    let isSam = isBald && isGlasses  && !isHat;
    let isMike = !isBald && !isGlasses && !isHat;
    let isEric =  !isBald && !isGlasses && isHat;


    if (isSam) {
        alert = (`It's Me Sam!`);
        samImg.src = ("Img/sam.jpg");
        divA.style.backgroundColor = `green`;
}
    else if (isMike) {
        alert = (`It's Me Mike!`);
        mikeImg.src = ("Img/mike.jpg");
        divB.style.backgroundColor = `green`;
}
    else if (isEric) {
        alert = (`It's Me Eric`);
        ericImg.src = ("Img/eric.jpg");
        divC.style.backgroundColor = `green`;

}
}
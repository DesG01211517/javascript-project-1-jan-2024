guessButton.onclick = () {
    let bald = baldCheckBox.checked;
    let glasses = glassesCheckBox.checked;
    let hat = hatCheckBox.checked;
    console.log(baldCheckBox)
}





let sam = bald && glasses  && !hat;
let mike = !bald && !glasses && !hat;
let eric =  !bald && !glasses && hat;


if (sam) {
    divAtextContent = `It's Me Sam!`;
    samImg.src = `sam.jpg`;
    divB.style.backgroundColor = `green`
}
else if (mike) {
    divBtextContent = `It's Me Mike!`;
    mikeImg.src = `mike.jpg`;
    divB.style.backgroundColor = `green`
}
else if (eric) {
    divCtextContent = `It's Me Mike!`;
    mikeImg.src = `mike.jpg`;
    divC.style.backgroundColor = `green`
}

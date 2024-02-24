guessButton.onclick = () {
    let bald = baldCheckBox.checked;
    let glasses = glassesCheckBox.checked;
    let hat = hatCheckBox.checked;
    console.log(baldCheckBox)
}





let sam = bald && glasses  && !hat;
let mike = !bald && !glasses && !hat;
let eric =  !bald && !glasses && hat;



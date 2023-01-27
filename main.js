const selectBox = boxNumber => document.getElementsByClassName(boxNumber)[0];

// aparecer botao de visualizar com o mouseover

selectBox('project_1').addEventListener('mouseover', function() {
    (function visualizeButton() {
        
    })()
})


function addBand(projectBox) {
    const band = selectBox(projectBox).getElementsByClassName('boxContent')[0].firstChild;
    const boxText = selectBox(projectBox).getElementsByClassName('boxText')[0];
    boxText.innerHTML = 'EM BREVE';
    band.classList.add('band');
}

// addBand('project_1');
addBand('project_2');
addBand('project_3');
addBand('project_4');

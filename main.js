const selectBox = boxNumber => document.getElementsByClassName(boxNumber)[0];

// aparecer botao de visualizar com o mouseover
selectBox('project_1').addEventListener('mouseover', function() {
    const boxText = selectBox('project_1').getElementsByClassName('boxText')[0];
    const boxContent = selectBox('project_1').getElementsByClassName('boxContent')[0];
    const inicialText = document.getElementById('inicialText');
    boxContent.classList.add('hoverEffect');
    boxText.innerHTML = 'visualizar';
    boxText.style.fontSize = '1.5em';
    inicialText.style.display = 'none';
})

// sumir botao de visualizar com o mouseout
selectBox('project_1').addEventListener('mouseout', function() {
    const boxText = selectBox('project_1').getElementsByClassName('boxText')[0];
    const boxContent = selectBox('project_1').getElementsByClassName('boxContent')[0];
    const inicialText = document.getElementById('inicialText');
    boxContent.classList.remove('hoverEffect');
    boxText.innerHTML = ''
    inicialText.style.display = 'block';
})

// aparecer descrição do projeto com mouseover
selectBox('project_1').addEventListener('mouseover', function () {
    const project_1 = document.getElementsByClassName('project_description')[0];
    project_1.style.display = 'flex'
})

// sumir descrição do projeto com mouseout
selectBox('project_1').addEventListener('mouseout', function () {
    const project_1 = document.getElementsByClassName('project_description')[0];
    project_1.style.display = 'none'
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

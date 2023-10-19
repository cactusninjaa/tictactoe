let darkModeButton = document.querySelector('.darkMode');

darkModeButton.onclick = function() {
    gameScreen = document.querySelector('.game-screen');
    body = document.querySelector('body');
    caseGrid = document.querySelectorAll('.case');
    buttonMulti = document.querySelector('.multi');
    buttonRejouer = document.querySelector('.rejouer');

    gameScreen.classList.toggle('white')
    body.classList.toggle('white')
    buttonMulti.classList.toggle('white')
    buttonRejouer.classList.toggle('black')
    for (let i = 0; i < caseGrid.length; i++){
        caseGrid[i].classList.toggle('black')
    }
}
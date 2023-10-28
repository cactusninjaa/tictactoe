

// permet de placer les éléments dans un tableau
let cases = [...document.getElementsByClassName("cell")];
let player = document.getElementById("current-player");
let scoreP1 = document.getElementById("score-player");
let scoreB1 = document.getElementById("score-bot");

let state = {
    currentPlayer : 1,
    scorePlayer : 0,
    scoreBot : 0,
    c1 : 0,
    c2 : 0,
    c3 : 0,
    c4 : 0,
    c5 : 0,
    c6 : 0,
    c7 : 0,
    c8 : 0,
    c9 : 0
};


const resetState = () => {
    // mettre une fonction qui tire aléatoirement le 1er joueur dans le futur;
    currentPlayer = 1;
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;  
}

const verifVictory = () => {
    if(
        (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) || 
        (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
        (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
        (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
        (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
        (state.c3 == state.c5 && state.c5 == state.c7 && state.c3 > 0) ||
        (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
        (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0) 
    ){
        return true;
    } else if(
        state.c1 != 0 && state.c2 != 0 && state.c3 != 0 && state.c4 != 0 && state.c4 != 0 && state.c6 != 0 && state.c7 != 0 && state.c8 != 0 && state.c9 != 0 
    ){
        return null;
    }else {
        return false;
    }
};


// On récupère l'objet évènement et que l'on va récupérer ici en paramètre (e)
const playerCase = (e) => {
    let idCase = e.target.id;
    if(state[idCase] != 0) return;

    state[idCase] = state.currentPlayer;

    let isVictory = verifVictory();
    if(isVictory == true){
        if(state.currentPlayer == 1){
            state.scorePlayer++;
            scoreP1.textContent = state.scorePlayer;
            alert("Le gagnant est Joueur !"); 
        }else{
            state.scoreBot++;
            scoreB1.textContent = state.scoreBot;
            alert("Le gagnant est Bot !"); 
        }
        resetState();
        cases.forEach((c) => (c.textContent=""));
    }else if (isVictory === null){
        alert("Match nul");
        player.textContent = "Joueur";
    }else if (isVictory == false){
        if(state.currentPlayer == 1 ){
            e.target.textContent = "X";
            e.target.classList.add('x');
            state.currentPlayer = 2;
            player.textContent = "Bot";
        }else{
            e.target.textContent = "O";
            e.target.classList.add('o');
            state.currentPlayer = 1;
            player.textContent = "Joueur";

        }
    }

    
};

// suite à cette évenement, un objet évènement passe en paramètre dans la fonction
cases.forEach((el) => {
    el.addEventListener('click', playerCase);
})


let darkModeButton = document.querySelector('.darkMode');

darkModeButton.onclick = function() {
    gameScreen = document.querySelector('.game-screen');
    body = document.querySelector('body');
    caseGrid = document.querySelectorAll('.cell');
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

// --------- player select
// --------- current score is held on hold
// --------- the score is shown on every click of the roll
// --------- the click of the roll changes the image
// --------- the click of new game resets all values
// --------- click of hold changes player
// --------- if the dice falls on 1, then the turn is passed
// --------- once a player's current score is reached 20, they are the winner


let score = [0,0];// set everything to zero

let roundScore = 0;
const winningScore = 20;
let gamePlaying = 1;

let activePlayer = 0;

let lastDice = 0;

document.getElementById('player_0').style.background = 'red'

//------------ NEW GAME BUTTON RESETS EVERTHING USING INIT() FUNCTION ----------------


function init() {
    let newGame = document.getElementById('reset')
    newGame.addEventListener('click', function() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;
        document.getElementById('playerScore_0').textContent = '0'; 
        document.getElementById('playerScore_1').textContent = '0';
        document.getElementById('current_Score_0').textContent = '0'; 
        document.getElementById('current_Score_1').textContent = '0';
        document.getElementById("diceImg").src = "";
        document.getElementById('name_0').textContent = 'Player 1';
        document.getElementById('name_1').textContent = 'Player 2';
        document.getElementById('roll').style.display = 'block'
        document.getElementById('hold').style.display = 'block'
        
    })
}

init();
//---------------------- roll function ----------------------------------


function click(){
    let roll = document.getElementById('roll');
    roll.addEventListener('click', function() {
        if (gamePlaying) {
            let diceNum = Math.floor(Math.random() * 6) + 1 // random number
            document.getElementById("diceImg").src = `./img/dice${diceNum}.png`; // dice picture shown according to the random 
            if(diceNum !== 1) {
                roundScore += diceNum;
                document.querySelector("#current_Score_" + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
            lastDice = diceNum;
        }
});
};6

click();

//----------------- next player function ----------------------------

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current_Score_0').textContent = '0'; 
    document.getElementById('current_Score_1').textContent = '0';

    if (activePlayer == 0){
        document.getElementById('player_0').style.background = 'red'
        document.getElementById('player_1').style.background = 'none'

    } else {
        document.getElementById('player_1').style.background = 'yellow'
        document.getElementById('player_0').style.background = 'none'
    }
  
  }

//---------------- hold function ----------------------------------

function hodor() {
    let hold = document.getElementById('hold');
    hold.addEventListener('click', function(){
        if(gamePlaying) {
            score[activePlayer] += roundScore;
            document.querySelector('.playerScore_' + activePlayer).textContent = score[activePlayer];
            if (score && roundScore >= winningScore) {
                document.querySelector('#name_' + activePlayer).textContent = 'WINNER!'
                document.getElementById('roll').style.display = 'none'
                document.getElementById('hold').style.display = 'none'
                gameplaying = false;
            } else {
                nextPlayer()
            }
        }
    });

}

hodor();


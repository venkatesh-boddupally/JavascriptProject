/*
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
*/

var totalScore;
var roundScore, activePlayer, gamePlaying;

var lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. randome number
        var dice = Math.floor(Math.random() * 6) + 1;


        //2. display result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //3. update round score if dice not 1
        if(dice ===6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        else if(dice !==1 ){
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }

        lastDice = dice;
    }
})

function nextPlayer(){
    
    activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;
    
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('."player-0-panel').classList.remove('active');
    // document.querySelector('."player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        totalScore[activePlayer] += roundScore;
        
        document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];

        if(totalScore[activePlayer] >= 10){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }
        else{
            nextPlayer();
        }
    }

})

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    totalScore = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;


    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}
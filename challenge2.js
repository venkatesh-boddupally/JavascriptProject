/*
Add an input field to the HTML where players can set the winning score,
so that they can change the predefined score of 100. 
*/
var totalScore;
var roundScore, activePlayer, gamePlaying;

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
        if(dice !==1 ){
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
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

        var input = document.querySelector('.final-score').value;

        if(input)
        {
            if(isNaN(input))
            {
                winningScore = 100;
            }else{
                winningScore = input;
            }
            
        }
        else{
            winningScore = 100;
        }
        console.log(winningScore)

        if(totalScore[activePlayer] >= winningScore){
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
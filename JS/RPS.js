let score = JSON.parse(localStorage.getItem('score'));
      if(!score){
        score = {
            win : 0,
            loose: 0,
            tie: 0,
          };
      }
      function reset(){
        score.win = 0;
        score.loose = 0;
        score.tie = 0;
        localStorage.removeItem('score');
        updateScore();
        removeResult();
        updateMoveMade();
      }
      

      function game(uMove){
        const random = Math.random();
        let cMove = '';

        if(random >= 0 && random < 1/3) {
          cMove = 'Rock'
        } else if(random >= 1/3 && random < 2/3) {
          cMove = 'Paper';
        } else if(random >= 2/3 && random < 1) {
          cMove = 'Scissors';
        } 

        let result = '';

        if((uMove === 'Rock' && cMove === 'Paper') 
            || (uMove === 'Paper' && cMove === 'Scissor')
            || (uMove === 'Scissor' && cMove === 'Rock')){
          result = 'Loose';
          score.loose +=1;
        }else if((uMove === 'Rock' && cMove === 'Scissor') 
            || (uMove === 'Paper' && cMove === 'Rock')
            || (uMove === 'Scissor' && cMove === 'Paper')){
          result = 'Win';
          score.win+=1;
        }else {
          result = 'Tie';
          score.tie+=1;
        }
        gameResult(result);
        moveMde(uMove, cMove,1);
        localStorage.setItem('score', JSON.stringify(score));

        updateScore();
      }


      function updateScore(){
        document.querySelector('.overall-score').
            innerHTML = 'Score: Win: '+score.win+' Loose:'+score.loose+' Tie:'
                +score.tie+'.\n';
      }
      

      function moveMde(uMove, cMove){
        document.querySelector('.moveMade')
            .innerHTML = 'You Picked '+uMove+', computer picked '+ cMove;
      }
      function updateMoveMade(){
        document.querySelector('.moveMade')
            .innerHTML = '';
      }


      function removeResult(){
        document.querySelector('.gameResult')
        .innerHTML = 'Lets begin shall we!!';
      }
      function gameResult(result){
        document.querySelector('.gameResult')
        .innerHTML = 'You ' + result + '!!!\n';
      }

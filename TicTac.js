const ticTactoe = new TicTactoe();
ticTactoe.StartGame();

function TicTactoe(){
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    var turn = 0;
    this.StartGame = function(){
        var Config = { childList : true };
        var observer = new MutationObserver(()=>turnNext());
        board.Positions.forEach((el) => observer.observe(el,Config));
        turnNext();
    }
    function turnNext(){
        console.log("I am working");
    
       if(board.CheckForWinner() == true)
       {
           return;
         
       }
        if((turn % 2) == 0)
        {
            humanPlayer.turnNext();
        }
        else{
            computerPlayer.turnNext();
        }
        turn++;
    }
  
   function Board(){
    this.Positions = Array.from(document.querySelectorAll(".col"));
    var winner = false;
    this.CheckForWinner = function(){

        var WiningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]                    
        ]
        var position = this.Positions;
        WiningCombinations.forEach(winnigCombo => {
            var position0InnerText = position[winnigCombo[0]].innerText;
            var position1InnerText = position[winnigCombo[1]].innerText;
            var position2InnerText = position[winnigCombo[2]].innerText;
            if(position0InnerText != '' && position0InnerText ==position1InnerText && position1InnerText == position2InnerText)
            {
                winner = true;
                winnigCombo.forEach(index => {
                    position[index].className += " winner";
                    console.log("hlw")
                })
               
            }

        })
        return winner;
    }

}

function HumanPlayer(board){
  this.turnNext = function(){
     board.Positions.forEach(el => el.addEventListener("click",hundleTurnNext))
  }
}
function hundleTurnNext(event){
    event.target.innerText = "X"
    board.Positions.forEach(el => el.removeEventListener("click",hundleTurnNext))
 }
function ComputerPlayer(board){
    this.turnNext = function(){
        var availablePositions = board.Positions.filter(el => el.innerText == '');
        var randomMove = Math.floor(Math.random() * availablePositions.length);
        availablePositions[randomMove].innerText = "O";
    }
}
}








  

































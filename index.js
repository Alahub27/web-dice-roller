let playerOnePoints = 0;
let playerTwoPoints = 0;


let turnScore = 0;

let currentPlayer = 1;

function rollDice() {
   //rolling dice from only 1-6
    let diceResult = Math.floor(Math.random() * 6) + 1;

    // display random number
    document.getElementById("diceResult").value = diceResult;

    //displaying message for each roll dice number - from ChatGPT
    if (diceResult === 1) {
        turnScore = 0;
        document.getElementById("diceMessage").textContent = "You rolled a 1 - Sorry turn over!";

    } else {
        turnScore = turnScore + diceResult;

        document.getElementById("diceMessage").textContent = "You rolled a " + diceResult + " - keep going!";
        
    }

    //display total points from dice rolls
    document.getElementById("dicePoints").value = turnScore;
}


    // rolling dice button

    const button = document.getElementById("rollButton");

    //from ChatGPT
    button.addEventListener("click", function() {
        rollDice();

    });


    // hold button - from ChatGPT from const holdButton to the end of the code
    const holdButton = document.getElementById("holdButton");

    holdButton.addEventListener("click", function() {
        if (currentPlayer == 1) {
            playerOnePoints = playerOnePoints + turnScore;

            //display player 1s preservered score
            document.getElementById("playerOnePoints").value = playerOnePoints;

            // switch to player 2
            currentPlayer = 2;

            //display message
            document.getElementById("diceMessage").textContent = "You press the Hold button. Player 1's points are saved. Its Players 2's turn"
        }


        else {
            playerTwoPoints = playerTwoPoints + turnScore;

            //displaying player 2 preserved score
            document.getElementById("playerTwoPoints").value = playerTwoPoints;

            // switching to player 1
            currentPlayer = 1;

            //display message
            document.getElementById("diceMessage").textContent = "You press the Hold button. Player 2's points are saved. Its Players 1's turn"

        }

        turnScore = 0;

        document.getElementById("dicePoints").value = turnScore;
        
    });
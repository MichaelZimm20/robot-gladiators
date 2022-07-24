var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can add also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);






//this creates a function named fight

var fight = function (enemyNames) {


    // repeat and execute as longaas the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
    //window.alert("Welcome to Robot Gladiators!");
 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   
   
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }

    }

     // remove enemy's health by substracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;
     console.log(
         playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
     );


     // Check enemy's health 
     if (enemyHealth <= 0) {
         window.alert(enemyNames + " has died!");

         //award player money for winning
         playerMoney = playerMoney + 20; 
         // leave while () loop since enemy is dead
         break;         
     } else {
         window.alert(enemyNames + " still has " + enemyHealth + " health left");
     }



     // remove player's health by substracting the amount set in the enemyAttack variable
     playerHealth = playerHealth - enemyAttack;
     console.log(
         enemyNames + " attack " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
     );


     // Check player's health 
     if (playerHealth <= 0) {
         window.alert(playerName + " has died!");
         // leave while() loop is player is dead 
         break;
     } else {
         window.alert(playerName + " still has " + playerHealth + " health left");   
        } 
    } // end of while loop
};  // end of fight function



//Function to Start a new game 
var startGame = function () {
    

    // reset player stats
    playerHelath = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        // debugger;
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before strting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will asuume the value of the enemyName parameter
            fight(pickedEnemyName);

        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};




var endGame = function () {

    // if the player is still alive. player wins!
    if (playerHealth > 0) {

        window.alert("Great job, you,ve survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("would you like to play again?");


    if (playAgainConfirm) { 

        //restart the game
        startGame();
    }
    
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }


    // window.alert("The game has now ended. lets see how you did!");
};




startGame();

//fight();

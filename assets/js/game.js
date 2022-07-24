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

    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by substracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );


        // Check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        }

        else {
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
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }


        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");

        // confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");


        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight ();
        }

    } else {

        window.alert("You need to choose a valid option. Try again!");
    }




};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

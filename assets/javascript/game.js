$(document).ready(function () {
    // create global variable 
    var characterArea = $("#character-portaits-hero");
    var enemyArea = $("#character-portaits-enemy");
    var defenderArea = $("#defender");
    var fightArea = $("#fight-section");
    var attackButton = $("#attack");
    var restartArea = $("#restart-area");
    var defeatedArea = $("#defeated-portaits");
    var restartButton = $("#restart");
    var heroChosen = false;
    var defenderChosen = false;
    var gameOver = false;
    restartButton.toggle(false);
    $("#defeated-area").hide();

    // creat 4 character objects with 3 attributes, attack power. HP, and counter attack power
    var terra = {
        name: "Terra",
        health: 100,
        attack: 5,
        counter: 5
    };

    var tidus = {
        name: "Tidus",
        health: 120,
        attack: 8,
        counter: 8,
    };

    var zidane = {
        name: "Zidane",
        health: 150,
        attack: 20,
        counter: 20,
    };

    var cloud = {
        name: "Zidane",
        health: 180,
        attack: 25,
        counter: 25,
    };


    // create restart button
    function restart() {
        // only appears on game over or win (if statement)
        if (gameOver) {
            restartButton.toggle(true);
        } else {
            return;
        }

        // on click event for restart button 
        restartButton.on("click", function () {
            heroChosen = false;
            defenderChosen = false;
            gameOver = false;
            // reset all heroes to hero selection area
            if ($(".character-image").parent().attr("id") == "defeated") {
                $(".character-image").detach().appendTo("#heroes");
            }
            // clear all messages (damage, no hero, you win, you lose)
            $("#restart-area").empty();
            // hide restart button
            restartButton.toggle(false);
        });


    };

    // on click event to select your character
    // selected character remains in area
    // other characters move to enemies available area (border changes to red)

    // on click event to select enemies
    // selected enemy moves from enemies available to defender (border changes to black)
    // other enemies can't be clicked when one is in dfender

    // on click event to attack
    // each time clicked attack power increases by objects attack power
    // opponents HP is reduced by current attack power
    // players HP is recuded by enemies counter attack power (static)
    // message is shown displaying players current AP and enemies static CAP (damage dealt)
    // when no opponent present show message to choose new opponent
    // when defender hp <= 0 defender is cleared 
    // message is displayed to select another enemy

    // when all enemies defeated: display you win message and retart button
    // when game over display game over message and restart button

});
$(document).ready(function () {
    // create global variable 
    var attackButton = $("#attack");
    var messages = $("#game-message");
    var restartButton = $("#restart");
    var attacker;
    var defender;
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
            attacker = null;
            defender = null;
            // reset all heroes to hero selection area
            if ($(".defeated-image").parent().attr("id") == "defeated") {
                $(".defeated-image").detach().appendTo("#heroes");
                $(".defeated-image").removeClass("defeated-image").addClass("character-image");
            }
            // if to reset class name
            // clear all messages (damage, no hero, you win, you lose)
            messages.empty();
            // hide restart button
            restartButton.toggle(false);
        });
    };

    // on click event to select your character
    $(document).on("click", ".character-image", function () {
        if (heroChosen) {
            return;
        }
        
        attacker = $(this).attr("id")
        switch (attacker) {
            case "character-1":
                // selected character remains in area
                $(".character-image:first-child").removeClass("character-image").addClass("selected");
                // other characters move to enemies available area (border changes to red)
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-2":
                $(".character-image:nth-child(2)").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-3":
                $(".character-image:nth-child(3)").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-4":
                $(".character-image:last-child").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
        }

    });

    // on click event to select enemies
    $(document).on("click", ".enemy-image",  function () {
        if (defenderChosen) {
            return;
        }

        defender = $(this).attr("id")
        switch (defender) {
            case "character-1":
                // selected enemy moves from enemies available to defender (border changes to black)
                $("#character-1").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                // other enemies can't be clicked when one is in defender
                defenderChosen = true;
                break;
            case "character-2":
                $("#character-2").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
            case "character-3":
                $("#character-3").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
            case "character-4":
                $("#character-4").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
        };
    });


    // on click event to attack
    attackButton.on("click", function () {
        if (heroChosen === false || defenderChosen === false) {
            return;
        }
        // each time clicked attack power increases by objects attack power
        
        // opponents HP is reduced by current attack power
        // players HP is recuded by enemies counter attack power (static)
        // message is shown displaying players current AP and enemies static CAP (damage dealt)
        // when defender hp <= 0 defender is cleared 
        // message is displayed to select another enemy
        // when all enemies defeated: display you win message and retart button
        // when game over display game over message and restart button

    })

});
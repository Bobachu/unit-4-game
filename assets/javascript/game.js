$(document).ready(function () {
    // create global variable 
    var attackButton = $("#attack");
    var messages = $("#game-message");
    var restartButton = $("#restart");
    var attacker;
    var defender;
    var attackPower = 0;
    var attackHealth = 0;
    var defenderPower = 0;
    var defenderHealth = 0;
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
        counter: 5,
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
        name: "Cloud",
        health: 180,
        attack: 25,
        counter: 25,
    };

    function setUpCharacters() {
        if (gameOver === true) {
            $("#character-1 > .character-health").html(terra.health);

            $("#character-2 > .character-health").html(tidus.health);

            $("#character-3 > .character-health").html(zidane.health);

            $("#character-4 > .character-health").html(cloud.health);
        }
    }

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
            setUpCharacters();
            gameOver = false;
            attacker = {};
            defender = {};

            // reset all heroes to hero selection area
            if ($(".defeated-image").parent().attr("id") == "defeated") {
                $(".defeated-image").detach().appendTo("#heroes");
                $(".defeated-image").removeClass("defeated-image").addClass("character-image");
            }
            // if to reset class name
            $(".selected").removeClass("selected").addClass("character-image");
            // defender remove class and move
            if ($(".defender").parent().attr("id") == "defenders") {
                $(".defender").detach().appendTo("#heroes");
                $(".defender").removeClass("defender").addClass("character-image");
            }
            // enemies remove class and move
            if ($(".enemy-image").parent().attr("id") == "enemies") {
                $(".enemy-image").detach().appendTo("#heroes");
                $(".enemy-image").removeClass("enemy-image").addClass("character-image");
            }
            // clear all messages (damage, no hero, you win, you lose)
            messages.empty();
            // hide restart button
            restartButton.toggle(false);

        });
    };

    // on click event to select your character
    $(document).on("click", ".character-image", function () {
        // debugger;
        if (heroChosen) {
            return;
        }

        switch ($(this).attr("id")) {
            case "character-1":
                attacker = terra;
                // selected character remains in area
                $("#character-1").removeClass("character-image").addClass("selected");
                // other characters move to enemies available area (border changes to red)
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-2":
                attacker = tidus;
                $("#character-2").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-3":
                attacker = zidane;
                $("#character-3").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
            case "character-4":
                attacker = cloud;
                $("#character-4").removeClass("character-image").addClass("selected");
                if ($(".character-image").parent().attr("id") == "heroes") {
                    $(".character-image").removeClass("character-image").addClass("enemy-image");
                    $(".enemy-image").detach().appendTo("#enemies");
                }
                heroChosen = true;
                break;
        }
        attackHealth = attacker.health;
        attackPower = attacker.attack;
    });

    // on click event to select enemies
    $(document).on("click", ".enemy-image", function () {
        if (defenderChosen) {
            return;
        }

        switch ($(this).attr("id")) {
            case "character-1":
                defender = terra;
                // selected enemy moves from enemies available to defender (border changes to black)
                $("#character-1").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                // other enemies can't be clicked when one is in defender
                defenderChosen = true;
                break;
            case "character-2":
                defender = tidus;
                $("#character-2").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
            case "character-3":
                defender = zidane;
                $("#character-3").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
            case "character-4":
                defender = cloud;
                $("#character-4").removeClass("enemy-image").addClass("defender");
                if ($(".defender").parent().attr("id") == "enemies") {
                    $(".defender").detach().appendTo("#defenders");
                }
                defenderChosen = true;
                break;
        };
        defenderHealth = defender.health;
        defenderPower = defender.counter;
    });



    // on click event to attack
    attackButton.on("click", function () {
        if (heroChosen === false && defenderChosen === false && gameOver === true) {
            return;
        }
        // each time clicked attack power increases by objects attack power
        // opponents HP is reduced by current attack power
        if (attackPower === attacker.attack && defenderChosen === true) {
            defenderHealth = (defenderHealth - attacker.attack);
            attackPower = attackPower + attacker.attack;
            //add health display change
            $("#defenders > .defender > .character-health").html(defenderHealth);
        } else if (defenderChosen === true) {
            defenderHealth = (defenderHealth - attackPower);
            attackPower = attackPower + attacker.attack;
            //add health display change1
            $("#defenders > .defender > .character-health").html(defenderHealth);
        }
        console.log(attackPower);
        // players HP is recuded by enemies counter attack power (static)
        if (defenderChosen === true) {
            attackHealth = (attackHealth - defender.counter);
            $("#heroes > .selected > .character-health").html(attackHealth);
        }
        // message is shown displaying players current AP and enemies static CAP (damage dealt)
        messages.html(attacker.name + " dealt " + attackPower + " damage to " + defender.name + "</br>" + defender.name + " dealt " + defender.counter + " right back!");
        // when defender hp <= 0 defender is cleared 
        if (defenderHealth <= 0 && $("#enemies").children().length >= 0) {
            $(".defender").removeClass("defender").addClass("defeated-image");
            if ($(".defeated-image").parent().attr("id") == "defenders") {
                $(".defeated-image").detach().appendTo("#defeated");
            }
            defenderChosen = false;
            // message is displayed to select another enemy
            // add more to the text
            messages.text("You have defeated " + defender.name + ". Choose another opponent!");
        }
        // when all enemies defeated: display you win message and retart button
        // may need to change children to contents below
        if (attackHealth > 0 && $("#enemies").children().length === 0 && $("#defenders").children().length === 0) {
            defenderChosen = false;
            messages.text("Congratulations! You won!")
            gameOver = true;
            restart();
        }
        // when game over display game over message and restart button
        if (attackHealth <= 0) {
            messages.text("Oh no! Game over!");
            defenderChosen = false;
            gameOver = true;
            restart();
        }
    })

});
// create global variable 
var characterArea = $("#your-character")[0];
var enemyArea = $("#enemy-choices")[0];
var defenderArea = $("#defender")[0];
var fightArea = $("#fight-section")[0];
var attackButton = $("#attack")[0];
var restartArea = $("restart-area")[0];
var restartButton = $("#restart")[0];

// creat 4 character objects with 3 attributes, attack power. HP, and counter attack power

// create restart button
// on click event for restart button 
// reset game progress to the beginning
// only appears on game over or win

// push all characters to the your character line on page load

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
$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

let fungusHP = 100;
let playerAP = 100;

let fungusAlive = true;
let outOfAP = false;
let fungusAnimation = 'walk';




function onReady() {


    $('.attack-btn').on('click', attack);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!    
   

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function attack () {
    let attack = $(this).attr('class');

    switch (attack) {
        case 'attack-btn arcane-sceptre' :
            playerAP -= 12;
            fungusHP -= 14;
            console.log('Player used Arcane Scepter! Freaky Fungus takes 14 Damage!');
            console.log(`Player AP: ${playerAP}. Freaky Fungus HP: ${fungusHP}`);
            break;
        case 'attack-btn entangle' :
            playerAP -= 23;
            fungusHP -= 9;
            console.log('Player used Entangle! Freaky Fungus takes 9 Damage!');
            console.log(`Player AP: ${playerAP}. Freaky Fungus HP: ${fungusHP}`);
            break;
        case 'attack-btn dragon-blade':
            playerAP -= 38;
            fungusHP -= 47;
            console.log('Player used Dragon Blade! Freaky Fungus takes 47 Damage!');
            console.log(`Player AP: ${playerAP}. Freaky Fungus HP: ${fungusHP}`);
            break;
        case 'attack-btn star-fire' :
            playerAP -= 33;
            fungusHP -= 25;
            console.log('Player used star-fire! Freaky Fungus takes 25 Damage!');
            console.log(`Player AP: ${playerAP}. Freaky Fungus HP: ${fungusHP}`);
            break;
    }

    if (fungusHP <= 0) {
        fungusHP = 0;
        fungusAlive = false;
        fungusAnimation = 'dead';
        console.log(`You have defeated the freaky fungus! You are earth's greatest hero!`);
    }
    if (playerAP <=0) {
        playerAP = 0;
        outOfAP = true;
        if(fungusAlive) {
            fungusAnimation = 'jump';
            console.log(`Player Has been defeated! Humanity is Doomed!`);
        }
    }

    render();
}

function render(){

    //render player ap
    $('.ap-text').text(playerAP);
    $('#ap-meter').val(playerAP);

    //render freaky fungus hp
    $('.hp-text').text(fungusHP);
    $('#hp-meter').val(fungusHP);

    //render animation
    $(".freaky-fungus").attr("class", `freaky-fungus ${fungusAnimation}`);

    //render disable
    $('.attack-btn').attr("disabled", outOfAP);



}
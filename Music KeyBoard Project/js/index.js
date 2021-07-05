var buttons = document.querySelectorAll("button");

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var pressedLetter = this.textContent;
    
        playSound(pressedLetter);

        animatePress(pressedLetter);

    });
}

document.addEventListener("keypress", function(event){

    playSound(event.key);

    animatePress(event.key);
});


function playSound(letter){

    switch(letter){
        case "w":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            //this.classList.add("pressed");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default: null;    
    }
}

function animatePress(letter){

    var pressedButton = document.querySelector("." + letter);
    
    pressedButton.classList.add("pressed");  

    setTimeout(function(){
        pressedButton.classList.remove("pressed");
    },200);
}
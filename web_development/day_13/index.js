function handleCLick() {
    
   makeSound(this.innerHTML);
   buttonAnimation(this.innerHTML)
    
}

var buttonsArray = document.querySelectorAll("button")

for (var i=0; i<buttonsArray.length; i++) {
    buttonsArray[i].addEventListener("click", handleCLick)
    
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/crash.mp3")
            audio.play()
        break;
        case "a":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/snare.mp3")
            audio.play()
        break;
        case "s":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/tom-1.mp3")
            audio.play()
        break;
        case "j":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/tom-2.mp3")
            audio.play()
        break;
        case "k":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/tom-3.mp3")
            audio.play()
        break;
        case "l":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/kick-bass.mp3")
            audio.play()
        break;
        case "d":
            var audio = new Audio("/home/mateusz_/Desktop/Notatki/days_with_angela/web_development/day_13/sounds/tom-4.mp3")
            audio.play()
        break;
        default:
            console.log(this.innerHTML)


    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function() {activeButton.classList.remove("pressed")}, 100)
    
}


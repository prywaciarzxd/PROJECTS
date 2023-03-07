var calculateButton = document.querySelector(".calculate")
var clearButton = document.querySelector(".clear")

var isMale = document.getElementById("male");
var isFemale = document.getElementById("female")

var inputs = document.querySelectorAll("input")
console.log(inputs)
var easyCheck = document.getElementById("light");
var mediumCheck = document.getElementById("medium");
var hardCheck = document.getElementById("hard");

var usUnits = document.querySelector(".US-Units")

var isKgs = true;

usUnits.addEventListener("click", function() {
    isKgs = false;
    inputs[3].placeholder = "Feet and inches"
    inputs[4].placeholder = "Pounds"
})

document.querySelector(".Metric-Units").addEventListener("click", function() {
    isKgs = true;
    inputs[3].placeholder = "Centimeters"
    inputs[4].placeholder = "Kilograms"
})





clearButton.addEventListener("click", function(){
    for (var i = 0; i<inputs.length; i++) {
        inputs[i].value = ""
    }
    isMale.checked = false;
    isFemale.checked = false;
    easyCheck.checked = false;
    mediumCheck.checked = false;
    hardCheck.checked = false;
    document.querySelector(".the-answer h1").textContent = '';
})

function checkEmpty() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            alert("You have left empty fields!")
            return 0;
        }
    }
}

function getAttributes() {
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value
    const age = document.getElementById("age").value
    return [weight, height, age]
}

calculateButton.addEventListener("click", function() {
    if (isMale.checked === true && isFemale.checked === true) {
        alert("You cant, choose both genders!")
    }

    if (isMale.checked === true) {
        checkEmpty()
        attr = getAttributes()
        if ( isKgs === false ) {
            attr[0] *= 0.45359237;
            attr[1] *= 12;

        } 
        var caloriesBurned = 66 + (6.2 * attr[0]) + (12.7 * attr[1]) - (6.76 * attr[2])
        if (document.getElementById("light").checked == true) {
            maxCal = caloriesBurned * 1.37;
        }
        if (document.getElementById("medium").checked == true) {
            maxCal = caloriesBurned * 1.55;
        }
        if (document.getElementById("hard").checked == true) {
            maxCal = caloriesBurned * 1.725;
        }
        document.querySelector(".the-answer h1").textContent = `You body burns ${maxCal} kcal through the day!`
    }

    else if (isFemale.checked === true) {
        checkEmpty()
        attr = getAttributes()
        var caloriesBurned = 655.1 + (4.35 * attr[0]) + (4.7 * attr[1]) - (4.7 * attr[2])
        if (document.getElementById("light").checked == true) {
            maxCal = caloriesBurned * 1.37;
        }
        if (document.getElementById("medium").checked == true) {
            maxCal = caloriesBurned * 1.55;
        }
        if (document.getElementById("hard").checked == true) {
            maxCal = caloriesBurned * 1.725;
        }

        document.querySelector(".the-answer h1").textContent = `You body burns ${maxCal} kcal through the day!`
        
    }
    else {
        alert("You gotta pick at least one gender!")
    }

})
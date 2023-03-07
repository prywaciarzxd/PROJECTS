// ADDING CALORIES

var calories = 0

var quickADD = document.querySelectorAll("#quick-add")


for ( var i = 0; i<quickADD.length; i++) {
    quickADD[i].addEventListener("click", function() {
        var how_many = prompt("How many calories do u want to add?")
        calories += parseInt(how_many);
        document.querySelector("#total-calories").textContent = calories;
        return 0;
    })
}

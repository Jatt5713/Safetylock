var targetNumber = "8"; 
var userInput = document.getElementById('input');
var result = document.getElementById('output');
var button = document.getElementById("button")

button.onclick = function(event) {
    var guessedNumber = userInput.value; 

    if (guessedNumber === targetNumber) {
        result.innerText = "Je hebt het juiste nummer geraden!";
        output.style.display = "block";
        output.style.backgroundColor = "green ";
    } else if (guessedNumber) {
        result.innerText = "Helaas, probeer het nog eens.";
        output.style.display = "block";
        output.style.backgroundColor = "red ";

    }

    setTimeout(function() {
        output.style.display = "none";
    }, 5000);
};

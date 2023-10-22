function generateRandomColor() {
    var numberInput = document.getElementById("numberInput").value;
    var color = Math.floor(Math.random() * 2) === 0 ? "red" : "green";
    
    if (numberInput) {
        var resultDiv = document.getElementById("result");
        resultDiv.style.color = color;
        resultDiv.textContent = "You chose " + color + " with the number " + numberInput + ".";
    } else {
        alert("Please enter a valid number.");
    }
}

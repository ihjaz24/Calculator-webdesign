var firstNumber = "";

function buttonclick(val) {
    var screen = document.getElementById("screen");
    if (firstNumber === "") {
        firstNumber = screen.value;
        screen.value = "";
    }
    screen.value += val;
}

function clearDisplay() {
    document.getElementById("screen").value = "";
    firstNumber = "";
}

function equalClick() {
    var screen = document.getElementById("screen");
    var secondNumber = screen.value;
    var result;

    if (firstNumber !== "") {
        result = eval(firstNumber + secondNumber);
        screen.value = result;
        firstNumber = "";
    } else {
        result = eval(screen.value);
        screen.value = result;
    }
}

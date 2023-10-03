var inputArray = [];
var screenArray = [];
var temp = "";
var result = "";

function writeSymbolToArray(symbol) {
    if(temp !== "") {
        screenArray = temp.split("");
        temp = "";
    }
    inputArray.push(symbol);
    screenArray.push(symbol);
    refresh();
}

function erase() {
    inputArray = [];
    screenArray = [];
    temp = "";
    result = "";
    refresh();
}

function calculate() {
    try {
        var expression = inputArray.join("").replace(/,/g, ".");
        expression = expression.replace(/%/g, "/100");
        expression = expression.replace(/ mod /g, "%");
        inputArray = [eval(expression).toString()];
        screenArray = inputArray;
        refresh();
        temp = inputArray.join("");
        screenArray = [];
    } catch (error) {
        screenArray = ["Error"];
        refresh();
        screenArray = [];
    }
}

function squareRoot() {
    inputArray = Math.sqrt(parseFloat(inputArray.join(""))).toString().split("");
    screenArray = inputArray;
    refresh();
}

function refresh() {
    document.getElementById("screen").value = screenArray.join("");
}
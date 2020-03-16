
function add()  {
    var addition = 8 + 4;
    document.getElementById("Add").innerHTML = "8 + 4 = " + addition
}

function subtract()  {
    var subtraction = 9 - 6;
    document.getElementById("Sub").innerHTML = "9 - 6 = " + subtraction;
}

function multiply()  {
    var multiplication = 4 * 4;
    document.getElementById("Mul").innerHTML = "4 x 4 = " + multiplication;
}

function divide()  {
    var division = 12 / 4;
    document.getElementById("Div").innerHTML = "12 / 4 = " + division;
}

function multi_op()  {
    var operation = 1 + (8 * 2) - (6 / 2);
    document.getElementById("Math").innerHTML = "1 + (8 * 2) - (6 / 2) =  " + operation;
}

function modulus_op()  {
    var remain = 14 % 5;
    document.getElementById("Remainder").innerHTML = "14 divided by 5 has a remainder of: " + remain;
}

function negate_op()  {
    var y = 14;
    document.getElementById("Neg").innerHTML = -y
}

var I = 7.5;
I++;
document.write(I);

var D = 4;
D--;
document.write(D);

window.alert(Math.random() * 50);

document.write(Math.ceil(6.019832));
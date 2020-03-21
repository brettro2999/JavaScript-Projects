function concSen()  {
    var p1 = "Hello ";
    var p2 = "there!";
    var entire = p1.concat(p2);
    document.getElementById("con").innerHTML = entire;
}

function slicem()  {
    var full = "Dogs are canine and cats are feline.";
    var part = full.slice(0,15);
    document.getElementById("slice").innerHTML = part;
}

function string_method()  {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_m()  {
    var X = 1523.432;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
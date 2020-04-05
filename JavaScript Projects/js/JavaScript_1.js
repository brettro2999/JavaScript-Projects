function gen_function()  {
    var gen_output;
    var gens = document.getElementById("gen_input").value;
    var gen_string = " is the generation you claim.";
    switch(gens) {
        case "The Greatest Gen":
            gen_output = "The Greatest Gen" + gen_string;
        break;
        case "Baby Boomers":
            gen_output = "Baby Boomers" + gen_string;
        break;
        case "Gen X":
            gen_output = "Gen X" + gen_string;
        break;
        case "Millennials":
            gen_output = "Millennials" + gen_string;
        break;
        case "Gen Z":
            gen_output = "Gen Z" + gen_string;
        break;
        default:
        gen_output = "Enter exactly as written on the list above.";
    }
    document.getElementById("generation").innerHTML = gen_output;
}

function class_function()  {
    var C = document.getElementsByClassName("click");
    C[0].innerHTML = "Success!";
}

var p = document.getElementById("canvas");
var ptx = p.getContext("2d");
var grd = ptx.createLinearGradient(0, 0, 150, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ptx.fillStyle = grd;
ptx.fillRect(20, 20, 120, 100);



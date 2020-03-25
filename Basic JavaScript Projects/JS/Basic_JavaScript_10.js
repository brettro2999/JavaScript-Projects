function call_loop()  {
    var digit = "";
    var y = 5;
    while (y > 0)  {
        digit += "<br>" + y;
        y--;
    }
    document.getElementById("loop").innerHTML = digit;
}

var instruments = ["keyboard", "bass", "electric guitar", "acoustic guitar", "accordian", "triangle"];
var content = "";
var i;
function for_loop()  {
    for (i = 0; i < instruments.length; i++)  {
        content += instruments[i] + "<br>"; 
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_function()  {
    var genres = [];
    genres[0] = "jazz";
    genres[1] = "pop";
    genres[2] = "country";
    genres[3] = "rock";
    document.getElementById("array").innerHTML = "Ya like " + genres[0] + "?";
    
}

function const_function()  {
    const television = {size:"50in", brand:"Vizio"};
    television.weight = "35lbs";
    document.getElementById("constant").innerHTML = "The weight of the " + television.brand + " is " + television.weight;
}

function let_function()  {
    var l = "chicken";
    document.write(l);
    {
        let l = "beef";
        document.write("<br>" + l);
    }
    document.write("<br>" + l);
}

let ufcfighter = {
    weight: "185 lbs ",
    height: "6 foot 1 inch ",
    age: "27 years old ",
    description : function()  {
        return "The fighter is " + this.weight + ", " + this.height + ", " + this.age;
    }

};
document.getElementById("object").innerHTML = ufcfighter.description();

var text = "";
var p;
for (p = 0; p < 15; p++) {
    if (p === 12) { break; }
    text += "The number is " + p + "<br>";
}
document.getElementById("break").innerHTML = text;


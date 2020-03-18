function Ride_Function()  {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_function()  {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()  {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Music(Artist, Genre, Song)  {
    this.Music_Artist = Artist;
    this.Music_Genre = Genre;
    this.Music_Song = Song;
}
var Bob = new Music("Led Zeppelin", "Classic Rock", "\"Stairway to Heaven\"");
var Kim = new Music("OneRepublic", "Pop Rock", "\"Stop and Stare\"");
function myFunction1()  {
    document.getElementById("New_and_This").innerHTML = 
    "Kim's favorite song is " + Kim.Music_Song + ", a " + Kim.Music_Genre + " song by " + Kim.Music_Artist;
}

function Nesting()  {
    document.getElementById("Nest_Func").innerHTML = countBy2();
    function countBy2()  {
        var start = 2
        function by2() {start += 2;}
        by2();
        return start;
    }
}
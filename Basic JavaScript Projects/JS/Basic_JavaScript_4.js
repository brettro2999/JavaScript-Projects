function car_dictionary()  {
    var Vehicle = {
        Make:"Nissan",
        Model:"Sentra",
        Year:"2014",
        Trim:"SV",
    };
    delete Vehicle.Model;
    document.getElementById("Dictionary").innerHTML = Vehicle.Model;
}
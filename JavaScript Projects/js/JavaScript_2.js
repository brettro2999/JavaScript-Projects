function validate()  {
    var x = document.forms["contact"]["name"].value;
    if (x == "")  {
        alert("Fill name");
        return false;
    }
}
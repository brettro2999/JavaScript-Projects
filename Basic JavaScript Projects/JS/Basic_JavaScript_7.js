W = 7
function add_numbers_1()  {
    var X = 10;
    document.write(15 + X + "<br>");
}

function add_numbers_2()  {
    console.log(X + W + "<br>");
}
add_numbers_1();
add_numbers_2();

function timeof_day()  {
    if (new Date().getHours() > 12)  {
    document.getElementById("greet").innerHTML = "Good Morning!";
    }
}

function question()  {
    if (10 > 5)  {
    document.getElementById("If").innerHTML = "I hope you knew 10 is greater than 5.";
    }
}

function age_func()  {
    Age = document.getElementById("toOrder").value;
    if (Age >= 16) {
        order = "You can order this item.";
    }
    else  {
        order = "You cannot order this item.";
    }
    document.getElementById("age_entered").innerHTML = order;
}

function Time_function()  {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is the afternoon.";
    }
    else if (Time > 12 == Time < 18)  {
        Reply = "It is the afternoon.";
    }
    else  {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


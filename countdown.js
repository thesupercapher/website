//Countdown
var countDownDate = new Date("Nov 13, 2020 13:11:20").getTime();
var full_Count = "";
//Updating the countdown every one second
var countdown_interval = setInterval(function() {

    //Getting the current date
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    //Calculating days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    if(Math.floor(days / 10) < 1)
        full_Count += "0" + days + "days ";
    else
        full_Count += days + "days "; 

    if(Math.floor(hours / 10) < 1)
        full_Count += "0" + hours + "hrs ";
    else
        full_Count += hours + "hrs ";
    
    if(Math.floor(minutes / 10) < 1)
        full_Count += "0" + minutes + "min ";
    else
        full_Count += minutes + "min ";

    if(Math.floor(seconds / 10) < 1)
        full_Count += "0" + seconds + "sec";
    else
        full_Count += seconds + "sec";


    document.getElementById("counter").innerHTML = full_Count;
    full_Count = "";
    //Terminating the coutdown
    if (distance < 1) {
        clearInterval(countdown_interval);
        document.getElementById("counter").innerHTML = "0";
    }
}, 1000);
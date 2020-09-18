//getting the  year
function getYear() {
    var the_date = new Date();
    document.getElementById("year").innerHTML = the_date.getFullYear();
}
getYear();

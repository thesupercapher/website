var closebuttons = document.getElementsByClassName("close");
var i;

for(i = 0; i < closebuttons.length; i++) {
    closebuttons[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
}
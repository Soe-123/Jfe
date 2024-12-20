var modal = document.getElementById('myModalfour');

var btn = document.getElementById("myBtnfour");

var span = document.getElementsByClassName("closefour")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
var modal = document.getElementById('myModalthree');

var btn = document.getElementById("myBtnthree");

var span = document.getElementsByClassName("closethree")[0];

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
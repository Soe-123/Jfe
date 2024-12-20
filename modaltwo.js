var modal = document.getElementById('myModaltwo');

var btn = document.getElementById("myBtntwo");

var span = document.getElementsByClassName("closetwo")[0];

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
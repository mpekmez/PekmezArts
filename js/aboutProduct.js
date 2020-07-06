
document.addEventListener('DOMContentLoaded', function() {

    var drawingElement = document.getElementById('drawing');

 
    function displaySara() {
        document.getElementById('original').style.display = "block";
    }

    function hideSara() {
        document.getElementById('drawing').style.display = "none";
    }

    drawingElement.addEventListener('click', displaySara);
    drawingElement.addEventListener('click', hideSara);



});

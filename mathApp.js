var button = document.getElementById('solve');

function getElementByClass(id,className){
    var el = document.getElementById(id);
    el.className = className;
}
function Quadratic() {
    var A = document.getElementbyId('a').value;
    var B = document.getElementById('b').value;
    var C = document.getElementById('c').value;
    var x1 = ((-B) + Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    var x2 = ((-B) - Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    if (isNaN(A) || isNaN(B) || isNaN(C) == true) {
        getElementByClass("solutions", "invalid");
        return "You entered an incorrect value for either A, B, or C. Please try again.";

    } else {
        return "The roots to the quadratic are" x1 "&" x2;
    }
}
function displayAnswer(){
    return document.getElementById('solutions').textContent = Quadratic();
}
button.addEventListener('click', Quadratic);

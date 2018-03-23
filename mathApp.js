var button = document.getElementById('solve');

function Quadratic() {
    var A = document.getElementbyId('a').value;
    var B = document.getElementById('b').value;
    var C = document.getElementById('c').value;
    var x1 = ((-B) + Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    var x2 = ((-B) - Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    if (isNaN(A) || isNaN(B) || isNaN(C) == true) {
        document.getElementById('solve').textContent = "You entered an incorrect value for either A, B, or C. Please try again."
    } else {
        document.getElementById('solutions').textContent = "The roots to the quadratic are" x1 "&" x2;
    }
}
button.addEventListener('click', Quadratic);

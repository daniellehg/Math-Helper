var button = document.getElementById('solve')

function Quadratic() {
    var A = document.getElementbyId('a');
    var B = document.getElementById('b');
    var C = document.getElementById('c');
    var x1 = ((0 - B) + Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    var x2 = ((0 - B) - Math.sqrt((B * B) - (4 * A * C))) / 2 * A;
    if (isNaN(A || B || C) = true) {
        document.getElementById('solve').textContent = "This is not a number."
    } else {
        document.getElementById('solutions').textContent = x1, "&", x2;
    }
}
button.addEventListener('click', Quadratic);

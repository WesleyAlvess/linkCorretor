
window.onload = function() {
    var button = document.querySelector('#btn-about button');
    button.addEventListener('click', function() {
        button.classList.add('animate');
        // Remove the animate class after the animation ends
        button.addEventListener('animationend', function() {
            button.classList.remove('animate');
        }, { once: true });
    });
};
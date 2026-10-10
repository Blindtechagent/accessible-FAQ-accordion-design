let buttons = document.querySelectorAll('button');
let images = document.querySelectorAll('img');
images.forEach((image) => {
    image.setAttribute('aria-hidden', 'true'); //for screen readers only
});

buttons.forEach((btn) => {
    let answer = btn.nextElementSibling;
    let icon = btn.querySelector('img');
    btn.addEventListener('click', () => {
        if (answer.style.display == 'block') {
            announce('Answer collapsed');
            answer.style.display = 'none';
            icon.src = './images/icon-plus.svg';
        } else {
            announce('Answer expanded');
            answer.style.display = 'block';
            icon.src = './images/icon-minus.svg';
        }
    });
});

function announce(message) {
    document.getElementById('announcement').textContent = message;
    setTimeout(() => {
        document.getElementById('announcement').textContent = '';
    }, 2000);
}
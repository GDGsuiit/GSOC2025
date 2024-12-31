// Get references to the members button, modal, and close button
const membersButton = document.getElementById('membersButton');
const membersModal = document.getElementById('membersModal');
const closeModal = document.getElementById('closeModal');

membersButton.addEventListener('click', () => {
    membersModal.style.display = 'flex';
    setTimeout(() => {
        membersModal.classList.add('show');
    }, 10);
});

closeModal.addEventListener('click', () => {
    membersModal.classList.remove('show');
    setTimeout(() => {
        membersModal.style.display = 'none';
    }, 300);
});

window.addEventListener('click', (event) => {
    if (event.target === membersModal) {
        membersModal.classList.remove('show');
        setTimeout(() => {
            membersModal.style.display = 'none';
        }, 300);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const title = "Welcome to the Opensource Room";
    const subline = "Empowering innovation and collaboration";

    const titleElement = document.querySelector('.container h1');
    const sublineElement = document.querySelector('.container .subline');

    function typeWriter(element, text, delay) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    titleElement.textContent = '';
    sublineElement.textContent = '';

    typeWriter(titleElement, title, 100);
    setTimeout(() => {
        typeWriter(sublineElement, subline, 100);
    }, title.length * 100 + 500);
});
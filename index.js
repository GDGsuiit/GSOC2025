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
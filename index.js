const membersButton = document.getElementById('membersButton');
const membersModal = document.getElementById('membersModal');
const closeModal = document.getElementById('closeModal');
membersButton.addEventListener('click', () => {
    membersModal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
    membersModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === membersModal) {
        membersModal.style.display = 'none';
    }
});

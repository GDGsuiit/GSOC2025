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

// Filter members based on search input
searchMembers.addEventListener('input', function() {
    const filter = searchMembers.value.toLowerCase();
    const membersList = document.querySelectorAll('.card');
    
    membersList.forEach(function(member) {
        const memberName = member.textContent.toLowerCase();
        if (memberName.includes(filter)) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    });
});
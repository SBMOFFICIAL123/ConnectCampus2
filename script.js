// Show main section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Show sub-tabs inside Complaints
function showSubTab(tabId) {
    document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Complaint form submission
document.getElementById('complaintForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('complaintMsg').innerHTML = 
        Thank you, <b>${name}</b>. Your complaint has been recorded.;
    this.reset();
});

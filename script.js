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
// Main tab switching
function switchTab(tabId, linkElement) {
    // Hide all sections
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    // Show clicked section
    document.getElementById(tabId).classList.add('active');

    // Highlight active nav link
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    linkElement.classList.add('active');
}

// Sub-tab switching
function switchSubTab(subTabId, buttonElement) {
    // Hide all sub-tabs
    document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
    // Show selected sub-tab
    document.getElementById(subTabId).classList.add('active');

    // Highlight active button
    document.querySelectorAll('.sub-tabs button').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
}

// Complaint form submission
document.getElementById('complaintForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('complaintMsg').innerHTML = Thank you, <b>${name}</b>. Your complaint has been recorded.;
    this.reset();
});

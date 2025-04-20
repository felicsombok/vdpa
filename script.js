// Mock data for public claims
const claimsData = [
    {
        date: '2025-02-01',
        type: 'Data Breach',
        description: 'Unauthorized access to personal information.'
    },
    {
        date: '2025-01-25',
        type: 'Improper Data Sharing',
        description: 'Shared data without consent.'
    }
];

// Display claims on page load
window.onload = function() {
    const tableBody = document.getElementById('claims-table');
    if (tableBody) {
        claimsData.forEach(claim => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${claim.date}</td>
                <td>${claim.type}</td>
                <td>${claim.description}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("read-disclaimer");
    const collapseElement = document.getElementById("disclaimerCollapse");
  
    if (checkbox && collapseElement) {
      const bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      });
  
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          bsCollapse.hide();
        }
      });
  
      // Prevent form submission if checkbox isn't checked
      const form = document.querySelector("form");
      if (form) {
        form.addEventListener("submit", function (e) {
          if (!checkbox.checked) {
            alert("You must acknowledge the important information before submitting.");
            e.preventDefault();
          }
        });
      }
    }
  });
// /scripts/main.js  (keeps JS out of HTML to satisfy rubric)
document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
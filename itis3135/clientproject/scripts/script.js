// --- IMAGE ZOOM MODAL ---
const zoomImages = document.querySelectorAll(".zoomable");

zoomImages.forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("img-modal");
        modal.innerHTML = `<img src="${img.src}" class="modal-img">`;
        document.body.appendChild(modal);

        modal.addEventListener("click", () => modal.remove());
    });
});


// --- DARK MODE BUTTON ---
function attachDarkModeButton() {
    const toggleBtn = document.getElementById("darkToggle");

    if (!toggleBtn) {
        // keep checking until the header loads
        setTimeout(attachDarkModeButton, 200);
        return;
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    console.log("Dark mode toggle is active!");
}

attachDarkModeButton();

document.querySelectorAll(".rating").forEach(rating => {
    
    const stars = rating.querySelectorAll("span");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            const selected = parseInt(star.dataset.star);
            
            // Update active stars
            stars.forEach(s => {
                s.classList.toggle("active", parseInt(s.dataset.star) <= selected);
            });

            // Save rating to element (in case you want to use it later)
            rating.dataset.rating = selected;
            console.log("Rating set to:", selected);
        });
    });
});

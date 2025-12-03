document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("introForm");
    const submitBtn = document.getElementById("submitButton");
    const clearBtn = document.getElementById("clear-all");
    const outputDiv = document.getElementById("outputDiv");
    const pageTitle = document.getElementById("pageTitle");
    const submitMsg = document.getElementById("submitMsg");

    // ⭐ SUBMIT BUTTON — builds the introduction page
    submitBtn.addEventListener("click", () => {

        if (!ackCheckbox.checked) {
            alert("You must acknowledge the statement before submitting.");
            return;
        }

        // Get image (uploaded or preview)
        const imgFile = introImage.files[0];
        const imgURL = imgFile ? URL.createObjectURL(imgFile) : loadImagePreview.src;

        // ⭐ Output HTML (copied EXACTLY from your introduction.html style)
        const outputHTML = `
        <figure>
            <img src="${imgURL}" alt="${imageCaption.value}" width="200">
            <figcaption>${firstName.value} ${lastName.value}</figcaption>
        </figure>

        <p><strong>Personal Background:</strong> ${personalBackground.value}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground.value}</p>
        <p><strong>Academic Background:</strong> ${academicBackground.value}</p>
        <p><strong>Background in the Course:</strong> ${courseBackground.value}</p>
        <p><strong>Primary Computer Platform:</strong> ${primaryComputer.value}</p>
        <p><strong>Courses I’m Taking:</strong> ${coursesList.value}.</p>
        <p><strong>Funny Story:</strong> ${funFact.value}</p>
        <p><strong>Something Else:</strong> ${shareThing.value}</p>

        <p style="margin-top:2rem;">
            <a id="resetFormLink" href="#" style="color:#5bc0be; font-weight:bold;">
                Click here to reset the form
            </a>
        </p>
        `;

        // ⭐ Update page title
        pageTitle.textContent = "Introduction";

        // ⭐ Hide “Please submit the form below.”
        submitMsg.style.display = "none";

        // Hide form and show output
        form.style.display = "none";
        outputDiv.innerHTML = outputHTML;

        // ⭐ Reset link (inside printed introduction)
        document.getElementById("resetFormLink").addEventListener("click", (e) => {
            e.preventDefault();

            form.reset();
            loadImagePreview.src = "images/linkedin.jpg";

            // Restore UI
            pageTitle.textContent = "Introduction Form";
            submitMsg.style.display = "block";
            outputDiv.innerHTML = "";
            form.style.display = "block";
        });
    });

    // ⭐ CLEAR BUTTON — empties ALL fields but keeps the form visible
    clearBtn.addEventListener("click", () => {

        // Clear basic input fields
        form.querySelectorAll("input[type='text'], input[type='url'], textarea")
            .forEach((el) => { el.value = ""; });

        // Uncheck checkboxes
        form.querySelectorAll("input[type='checkbox']")
            .forEach((el) => { el.checked = false; });

        // Clear uploaded file
        introImage.value = "";

        // Restore default preview image
        loadImagePreview.src = "images/linkedin.jpg";
    });

    // ⭐ RESET BUTTON — native reset AND restore default image
    form.addEventListener("reset", () => {
        setTimeout(() => {
            loadImagePreview.src = "images/linkedin.jpg";
        }, 0);
    });

});

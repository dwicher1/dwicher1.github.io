document.addEventListener("DOMContentLoaded", () => {

    const generateBtn = document.getElementById("generateJson");

    generateBtn.addEventListener("click", () => {

        // Detect uploaded image OR use existing preview
        const imgFile = introImage.files[0];
        const imgURL = imgFile ? URL.createObjectURL(imgFile) : loadImagePreview.src;

        // Build JSON object
        const jsonObject = {
            firstName: firstName.value,
            preferredName: preferredName.value,
            middleInitial: middleInitial.value,
            lastName: lastName.value,
            divider: divider.value,
            mascotAdjective: mascotAdjective.value,
            mascotAnimal: mascotAnimal.value,
            image: imgURL,
            imageCaption: imageCaption.value,
            personalStatement: personalStatement.value,
            personalBackground: personalBackground.value,
            professionalBackground: professionalBackground.value,
            primaryComputer: primaryComputer.value,
            funFact: funFact.value,
            shareThing: shareThing.value,
            quote: quote.value,
            quoteAuthor: quoteAuthor.value,
            links: [
                { name: "CLT Web", href: cltWeb.value },
                { name: "GitHub", href: github.value },
                { name: "GitHub.io", href: githubIo.value },
                { name: "freeCodeCamp", href: freeCodeCamp.value },
                { name: "LinkedIn", href: linkedIn.value }
            ]
        };

        // Convert to formatted JSON
        const jsonText = JSON.stringify(jsonObject, null, 2);

        // Insert JSON into <pre><code>
        const codeBlock = document.getElementById("jsonCode");
        codeBlock.textContent = jsonText;

        // Show bottom JSON section
        const jsonOutput = document.getElementById("jsonOutput");
        jsonOutput.style.display = "block";

        // Highlight it
        if (window.hljs) {
            hljs.highlightElement(codeBlock);
        }
    });
});

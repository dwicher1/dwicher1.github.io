document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("generateHtml");
    const htmlOutput = document.getElementById("htmlOutput");
    const codeBox = document.getElementById("htmlCode");

    btn.addEventListener("click", () => {

        // Make sure form fields exist
        if (!firstName || !lastName) {
            alert("Form elements are missing or named incorrectly.");
            return;
        }

        // Handle image
        let imgFile = imgUpload.files[0];
        let imgURL = imgFile ? URL.createObjectURL(imgFile) : "";

        // Build HTML string
        const generatedHTML = `
<h2>Introduction</h2>
<h3>${firstName.value} ${middleInitial.value}. "${prefName.value}" ${lastName.value} ${mascotSymbol.value} ${charMascot.value} ${animalMascot.value}</h3>
<figure>
    <img src="${imgURL}" alt="${imgCaption.value}">
    <figcaption>${imgCaption.value}</figcaption>
</figure>
<ul>
    <li><strong>Personal Statement:</strong> ${perStatement.value}</li>
    <li><strong>Personal Background:</strong> ${perBackground.value}</li>
    <li><strong>Professional Background:</strong> ${profBackground.value}</li>
    <li><strong>Primary Computer Platform:</strong> ${PC.value}</li>
    <li><strong>Courses I'm Taking:</strong> (Same as intro page)</li>
    <li><strong>Funny / Interesting thing:</strong> ${funOrInt.value}</li>
    <li><strong>Anything Else:</strong> ${share.value}</li>
    <li><strong>Quote:</strong> "${quote.value}" — <em>${author.value}</em></li>
</ul>
<nav>
    <a href="${home.value}" target="_blank">CLT Web</a> ||
    <a href="${GitHub.value}" target="_blank">GitHub</a> ||
    <a href="${GitHubio.value}" target="_blank">GitHub.io</a> ||
    <a href="${FCC.value}" target="_blank">freeCodeCamp</a> ||
    <a href="${LinkedIn.value}" target="_blank">LinkedIn</a>
</nav>
`;

        // Show the output section
        htmlOutput.style.display = "block";

        // Put HTML in code block (escaped)
        codeBox.textContent = generatedHTML;

        // Highlight formatting
        hljs.highlightElement(codeBox);

        // Change headline text
        document.querySelector("h2").textContent = "Introduction HTML";
    });
});

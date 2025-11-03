document.addEventListener("DOMContentLoaded", () => {

    const generateBtn = document.getElementById("generateHtml");

    generateBtn.addEventListener("click", () => {

        // Collect image (uploaded or default)
        const imgFile = introImage.files[0];
        const imgURL = imgFile ? URL.createObjectURL(imgFile) : loadImagePreview.src;

        // Build literal HTML text
        const htmlText =
`<h2>Introduction HTML</h2>
<h3>${firstName.value} ${middleInitial.value}. "${preferredName.value}" ${lastName.value} ${divider.value} ${mascotAdjective.value} ${mascotAnimal.value}</h3>
<figure>
  <img src="${imgURL}" alt="${imageCaption.value}" />
  <figcaption>${imageCaption.value}</figcaption>
</figure>
<ul>
  <li><strong>Personal Statement:</strong> ${personalStatement.value}</li>
  <li><strong>Personal Background:</strong> ${personalBackground.value}</li>
  <li><strong>Professional Background:</strong> ${professionalBackground.value}</li>
  <li><strong>Primary Computer:</strong> ${primaryComputer.value}</li>
  <li><strong>Funny Fact:</strong> ${funFact.value}</li>
  <li><strong>Something to Share:</strong> ${shareThing.value}</li>
  <li><strong>Quote:</strong> "${quote.value}" — <i>${quoteAuthor.value}</i></li>
</ul>
<nav>
  <a href="${cltWeb.value}" target="_blank">CLT Web</a> ||
  <a href="${github.value}" target="_blank">GitHub</a> ||
  <a href="${githubIo.value}" target="_blank">GitHub.io</a> ||
  <a href="${freeCodeCamp.value}" target="_blank">freeCodeCamp</a> ||
  <a href="${linkedIn.value}" target="_blank">LinkedIn</a>
</nav>`;

        // INSERT literal HTML into <code>
        const codeBlock = document.getElementById("htmlCode");
        codeBlock.textContent = htmlText;

        // SHOW the <section>
        document.getElementById("htmlOutput").style.display = "block";

        // Trigger highlight.js syntax coloring
        if (window.hljs) { hljs.highlightElement(codeBlock); }

        // Change the H2 text from "Introduction Form" ➜ "Introduction HTML"
        document.querySelector("h2").textContent = "Introduction HTML";
    });
});

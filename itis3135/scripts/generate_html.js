document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("generateHtml").addEventListener("click", () => {

        const imgFile = introImage.files[0];
        const imgURL = imgFile ? URL.createObjectURL(imgFile) : loadImagePreview.src;

        const htmlText =
`<h2>Introduction</h2>
<figure>
  <img src="${imgURL}" alt="${imageCaption.value}" width="200">
  <figcaption>${firstName.value} ${lastName.value}</figcaption>
</figure>

<p><strong>Personal Background:</strong> ${personalBackground.value}</p>
<p><strong>Professional Background:</strong> ${professionalBackground.value}</p>
<p><strong>Primary Computer Platform:</strong> ${primaryComputer.value}</p>
<p><strong>Funny Story:</strong> ${funFact.value}</p>
<p><strong>Something Else:</strong> ${shareThing.value}</p>`;

        document.getElementById("htmlOutput").style.display = "block";

        const block = document.getElementById("htmlCode");
        block.textContent = htmlText;

        if (window.hljs) hljs.highlightElement(block);
    });

});

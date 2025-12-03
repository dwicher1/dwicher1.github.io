document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("generateJson").addEventListener("click", () => {

        let imgSrc = introImage.files.length > 0
            ? URL.createObjectURL(introImage.files[0])
            : loadImagePreview.src;

        const jsonObject = {
            firstName: firstName.value,
            lastName: lastName.value,
            image: imgSrc,
            imageCaption: imageCaption.value,
            personalBackground: personalBackground.value,
            professionalBackground: professionalBackground.value,
            primaryComputer: primaryComputer.value,
            funFact: funFact.value,
            shareThing: shareThing.value
        };

        const jsonText = JSON.stringify(jsonObject, null, 2);

        document.getElementById("jsonOutput").style.display = "block";

        const block = document.getElementById("jsonCode");
        block.textContent = jsonText;

        if (window.hljs) hljs.highlightElement(block);
    });

});

document.addEventListener("DOMContentLoaded", () => {

  // 🎯 Cache all relevant form elements
  const el = (id) => document.getElementById(id);

  const data = {
    first: el("firstName"),
    mid: el("middleInitial"),
    pref: el("prefName"),
    last: el("lastName"),
    ackText: el("ackStatement"),
    ackCheck: el("ackCheckbox"),
    ackDate: el("ackDate"),
    adj: el("charMascot"),
    animal: el("animalMascot"),
    symbol: el("mascotSymbol"),
    photo: el("imgUpload"),
    caption: el("imgCaption"),
    statement: el("perStatement"),
    personal: el("perBackground"),
    professional: el("profBackground"),
    pc: el("PC"),
    quote: el("quote"),
    author: el("author"),
    fun: el("funOrInt"),
    share: el("share"),
    links: {
      home: el("home"),
      git: el("GitHub"),
      gitio: el("GitHubio"),
      linked: el("LinkedIn"),
      fcc: el("FCC")
    },
    form: el("byo-form"),
    submit: el("submitButton"),
    reset: el("reset"),
    clear: el("clear-all"),
    courseArea: el("courses-taking"),
    addCourse: el("add-course"),
  };

  const output = el("outputDiv");

  // 🧱 Helper: Build HTML for courses dynamically
  function renderCourseList() {
    const courses = data.courseArea.querySelectorAll(".course-entry");
    let html = "<ul>";
    courses.forEach((c) => {
      const code = c.querySelector(".course-code").value.trim();
      const reason = c.querySelector(".course-reason").value.trim();
      if (code) html += `<li><b>${code}</b>${reason ? ` — ${reason}` : ""}</li>`;
    });
    html += "</ul>";
    return html;
  }

  // ➕ Add new course block
  function addCourse(defaultText = "") {
    const div = document.createElement("div");
    div.className = "course-entry";
    div.innerHTML = `
      <label>Course:</label>
      <input type="text" class="course-code" placeholder="e.g. ITSC 2214" value="${defaultText}">
      <textarea class="course-reason" placeholder="Reason for taking this course"></textarea>
      <button type="button" class="remove-course">Remove</button>
      <hr>
    `;
    div.querySelector(".remove-course").addEventListener("click", () => div.remove());
    data.courseArea.appendChild(div);
  }

  // 🔁 Default courses
  ["ITIS3135", "ITSC2181", "CJUS2340", "MATH2164"].forEach(addCourse);
  data.addCourse.addEventListener("click", () => addCourse(""));

  // 🧹 Clear everything
  data.clear.addEventListener("click", () => {
    if (!confirm("Clear all fields and reset form?")) return;
    data.form.reset();
    data.courseArea.innerHTML = "";
    ["photo", "caption"].forEach((f) => (data[f].value = ""));
  });

  // 📅 Checkbox date autofill
  data.ackCheck.addEventListener("change", () => {
    data.ackDate.value = data.ackCheck.checked
      ? new Date().toLocaleDateString("en-US")
      : "";
  });

  // 🚫 Prevent default submit
  data.form.addEventListener("submit", (e) => e.preventDefault());

  // 🧾 Submit button logic
  data.submit.addEventListener("click", (e) => {
    e.preventDefault();

    const required = [
      "first", "mid", "last", "adj", "animal", "symbol", "statement",
      "personal", "professional", "quote", "author"
    ];

    // validation
    const missing = required.filter((key) => !data[key].value.trim());
    if (missing.length) {
      alert(`Please complete all required fields:\n\n${missing.join(", ")}`);
      return;
    }
    if (!data.ackCheck.checked) {
      alert("Please acknowledge the statement before submitting.");
      return;
    }
    const file = data.photo.files[0];
    if (!file) {
      alert("Please upload a valid image file.");
      return;
    }
    const validTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      alert("Image must be a PNG or JPG format.");
      return;
    }

    // 🌐 Build new intro layout
    const fullName = `${data.first.value} ${data.mid.value}. "${data.pref.value}" ${data.last.value}`;
    const mascot = `${data.symbol.value} ${data.adj.value} ${data.animal.value}`;
    const imgURL = URL.createObjectURL(file);

    output.innerHTML = `
      <section>
        <h2>Introduction</h2>
        <h3>${fullName} ${mascot}</h3>
        <figure>
          <img src="${imgURL}" alt="${data.caption.value}" style="width:220px; border-radius:8px; border:2px solid #5bc0be;">
          <figcaption>${data.caption.value}</figcaption>
        </figure>
        <ul>
          <li><b>Personal Statement:</b> ${data.statement.value}</li>
          <li><b>Personal Background:</b> ${data.personal.value}</li>
          <li><b>Professional Background:</b> ${data.professional.value}</li>
          <li><b>Computer:</b> ${data.pc.value}</li>
          <li><b>Courses:</b> ${renderCourseList()}</li>
          <li><b>Fun Fact:</b> ${data.fun.value}</li>
          <li><b>Something to Share:</b> ${data.share.value}</li>
          <li><b>Quote:</b> “${data.quote.value}” — <i>${data.author.value}</i></li>
        </ul>
        <nav style="margin-top: 20px;">
          <a href="${data.links.home.value}" target="_blank">CLT Web</a> ~
          <a href="${data.links.git.value}" target="_blank">GitHub</a> ~
          <a href="${data.links.gitio.value}" target="_blank">GitHub.io</a> ~
          <a href="${data.links.fcc.value}" target="_blank">FreeCodeCamp</a> ~
          <a href="${data.links.linked.value}" target="_blank">LinkedIn</a>
        </nav>
      </section>
      <button id="resetIntro" style="margin-top:20px;">Reset Form</button>
    `;

    // Hide form
    data.form.style.display = "none";

    // Reset form visibility
    document.getElementById("resetIntro").addEventListener("click", () => {
      output.innerHTML = "";
      data.form.style.display = "block";
    });
  });
});

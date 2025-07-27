document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    dob: document.getElementById("dob").value.trim(),
    address: document.getElementById("address").value.trim(),
    qualification: document.getElementById("qualification").value.trim(),
    experience: document.getElementById("experience").value.trim(),
    skills: document.getElementById("skills").value.trim()
  };

  for (const key in data) {
    if (!data[key]) {
      alert("Please fill all fields.");
      return;
    }
    localStorage.setItem(key, data[key]);
  }

  window.location.href = "resume.html";
});

document.getElementById('cvForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value;

  const name = getVal('fullName');
  const email = getVal('email');
  const phone = getVal('phone');
  const address = getVal('address');
  const dob = getVal('dob');
  const nationality = getVal('nationality');
  const objective = getVal('objective');
  const skills = getVal('skills').split(',').map(skill => skill.trim());
  const languages = getVal('languages').split(',').map(lang => lang.trim());
  const experience = getVal('experience');
  const education = getVal('education');

  const output = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>DOB:</strong> ${dob} | <strong>Nationality:</strong> ${nationality}</p>

    <div class="cv-section">
      <h3>Objective</h3>
      <p>${objective}</p>
    </div>

    <div class="cv-section">
      <h3>Skills</h3>
      <ul>${skills.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>

    <div class="cv-section">
      <h3>Languages</h3>
      <ul>${languages.map(l => `<li>${l}</li>`).join('')}</ul>
    </div>

    <div class="cv-section">
      <h3>Experience</h3>
      <p>${experience.replace(/\n/g, '<br>')}</p>
    </div>

    <div class="cv-section">
      <h3>Education</h3>
      <p>${education.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  document.getElementById('cvOutput').innerHTML = output;
});

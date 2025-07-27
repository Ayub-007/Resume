document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value;

  const resumeData = {
    name: getVal('name'),
    email: getVal('email'),
    phone: getVal('phone'),
    dob: getVal('dob'),
    address: getVal('address'),
    qualification: getVal('qualification'),
    experience: getVal('experience'),
    projects: getVal('projects'),
    languages: getVal('languages').split(',').map(l => l.trim()),
    achievements: getVal('achievements'),
    skills: getVal('skills').split(',').map(s => s.trim())
  };

  // Save data to localStorage
  localStorage.setItem('resumeData', JSON.stringify(resumeData));

  // Redirect to resume page
  window.location.href = 'resume.html';
});

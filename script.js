var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var EducationElement = document.getElementById('Education');
    var ExperienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('Skills');
    if (nameElement && emailElement && phoneElement && EducationElement && ExperienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var Phone = phoneElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var skill = skillsElement.value;
    }
    var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong>".concat(nameElement.value, "</p>\n    <p><strong>Email:</strong>").concat(emailElement.value, "</p>\n      <p><strong>Phone Number:</strong>").concat(phoneElement.value, "</ps> \n        \n        <h3>Education</h3> \n        <p>").concat(EducationElement.value, "</p>\n        <p>").concat(ExperienceElement.value, "</p>\n        <p>").concat(skillsElement.value, "</p> ");
    var resumeOutputElement = document.getElementById('resume-display');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The Resume Output Elements Are Missing');
    }
});
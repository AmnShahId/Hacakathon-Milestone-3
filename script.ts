document.getElementById('resume-form')?.addEventListener('submit' , function(event){
    event.preventDefault();

    const nameElement = document.getElementById('name')as HTMLInputElement
    const emailElement= document.getElementById('email')as HTMLInputElement
    const phoneElement = document.getElementById('phone')as HTMLInputElement
    const EducationElement = document.getElementById('Education')as HTMLInputElement
    const ExperienceElement = document.getElementById('Experience')as HTMLInputElement
    const skillsElement = document.getElementById('Skills')as HTMLInputElement



if(nameElement && emailElement && phoneElement  && EducationElement  && ExperienceElement  && skillsElement)
{
    const name = nameElement.value;
    const email = emailElement.value;
    const Phone = phoneElement.value;
    const Education = EducationElement.value;
    const Experience = ExperienceElement.value;
    const skill = skillsElement.value;
}






    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong>${nameElement.value}</p>
    <p><strong>Email:</strong>${emailElement.value}</p>
      <p><strong>Phone Number:</strong>${phoneElement.value}</ps> 
        
        <h3>Education</h3> 
        <p>${EducationElement.value}</p>
        <p>${ExperienceElement.value}</p>
        <p>${skillsElement.value}</p> `;

        const resumeOutputElement = document.getElementById('resume-display')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }
        else{
            console.error('The Resume Output Elements Are Missing')
        }
       
})

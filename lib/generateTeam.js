const generateManager = (manager) => {
  let managerSection = `
  Manager
  ${manager.name}
  ${manager.id}
  ${manager.email}
  ${manager.office}`;
  
  return managerSection;
}

const generateEngineerHTML = (engineers) => {
  let engineerSection = ``;
  engineers.forEach(element => {
    let html = `
    ${element.type}
    ${element.name}
    ${element.id}
    ${element.email}
    ${element.github}`;
    
    engineerSection += html;
  });
  return engineerSection;
}

const generateInternHTML = (interns) => {
  let internSection = ``;
  interns.forEach(element => {
    let html = `
    ${element.type}
    ${element.name}
    ${element.id}
    ${element.email}
    ${element.school}`;
    
    internSection += html;
  });
  return internSection;
}

module.exports = {
  generateManager,
  generateEngineerHTML,
  generateInternHTML
}
const generateManager = (manager) => {
  let managerSection = `
    <div class="card col-3 col-s-4">
      <header class="header">
        <h2 class="col-12">${manager.name}</h2>
        <h3 class="col-12">Team Manager</h3>
      </header>
      <p>Emplyee Id: ${manager.id}</p>
      <p>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
      <p>Office: ${manager.office}</p>
    </div>`;
  
  return managerSection;
}

const generateEngineerHTML = (engineers) => {
  let engineerSection = ``;
  engineers.forEach(element => {
    let html = `
    <div class="card col-3 col-s-4">
      <header class="header">
        <h2 class="col-12">${element.name}</h2>
        <h3 class="col-12">Engineer</h3>
      </header>
      <p>Emplyee Id: ${element.id}</p>
      <p>Email: <a href='mailto:${element.email}'>${element.email}</a></p>
      <p>GitHub: <a href='https://github.com/${element.github}'>github.com/${element.github}</a></p>
    </div>`;
    
    engineerSection += html;
  });
  return engineerSection;
}

const generateInternHTML = (interns) => {
  let internSection = ``;
  interns.forEach(element => {
    let html = `
    <div class="card col-3 col-s-4">
      <header class="header">
        <h2 class="col-12">${element.name}</h2>
        <h3 class="col-12">Intern</h3>
      </header>
      <p>Emplyee Id: ${element.id}</p>
      <p>Email: <a href='mailto:${element.email}'>${element.email}</a></p>
      <p>School: ${element.school}</p>
    </div>`;
    
    internSection += html;
  });
  return internSection;
}

module.exports = {
  generateManager,
  generateEngineerHTML,
  generateInternHTML
}
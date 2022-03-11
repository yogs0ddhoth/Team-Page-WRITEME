
const generateHTML = (managerSection, engineerSection, internSection) => {
  let HTML = `
  ${managerSection}
  ${engineerSection}
  ${internSection}`;

  return HTML;
}

module.exports = generateHTML;
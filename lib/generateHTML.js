const generateHTML = (managerSection, engineerSection, internSection) => {
  let HTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="./styles/reset.css" />
    <link rel="stylesheet" href="./styles/res-grid.css">
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <header class="main-header">
      <h1>Team Page</h1>
    </header>
  
    <main class="container">
      ${managerSection}
      ${engineerSection}
      ${internSection}
    </main>
  </body>
  </html>`;
  return HTML;
}

module.exports = generateHTML;
const fs = require('fs');
const inquirer = require('./npm/node_modules/inquirer');

function generateReadme(answers) {
    return `
# ${answers.title} | ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [License](#license)
- [Tests](#tests)

## Installation
${answers.install}

## Usage
${answers.usage}

## License

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

This application uses the ${answers.license} license.

## Contributing
👪 ${answers.credits}

## Tests
${answers.test}

## Questions
${answers.question}<br />
<br />
Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
Email me with any questions: ${answers.email}<br /><br />
    `;
  }

// Prompt to ask user questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title',
          },
          {
            type: 'input',
            name: 'desc',
            message: 'Description',
          },
          {
            type: 'input',
            name: 'install',
            message: 'Installation',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Usage',
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Credits and Contribution',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Testing Instructions',
          },
          {
              type: 'list',
              name: 'license',
              message: 'Choose a License',
              choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
          },
          {
            type: 'input',
            name: 'question',
            message: 'What to do if someone has a question?',
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter in your email',
          },
          {
              type: 'input',
              name: 'github',
              message: 'Enter your github Username',
        },
    ])
    .then((response) => {
    //Response is now a global variable
    var answers = response;
    //console.log('these are the answers: \n' + answers)

    //Creates the readme function into a variable
    const readMeContent = generateReadme(answers);

    //Creates readme file 
    fs.writeFile('./testing/README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your ReadMe!')
    );
    });
;


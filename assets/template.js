function renderLicense() {

}

const generateReadMe = (answers) => {
    console.log(answers)

    return `# ${answers.title}

## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
// - Bruh

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Features
${answers.features}

## Contribute
${answers.contribute}
## Tests
${answers.tests}
`}

module.exports = generateReadMe;
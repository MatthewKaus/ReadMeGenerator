// License






function renderLicenseBadge(license) {
    // switch (license)
}

function renderLicenseSection(license) {
    // if (license) { return `##` }
}

const renderLicenseLink = (license) => {
    if (license === "None") { return `` } else { return `- [License](#license)` }
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
${renderLicenseLink(answers.license)}
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)

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
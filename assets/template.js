// License
function renderLicenseBadge(license) {
    switch (license) {
        case ('GPL'):
            return `[![GPL](https://img.shields.io/badge/license-GPL-red)](https://opensource.org/licenses/gpl-license)`;
        case ('Apache-2.0'):
            return `[![Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-green)](https://opensource.org/licenses/Apache-2.0)`;
        case ('MIT'):
            return `[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)`;
        case ('None'):
            return ``;
        default:
            return ``
    }
}

function renderLicenseSection(license) {
    if (license === 'None') { return '' } else {
        return `## License
This repository is licensed with ${license}`
    }
}

const renderLicenseLink = (license) => {
    if (license === "None") { return `` } else { return `- [License](#license)` }
}

const generateReadMe = (answers) => {
    console.log(answers)

    return `# ${answers.title}
${renderLicenseBadge(answers.license)}

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

${renderLicenseSection(answers.license)}

## Features
${answers.features}

## Contribute
${answers.contribute}
## Tests
${answers.tests}
`}

module.exports = generateReadMe;
const inquirer = require('inquirer')
const fs = require('fs')
const generateReadMe = require('./assets/template.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('Please provide a descrition!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            choices: ['bruh', 'bruh2']
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How could others contribute to this project?',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How would the user test the application?',
            validate: data => {
                if (data) {
                    return true;
                } else {
                    console.log('')
                    return false;
                }
            }
        }
    ])
}

const init = () => {
    promptUser().then(answers => {
        generateReadMe(answers)


        fs.writeFile('./README.md', generateReadMe(answers), err => {
            if (err) throw new Error(err);

            console.log('README is created! Check out README.md')
        })
    })
}

init()
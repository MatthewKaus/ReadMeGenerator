const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./assets/template.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
        }
    ])
}
const inquirer = require('inquirer')
const fs = require('fs')
// const generateReadMe = require('./src/template.js')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
        }
    ])
}

function init() {
    console.log('bruh')
}

init()
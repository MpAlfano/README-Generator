//Returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    case `GNU General Public License v3.0`:
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    case `The MIT License`:
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case `Mozilla Public License 2.0`:
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }

}

//Returns the license link

function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    case `GNU General Public License v3.0`:
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    case `The MIT License`:
      return `(https://opensource.org/licenses/MIT)`
    case `Mozilla Public License 2.0`:
      return `(https://opensource.org/licenses/MPL-2.0)`
  }
}

//Returns the license section of README


function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return `Apache License
      Version 2.0, January 2004`
    case `GNU General Public License v3.0`:
      return `GNU GENERAL PUBLIC LICENSE
      Version 3, 29 June 2007`
    case `The MIT License`:
      return `The MIT License`
    case `Mozilla Public License 2.0`:
      return `Mozilla Public License 2.0 (MPL-2.0)`
  }
}

//Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const link = renderLicenseLink(data.license)
  const licenseDescription = renderLicenseSection(data.license)
  return `
  ${badge}
  # ${data.projectTitle}

  ## Description
  ${data.description}

  ## Table of Contents:
  * [INSTALLATION](#installation)  
  * [USAGE](#usage)  
  * [LICENSE](#license)  
  * [CONTRIBUTING](#contributing)  
  * [TESTS](#tests)  
  * [QUESTIONS](#questions)  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${badge}  
  ${link}  
  ${licenseDescription}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testInstructions}

  ## Questions
  
  Contact me at:

  https://github.com/${data.username}/  

  ${data.email}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'Apache 2.0 License':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    case `GNU General Public License v3.0`:
      return 
    case `The MIT License`:
      return
    case `Mozilla Public License 2.0`:
      return
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    case `GNU General Public License v3.0`:
      return 
    case `The MIT License`:
      return
    case `Mozilla Public License 2.0`:
      return
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    case `GNU General Public License v3.0`:
      return 
    case `The MIT License`:
      return
    case `Mozilla Public License 2.0`:
      return
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const badge = renderLicenseBadge(data.license)
  const link = renderLicenseLink(data.license)
  const licenseDescription = renderLicenseSection(data.license)
  console.log(renderLicenseBadge)
  return `
  ${badge}
  # ${data.projectTitle}

  ## ${data.description}

  ## Table of Contents:

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## License:

  ${link}
  ${licenseDescription}

  ## Contributing:

  ${data.contribution}

  ## Tests:

  ${data.testInstructions}

  ##Questions?
  
  Contact me at:
  https://github.com/${data.username}/
  ${data.email}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  else { }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  else { }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  else { }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg?style=plastic)

  # ${data.projectTitle}

  ## ${data.description}

  ## Table of Contents:

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## License:

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg?style=plastic)

  ## Contributing:

  ${data.contribution}

  ## Tests:

  ${data.textInstructions}

  ##Questions?
  
  Contact me at:
  https://github.com/${data.username}/
  ${data.email}

`;
}

module.exports = generateMarkdown;

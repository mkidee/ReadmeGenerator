// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeL = '' 

  switch(license){
    case 'Apache 2.0':
      badgeL = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      break;

    case 'BSD 3-Clause':
      badgeL = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
      break;

    case 'GPL 3.0':
      badgeL = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      break;

    case 'ISC':
      badgeL = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
      break;

    case 'MIT':
      badgeL = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

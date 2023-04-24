// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeL = '' 

  switch(license){
    default:
      badge = '';

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

  return badgeL;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  switch(license) {
    default:
      link = '';

      case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "BSD 3-Clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "ISC":
      link = "https://opensource.org/licenses/ISC";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licSection = ''

  if (license = 'N/A') {
    licSection = '## License'
    licSection += 'This program/application uses the ' + '[' + license + ']('+ renderLicenseLink(license) +') license.';
  }

  return licSection;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  for (const key in data){
    if (!data[key]) {
      data[key] = 'N/A';
    }
  }


// next is table of contents
let tabOC =`
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
`

if (data.license !== "N/A"){
  tabOC += `* [License](#license)`;
}

tabOC += `
* [Tests](#tests)
* [Questions](#questions)`;

// now to build the whole template literal 

return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
${tabOC}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Credits 
${data.credit}

${renderLicenseSection(data.license)}

## Tests 
${data.test}

## Questions 
Find me at my GitHub: [${data.github}](https://github.com/${data.github}). 
If you have any further questions, you can reach out here: ${data.email}.
`;
}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "none":
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "Mozilla":
      return `https://opensource.org/licenses/MPL-2.0`;
    case "none":
      return ``;
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
let renderLicenseSection = (license) => license !== "none" ? `This project uses the ${license}` : "N/A";

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data, collabData) {
  console.log(collabData);
  // this function will check if second set of answers has been passed into it, if so, append collaborators from data into new list item. Else say there are no collaborators.
  const collabList = function () {
    if (Object.keys(collabData).length === 0) {
      return "there are no collaborators"
    } else {
      let collabstr = '';
      for (const key in collabData) {
        collabstr = collabstr.concat(`[${collabData[key]}](https://www.github.com/${collabData[key]})  
`);
      }
      return collabstr;
    }
  };
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Test](#Test)
* [License](#License)
* [Contribute](#Contribute)
* [Questions](#Questions)
* [Collaborators](#Collaborators)
## Description
${data.description}
---
## Installation
Installation instructions: ${data.installation}
## Usage
${data.usage}
## Test
Run this command to test: ${data.test}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
---
## Contribute
${data.contribute}
## Questions
If you have any follow up questions, feel free to reach out at ${data.email}
GitHub: https://www.github.com/${data.username}
## Collaborators
${collabList()}
`;
}

module.exports = generateMarkdown;

module.exports = generateMarkdown;

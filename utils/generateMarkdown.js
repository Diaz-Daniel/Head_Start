// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenses) {
  if (licenses === "none") {
    return "";
  } else {
    return `![Github License](https://img.shields.io/badge/license-${licenses}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses !== "none") {
    return `- [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (licenses !== "none") {
    return `## License: <br>
    - This project is licensed with ${licenses} `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.file}

${renderLicenseBadge(data.licenses)}

# Description: ${data.description}

# Table of Contents

- [Description](#description)<br>
- [Installation](#installation)<br>
- [Usage](#Usage)<br>
- [Contribution](#contribution)<br>
- [Test](#test)<br>
${renderLicenseLink(data.licenses)}<br>
- [Username](#username)<br>
- [Questions](#questions)


## Installation:
 ${data.install}

## Usage: 
${data.usage}

## Contribution: 
${data.guidelines}

## Test: 
${data.test}

${renderLicenseSection(data.licenses)}

## Questions:
- github profile: https://github.com/${data.gituser}/repo.git

If you have any questions you can reach me at<br>
- email: ${data.email}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (licenses !== "none") {
    return `![Github License](https://img.shields.io/badge/license-${licenses}-green)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses !== "none") {
    return `- [license](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (licenses !== "none") {
    return `## license: <br> - This project is licensed uwith ${licenses} `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.file}
    ${renderLicenseBadge(data.licenses)}

# description: ${data.description}

# Table of Contents

- [description](#description)<br>
- [installation](#installation)<br>
- [usage](#usage)<br>
- [contribution](#contribution)<br>
- [test](#test)<br>
${renderLicenseLink(data.licenses)}<br>
- [username](#username)<br>
- [questions](#questions)


## installation:
 ${data.install}

## usage: 
${data.usage}

## contribution: 
${data.guidelines}

## test: 
${data.test}

${renderLicenseSection(data.licenses)}

## questions:
- github profile: https://github.com/${data.gituser}/repo.git

If you have any questions you can reach me at
-email: ${data.email}

`;
}

module.exports = generateMarkdown;

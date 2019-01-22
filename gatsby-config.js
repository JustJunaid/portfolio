const yaml = require('yaml')
const fs = require('fs')
const yamlConfig = fs.readFileSync('./config.yaml').toString();

let siteMetadata;
try {
  siteMetadata = yaml.parse(yamlConfig);
} catch (err) {
  throw new Error(`Could not parse the config.yaml: ${err.message}`);
}

console.log(JSON.stringify(siteMetadata, null, 2))

module.exports = {
    siteMetadata,
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content`,
          name: 'markdown',
          options: {
            extensions: ['.md']
          }
        }
      },
      `gatsby-transformer-remark`,
    ]
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { pathTo } = require('./src/routes');

// TODO: FIX THAT

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`src/templates/page/index.js`);

    const image = `
      title
      description
      contentful_id
      file {
        url
        details {
          image {
            width
            height
          }
        }
      }
    `;


    // section union
    // ... on ContentfulText {
    //   contentful_id
    //   text {
    //     text
    //   }
    // }

    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
          allContentfulPage(limit: 1000) {
            edges {
              node {
                __typename
                id
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allContentfulPage.edges.forEach(({ node }) => {
          const slug = pathTo(node);

          createPage({
            path: slug,
            component: pageTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              ...node
            },
          })
        })
      })
    )
  })
}

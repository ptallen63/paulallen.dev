/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve("src/templates/project.js");

  return graphql(`{
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              cover
              frontImage
              type
              dateCompleted
              shortDescription
              images
              tags
              url
            }
          }
        }
      }
    }`).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({ path: node.frontmatter.path, component: projectTemplate });
    });
  });
};
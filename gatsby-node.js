/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const processImages = arrayImageObjects => arrayImageObjects
  .map(obj => (obj ? obj.sourceUrl : false))
  .filter(url => url !== false || url !== 'false');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/project.js');

  return graphql(`
    query ProjectsQuery {
      wp {
        projects {
          edges {
            node {
              id
              projectPostTypeFields {
                appUrl
                dateCompleted
                projectImage1 {
                  sourceUrl
                }
                projectImage2 {
                  sourceUrl
                }
                projectImage3 {
                  sourceUrl
                }
                projectImage4 {
                  sourceUrl
                }
                projectImage5 {
                  sourceUrl
                }
                projectStatus
                projectType
              }
              excerpt
              link
              uri
              status
              slug
              title
              projectId
              content
              featuredImage {
                sourceUrl
              }
              tags {
                edges {
                  node {
                    name
                  }
                }
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }

      res.data.wp.projects.edges.forEach(async ({ node }) => {
        const images = processImages([
          node.projectPostTypeFields.projectImage1,
          node.projectPostTypeFields.projectImage2,
          node.projectPostTypeFields.projectImage3,
          node.projectPostTypeFields.projectImage4,
          node.projectPostTypeFields.projectImage5,
        ]);
        createPage({
          path: node.uri,
          component: projectTemplate,
          context: {
            id: node.id,
            wordpressId: node.projectId,
            appUrl: node.projectPostTypeFields.appUrl,
            title: node.title,
            excerpt: node.excerpt,
            dateCompleted: node.projectPostTypeFields.dateCompleted,
            status: node.projectPostTypeFields.projectStatus,
            type: node.projectPostTypeFields.projectType,
            coverImage: node.featuredImage.sourceUrl,
            images,
            tags: node.tags.edges.map(tag => tag.node.name),
            content: node.content,
          },
        });
      });
    });
};

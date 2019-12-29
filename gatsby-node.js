/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const mediaQuery = `

`;

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
      allWordpressWpProjects {
        edges {
          node {
            acf {
              app_url
              date_completed
              project_images
              project_status
              project_type
            }
            excerpt
            format
            link
            path
            status
            slug
            title
            type
            wordpress_id
            template
            content
            tags {
              name
            }
            categories {
              name
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
      // console.log(JSON.stringify(res, null, 2))

      res.data.allWordpressWpProjects.edges.forEach(async ({ node }) => {
        const images = await node.acf.project_images.split(',')
          .map(async imageId => graphql(`
                {
                  allWordpressWpMedia(filter: {wordpress_id: {eq: ${imageId}}}) {
                    edges {
                      node {
                        source_url
                      }
                    }
                  }
                }
            `)
            .then(imagesRes => {
              console.log(JSON.stringify(imagesRes, null, 2));

              return imagesRes.data.allWordpressWpMedia.edges[0].node.source_url
            }));
        const processedImages = await Promise.all(images);
        console.log('creatingPage', JSON.stringify(node, null, 2), images, processedImages);
        createPage({
          path: node.path,
          component: projectTemplate,
          context: {
            appUrl: node.acf.app_url,
            title: node.title,
            dataCompleted: node.acf.date_completed,
            status: node.acf.project_status,
            type: node.acf.project_type,
            images: processedImages,
            tags: node.tags.map(tag => tag.name),
            content: node.content,

          },
        });
      });
    });
};

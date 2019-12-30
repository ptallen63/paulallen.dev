/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const processImages = arrayImageObjects => arrayImageObjects
  .map(obj => {
    return obj ? obj.source_url : false;
  })
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
      allWordpressWpProjects {
        edges {
          node {
            id
            acf {
              app_url
              date_completed
              project_image_1 {
                source_url
              }
              project_image_2 {
                source_url
              }
              project_image_3 {
                source_url
              }
              project_image_4 {
                source_url
              }
              project_image_5 {
                source_url
              }
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
            featured_media {
              source_url
            }
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
        const images = processImages([
          node.acf.project_image_1,
          node.acf.project_image_2,
          node.acf.project_image_3,
          node.acf.project_image_4,
          node.acf.project_image_5,
        ]);
        createPage({
          path: node.path,
          component: projectTemplate,
          context: {
            id: node.id,
            wordpressId: node.wordpress_id,
            appUrl: node.acf.app_url,
            title: node.title,
            excerpt: node.excerpt,
            dateCompleted: node.acf.date_completed,
            status: node.acf.project_status,
            type: node.acf.project_type,
            coverImage: node.featured_media.source_url,
            images,
            tags: node.tags.map(tag => tag.name),
            content: node.content,
          },
        });
      });
    });
};

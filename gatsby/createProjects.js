const path = require('path');

module.exports = async ({ actions, graphql }) => {
  const GET_PROJECTS = `
    query GET_PROJECTS($first:Int $after:String) {
      wp {
        projects (
          first: $first
          after:$after
        ){
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
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
  `;

  const { createPage } = actions;

  const processImages = arrayImageObjects => arrayImageObjects
    .map(obj => (obj ? obj.sourceUrl : false))
    .filter(url => url !== false || url !== 'false');

  // eslint-disable-next-line no-return-await
  const fetchPosts = async (variables, projects = []) => await graphql(GET_PROJECTS, variables).then(({ data }) => {
    const allProjects = [...projects];
    // Get Destructured Data
    const {
      wp: {
        projects: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data;

    // Push project to all projects array
    nodes.forEach(project => allProjects.push(project));

    // Check to see of there are more projects to get
    if (hasNextPage) {
      return fetchPosts({ first: 100, after: endCursor }, allProjects);
    }
    return allProjects;
  });

  // First off Intial Fetch post function
  await fetchPosts({ first: 100, after: null })
    .then((allProjects) => {
      const projectTemplate = path.resolve('src/templates/project.js');

      allProjects.map((project) => {
        const images = processImages([
          project.projectPostTypeFields.projectImage1,
          project.projectPostTypeFields.projectImage2,
          project.projectPostTypeFields.projectImage3,
          project.projectPostTypeFields.projectImage4,
          project.projectPostTypeFields.projectImage5,
        ]);

        createPage({
          path: project.uri,
          component: projectTemplate,
          context: {
            id: project.id,
            wordpressId: project.projectId,
            appUrl: project.projectPostTypeFields.appUrl,
            title: project.title,
            excerpt: project.excerpt,
            dateCompleted: project.projectPostTypeFields.dateCompleted,
            status: project.projectPostTypeFields.projectStatus,
            type: project.projectPostTypeFields.projectType,
            coverImage: project.featuredImage.sourceUrl,
            images,
            tags: project.tags.edges.map(tag => tag.node.name),
            content: project.content,
          },
        });
      });
    });
};

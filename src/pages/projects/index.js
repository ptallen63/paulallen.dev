import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import Navbar from '../../components/navbar';
import ProjectBannerImg from '../../images/projectsBanner.png';
// import "../../styles/projects.scss";
import Project from '../../components/project';

const Banner = styled.div`
  height: 50vh ;
  width: 100vw ;
  background-color: #2980b9 !important;
  background-image: url(${ProjectBannerImg}) !important;
  background-attachment: fixed !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
`;

const ProjectPageHeader = styled(Header)`
  font-size: 68px !important;
  padding-top: 150px !important;
  color: #fff;
  text-align: center !important;
`;

const BannerText = styled.span`
  color: #fff;
  background-color: rgba(67, 95, 138, 0.75);
`;

const Projects = styled.div`
  background-color: #fff;
  padding-top: 20px;
`;

const ProjectsPage = (props) => {
  const { edges } = props.data.allWordpressWpProjects; // eslint-disable-line
  console.log(edges);
  const projects = edges
  .map(({node: project }) => {
    return {
      id: project.id,
      wordpressId: project.wordpress_id,
      appUrl: project.acf.app_url,
      title: project.title,
      path: project.path,
      excerpt: project.excerpt,
      dataCompleted: project.acf.date_completed,
      status: project.acf.project_status,
      type: project.acf.project_type,
      coverImage: project.featured_media.source_url,
      tags: project.tags.map(tag => tag.name),
      content: project.content,
    }
  })
  .map((project) => (
    <Project
      index={project.id}
      project={project}
      key={project.id}
    />
  ));
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar {...props} />

      <Banner>
        <ProjectPageHeader as="h1" textAlign="center">
          <BannerText>Projects</BannerText>
        </ProjectPageHeader>
      </Banner>
      <Projects>
        <Container>
          <Grid stackable stretched centered>
            {projects}
          </Grid>
        </Container>
      </Projects>
    </Layout>
  );
};

export default ProjectsPage;

export const projectQuery = graphql`
  query allProjectsQuery {
      allWordpressWpProjects {
        edges {
          node {
            id
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
    }`;

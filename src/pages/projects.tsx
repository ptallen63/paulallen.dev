import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Navbar from '../components/navbar';
import ProjectBannerImg from '../images/projectsBanner.png';
// import "../../styles/projects.scss";
import Project from '../components/project';

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

interface ProjectType {
  node: {
    id: string
    projectId: string
    title: string
    uri: string
    content: string
    excerpt: string
    projectPostTypeFields: {
      appUrl: string
      excerpt: string
      dateCompleted: string
      projectStatus: string
      projectType: string
    }
    featuredImage: {
      sourceUrl: string
    }
    tags: {
      edges: {
        node: {
          name: string
        }
      }[]
    }
  }
}

interface Props {
  location: {
    pathname: string
  }
  data: {
    wp: {
      projects: {
        edges: ProjectType[]
      }
    }
  }
}

const ProjectsPage: React.FC<Props> = (props) => {
  const { edges } = props.data.wp.projects; // eslint-disable-line
  const projects = edges
    .map(({ node: project }) => ({
      id: project.id,
      wordpressId: project.projectId,
      appUrl: project.projectPostTypeFields.appUrl,
      title: project.title,
      path: project.uri,
      excerpt: project.excerpt,
      dateCompleted: project.projectPostTypeFields.dateCompleted,
      status: project.projectPostTypeFields.projectStatus,
      type: project.projectPostTypeFields.projectType,
      coverImage: project.featuredImage.sourceUrl,
      tags: project.tags.edges.map(({ node }) => node.name),
      content: project.content,
    }))
    .sort((a, b) => Number(new Date(b.dateCompleted)) - Number(new Date(a.dateCompleted)))
    .map((project) => (
      <Project
        id={project.id}
        project={project}
        key={project.id}
      />
    ));
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar {...props} />

      <Banner>
        <ProjectPageHeader as="h1">
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
    wp {
        projects (first: 100) {
          edges {
            node {
              id
              projectPostTypeFields {
                appUrl
                dateCompleted
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
    }`;

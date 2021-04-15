/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import {
  List,
  Divider,
  Header,
  Grid,
  Container,
  Label,
  Segment,
  Statistic,
  Icon,
  Image,
} from 'semantic-ui-react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { getTypeData } from '../utils/helpers';

// KeyPoint
const KeyPoint = styled(Statistic)``;

// Project
const Project = styled(List.Item)``;
const ProjectIcon = styled(List.Icon)``;
const ProjectContent = styled(List.Content)``;
const ProjectHeader = styled(List.Header)``;
const ProjectDescription = styled(List.Description)``;

// Exprience
const Experience = styled(List.Item)``;
const ExperienceIcon = styled(List.Icon)``;
const ExperienceContent = styled(List.Content)``;
const ExperienceHeader = styled(List.Header)``;
const ExperienceDescription = styled(List.Description)``;

// Education
const Education = styled(List.Item)``;
const EducationIcon = styled(List.Icon)``;
const EducationContent = styled(List.Content)``;
const EducationHeader = styled(List.Header)``;
const EducationDescription = styled(List.Description)``;

// Skill
const Skill = styled(List.Item)``;

// Honors
const Honor = styled(List.Item)``;

// Technologies
const Tech = styled.div`
  max-width: 75px;
  max-height: 74px;
  margin: 10px;
`;
const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const degrees = [
  {
    name: 'B.S. Business Management / Finance',
    school: 'Samford University',
    date: 'May 2006',
    location: 'Birmingham, AL',
  },
  {
    name: 'Master in Business Administration',
    school: 'Samford University',
    date: 'May 2008',
    location: 'Birmingham, AL',
  },
];

const ResumePage = (props) => {
  const technologies = props.data.wp.technologies.edges.map(({ node }) => ({
    name: node.technologiesPostType.name,
    imgUrl: node.technologiesPostType.logo.sourceUrl,
  })).reverse();
  const resumePageData = props.data.wp.pageBy;
  const jobsData = props.data.wp.jobs.edges
    .sort((a, b) => b.node.jobData.yearBegan - a.node.jobData.yearBegan)
    .map((edge) => ({
      timeSpan: edge.node.jobData.timeSpan,
      position: edge.node.jobData.position,
      company: edge.node.jobData.company,
      location: edge.node.jobData.location,
      bullets: edge.node.jobData.bullets.trim().split('|').filter((b) => b !== ''),
    }));

  const honors = resumePageData.resumePage.honors.trim().split(';').filter((h) => h !== '');
  const skills = resumePageData.resumePage.skills.trim().split(';').filter((s) => s !== '');
  // eslint-disable-next-line
  const renderProjects = props.data.wp.projects.edges.map(({ node: project }) => (
    <Project key={project.id}>
      <ProjectIcon name={getTypeData(project.projectPostTypeFields.projectType).icon} />
      <ProjectContent>
        <ProjectHeader>
          <Link to={`/projects/${project.uri}`}>{project.title}</Link>
        </ProjectHeader>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: project.excerpt }} />
      </ProjectContent>
    </Project>
  ));

  const renderSkills = skills.map((skill, i) => (<Skill key={i} icon="code" content={skill} />));
  const renderHonors = honors.map((honor, i) => (<Honor key={i} icon="trophy" content={honor} />));

  const renderExperience = jobsData.map((w, index) => (
    <Experience key={index}>
      <Label ribbon="right" size="mini">
        {w.timeSpan}
      </Label>
      <ExperienceIcon name="building" />
      <ExperienceContent>
        <ExperienceHeader as="h3">
          {w.position}
          {' '}
        </ExperienceHeader>
        <ExperienceDescription>{w.company}</ExperienceDescription>
        <ExperienceDescription>
          <ExperienceIcon name="marker" />
          {w.location}
        </ExperienceDescription>
        <ExperienceDescription>
          <List bulleted>
            {w.bullets.map((b, i) => <List.Item key={i}>{b}</List.Item>)}
          </List>
        </ExperienceDescription>
      </ExperienceContent>
      <Divider />
    </Experience>
  ));

  const renderEduction = degrees.map((degree, i) => (
    <Education key={i}>
      <EducationIcon name="student" />
      <EducationContent>
        <EducationHeader as="h3">{degree.name}</EducationHeader>
        <EducationDescription>{degree.school}</EducationDescription>
        <EducationDescription><em>{degree.location}</em></EducationDescription>
        <EducationDescription><small>{degree.date}</small></EducationDescription>
      </EducationContent>
    </Education>
  ));

  const renderTechnologies = technologies.map((tech, i) => (
    <Tech key={i}>
      <Image src={tech.imgUrl} />
    </Tech>
  ));

  return (
    <Layout>
      <SEO title="Resume" keywords={['Resume', 'Paul Allen', 'React', 'Vue', 'Engineer']} />
      <Navbar {...props} />

      <Container>
        <Container textAlign="center">
          <Header size="huge">
            Paul T. Allen
            <Header.Subheader>
              <Icon name="mail" />
              email:
              {' '}
              <a href="mailto:ptallen63@gmail.com">
                ptallen63@gmail.com
              </a>
            </Header.Subheader>
            <Header.Subheader>
              {' '}
              <Icon name="world" />
              Web:
              <a href="https://paulallen.dev">
                paulallen.dev
                {' '}
              </a>
            </Header.Subheader>
            <Header.Subheader>Columbia, SC, USA</Header.Subheader>
          </Header>
        </Container>

        <Container text style={{ paddingTop: '30px' }}>
          {/* Key Points Section */}
          <Grid columns={3} centered>
            <Grid.Column textAlign="center">
              <KeyPoint>
                <KeyPoint.Value>15+</KeyPoint.Value>
                <KeyPoint.Label>
                  Years
                  <br />
                  {' '}
                  Experience
                </KeyPoint.Label>
              </KeyPoint>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <KeyPoint>
                <KeyPoint.Value>8+</KeyPoint.Value>
                <KeyPoint.Label>
                  Years
                  <br />
                  {' '}
                  Management
                </KeyPoint.Label>
              </KeyPoint>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <KeyPoint>
                <KeyPoint.Value>15+</KeyPoint.Value>
                <KeyPoint.Label>
                  Web
                  <br />
                  {' '}
                  Technologies
                </KeyPoint.Label>
              </KeyPoint>
            </Grid.Column>

          </Grid>
          {/* Technolgies Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Technologies</Label>
            <Technologies>
              {renderTechnologies}
            </Technologies>
          </Segment>

          {/* Education Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Education</Label>
            <List>{renderEduction}</List>
          </Segment>

          {/* Projects Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Projects</Label>
            <p>
              Below are a few projects that I have been putting some time
              into. This is not an exhaustive list, as some projects from
              clients are not listed here.
            </p>
            <List>{renderProjects}</List>
          </Segment>

          {/* Experience Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Experience</Label>
            <List>{renderExperience}</List>
          </Segment>

          {/* Skills Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Skills</Label>
            <List>{renderSkills}</List>
          </Segment>

          {/* Honors Section */}
          <Segment>
            <Label as="a" color="blue" ribbon>Awards/Honors</Label>
            <List>{renderHonors}</List>
          </Segment>
        </Container>
      </Container>
    </Layout>
  );
};

ResumePage.propTypes = {};

export default ResumePage;

export const projectQuery = graphql`
   query resumeProjectsQuery {
     wp {
      technologies(first: 100) {
        edges {
          node {
            technologiesPostType {
              name
              logo {
                sourceUrl
              }
            }
          }
        }
      }
     jobs(first: 100) {
        edges {
          node {
            jobData {
              bullets
              company
              location
              position
              timeSpan
              yearBegan
            }
          }
        }
      }
      pageBy(uri: "resume") {
        id
        resumePage {
          honors
          skills
        }
      }

      projects(first: 100) {
        edges {
          node {
            id
            projectPostTypeFields {
              projectType
            }
            excerpt
            uri
            title
            projectId

          }
        }
      }
    }
}
`;

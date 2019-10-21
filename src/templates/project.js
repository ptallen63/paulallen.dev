import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { graphql } from 'gatsby';
import {
  Container, Image, Header, Label, Icon,
} from 'semantic-ui-react';
import Slider from 'react-slick';
import { getTypeData, getStatusColor } from '../utils/helpers';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import SEO from '../components/seo';

// Carosel neeed styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  lazyLoad: true,
  autoplay: true,
};

const HeroImage = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100vw;
  background-color: #487e9b !important;
`;
const MainContent = styled(Container)`
  margin-top: 50px;
  width: 800px !important;
  padding: 30px;
  padding-top:  2px;
`;
const Screenshot = styled(Image)`
  margin: 10px;
  max-height: 50vh;
  max-width: 100vh;
`;
const SiteLink = styled.a`
  color: #000;
`;

const ProjectHeader = styled(Header)``;
const ProjectSubHeader = styled(Header.Subheader)``;
const ProjectDate = styled.span`
  font-weight: 100;
  font-size: 16px;
`;

const BackToProjectsLink = styled(Link)``;
const ProjectHTML = styled.div``;

export default function Template(props) {
  // eslint-disable-next-line
  const { mdx: project } = props.data;

  const images = project.frontmatter.images.map((image, i) => <div key={i}><Screenshot centered src={image} /></div>);
  const tags = project.frontmatter.tags.map((tag, i) => (
    <Label tag size="mini" key={i}>
      {' '}
      {tag}
      {' '}
    </Label>
  ));

  return (
    <Layout>
      <SEO title={`${project.frontmatter.title}`} />
      <Navbar {...props} />

      <HeroImage>
        {' '}
        <Slider {...settings}>{images}</Slider>
        {' '}
      </HeroImage>
      <MainContent>
        <BackToProjectsLink to="/projects">
          {' '}
          <Icon name="arrow circle left" />
back to projects
        </BackToProjectsLink>
        <ProjectHeader as="h1">
          {project.frontmatter.title}
          <SiteLink href={project.frontmatter.url}>
            {' '}
            <Icon name="arrow circle right" />
          </SiteLink>
          <ProjectSubHeader>
            <ProjectDate>
              {moment(project.frontmatter.dateCompleted).format('MMM Do YYYY')}
              <br />
            </ProjectDate>
            <Label size="mini" color={getTypeData(project.frontmatter.type).color}>
              <Icon name={getTypeData(project.frontmatter.type).icon} />
              {project.frontmatter.type}
            </Label>
            <Label size="mini" color={getStatusColor(project.frontmatter.status)}>
              {project.frontmatter.status}
            </Label>
          </ProjectSubHeader>
        </ProjectHeader>
        <Header>{tags}</Header>

        <ProjectHTML>
          <MDXRenderer>{project.body}</MDXRenderer>

        </ProjectHTML>
      </MainContent>
    </Layout>
  );
}

export const projectQuery = graphql`query ProjectPostByPath($path: String!) {
           mdx(frontmatter: { path: { eq: $path } }) {
             body
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
               status
             }
           }
         }`;

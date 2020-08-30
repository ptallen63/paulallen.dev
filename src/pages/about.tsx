import React from 'react';
import {
  Button, Grid, Image, Container,
} from 'semantic-ui-react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import SEO from '../components/seo';
import theme from '../styles/theme';

const ButtonGroup = styled.div`
  padding-top: 20px;
`;
const Header = styled.h1``;

const StyledContainer = styled(Container)`
  p {
     font-size: 18px;
      ${theme.breakpoints.mobile}{
        font-size: 22px;
      }
  }
`;

interface AboutPageData {
  id: string
  uri: string
  title: string
  featuredImage: {
    altText: string
    sourceUrl: string
  }
  content: string
}

interface Props {
  location: {
    path: string
  }
  data: {
    wp: {
      pageBy: AboutPageData
    },
  },
}

const AboutPage: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const aboutPageData = props.data.wp.pageBy;

  return (
    <Layout>
      <SEO title={aboutPageData.title} keywords={['Paul Allen', 'Web Development']} />
      <Navbar {...props} />
      <Container textAlign="center">
        <Header>{aboutPageData.title}</Header>

        <Grid columns={2} stackable>
          <Grid.Column width={4}>
            <Image
              circular
              alt={aboutPageData.featuredImage.altText}
              src={aboutPageData.featuredImage.sourceUrl}
              size="medium"
              shape="circular"
              centered
            />
            <ButtonGroup>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ptallen63">
                <Button circular color="twitter" icon="twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ptallen63">
                <Button circular color="linkedin" icon="linkedin" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ptallen63">
                <Button circular secondary icon="github" />
              </a>
            </ButtonGroup>
          </Grid.Column>
          <Grid.Column width={12}>
            <StyledContainer textAlign="left" dangerouslySetInnerHTML={{ __html: aboutPageData.content }} />
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {};

export default AboutPage;

export const aboutPageWuery = graphql`
  query AboutPageQuery {
    wp {
      pageBy(uri: "about") {
        id
        uri
        title
        content
        featuredImage {
          sourceUrl
          altText
        }
      }
    }
}`;

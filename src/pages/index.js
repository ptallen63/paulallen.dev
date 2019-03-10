import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  Image, Icon, Container, Statistic, Grid, Button,
} from 'semantic-ui-react';
import homepageTypedText from '../data/homepageTypedText';
import Typed from '../components/typed';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled.div`
  padding-top: 15%;
  min-height: 100%;
`;
const Divider = styled.div`
  padding: 20px;
`;

const SectionIcons = styled(Statistic.Value)`
  font-weight: 100 !important;
`;
const SectionLabel = styled(Statistic.Label)`
  margin-top: 5px !important;
`;

const SectionLinks = styled(Statistic)`
  transition: border 400ms ease-in-out;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #2980b9;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
            }
    &:hover {
    &:before {
        visibility: visible;
        transform: scaleX(1);
    }
}
`;

const socialLinks = [
  {
    name: 'twitter', color: 'twitter', icon: 'twitter', text: 'Twitter', hiddenText: '@ptallen63', link: 'https://twitter.com/ptallen63',
  },
  {
    name: 'linkedin', color: 'linkedin', icon: 'linkedin', text: 'LinkedIn', hiddenText: 'ptallen63', link: 'https://www.linkedin.com/in/ptallen63',
  },
  {
    name: 'github', color: 'black', icon: 'github', text: 'Github', hiddenText: '@ptallen63', link: 'https://github.com/ptallen63',
  },
];

const sections = [
  { name: 'Projects', link: 'projects', icon: 'code' },
  { name: 'About Me', link: 'about', icon: 'info' },
  { name: 'Resume', link: 'resume', icon: 'file text' },
  { name: 'Contact Me', link: 'contact', icon: 'mail outline' },
];

const IndexPage = props => (
  <Layout>
    <SEO title="Paulallen.dev" keywords={['gatsby', 'application', 'react']} />
    <Wrapper>
      <Container textAlign="center">
        <Grid reversed="mobile" columns={2} stackable centered>
          <Grid.Column textAlign="center">
            <Statistic>
              <Statistic.Value>Paul T. Allen</Statistic.Value>
            </Statistic>

            <Typed strings={homepageTypedText} />

            {socialLinks.map(link => (
              <a target="_blank" rel="noopener noreferrer" href={link.link}>
                <Button animated="fade" color={link.color} size="large">
                  <Button.Content visible>
                    <Icon name={link.icon} />
                    {' '}
                    {link.text}
                  </Button.Content>
                  <Button.Content hidden>{link.hiddenText}</Button.Content>
                </Button>
              </a>
            ))}

            <Divider />
            <Grid columns={4} stackable centered>
              {sections.map(section => (

                <Grid.Column textAlign="center">
                  <Link to={section.link}>
                    <SectionLinks>
                        <SectionIcons>
                          <Icon size="small" name={section.icon} />
                        </SectionIcons>
                        <SectionLabel>{section.name}</SectionLabel>
                      </SectionLinks>
                  </Link>
                </Grid.Column>
              ))}
            </Grid>
          </Grid.Column>

          <Grid.Column width={5}>
            <Image
              circular
              src="http://res.cloudinary.com/mulleravenue/image/fetch/https://s3-us-west-2.amazonaws.com/paultallen.com/profile.jpg"
              size="medium"
              shape="circular"
              centered
            />
          </Grid.Column>
        </Grid>
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;

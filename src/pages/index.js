import React from "react";
import styled from 'styled-components';
import Link from 'gatsby-link'
import {Image, Icon, Container, Statistic, Grid, Button } from 'semantic-ui-react'
import homepageTypedText from '../data/homepageTypedText';
import Typed from '../components/typed'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  padding-top: 15%;
  min-height: 100%;
`
const Divider = styled.div`
  padding: 20px;
`

const SectionIcons = styled(Statistic.Value)`
  font-weight: 100 !important;
`
const SectionLabel = styled(Statistic.Label)`
  margin-top: 5px !important;
`

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
`

const IndexPage = (props) => (
    <Layout>
      <SEO title="Paulallen.dev" keywords={[`gatsby`, `application`, `react`]} />
      <Wrapper>
        <Container textAlign="center">
          <Grid reversed="mobile" columns={2} stackable centered>
            <Grid.Column textAlign='center'>
              <Statistic>
                <Statistic.Value>Paul T. Allen</Statistic.Value>
              </Statistic>

              <Typed strings={homepageTypedText}/>

              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ptallen63">
                <Button animated="fade" color="twitter" size="large">
                  <Button.Content visible>
                    <Icon name="twitter" /> Twitter
                  </Button.Content>
                  <Button.Content hidden>@ptallen63</Button.Content>
                </Button>
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ptallen63">
                <Button animated="fade" color="linkedin" size="large">
                  <Button.Content visible>
                    <Icon name="linkedin" /> LinkedIn
                  </Button.Content>
                  <Button.Content hidden>ptallen63</Button.Content>
                </Button>
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ptallen63">
                <Button animated="fade" secondary size="large">
                  <Button.Content visible>
                    <Icon name="github" /> Github
                  </Button.Content>
                  <Button.Content hidden>@ptallen63</Button.Content>
                </Button>
              </a>

              <Divider />
              <Grid columns={4} stackable centered>
                <Grid.Column textAlign="center">
                  <Link to="projects">
                    <SectionLinks>
                      <SectionIcons>
                        <Icon size="small" name="code" />
                      </SectionIcons>
                      <SectionLabel>Projects</SectionLabel>
                    </SectionLinks>
                  </Link>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Link to="about">
                    <SectionLinks>
                      <SectionIcons>
                        <Icon size="small" name="info" />
                      </SectionIcons>
                      <SectionLabel>About Me</SectionLabel>
                    </SectionLinks>
                  </Link>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Link to="resume">
                  <SectionLinks>
                      <SectionIcons>
                        <Icon size="small" name="file text" />
                      </SectionIcons>
                      <SectionLabel>Resume</SectionLabel>
                  </SectionLinks>
                  </Link>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Link to="contact">
                  <SectionLinks>
                      <SectionIcons>
                        <Icon size="small" name="mail outline" />
                      </SectionIcons>
                      <SectionLabel>Contact Me</SectionLabel>
                  </SectionLinks>
                  </Link>
                </Grid.Column>
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
    )

export default IndexPage

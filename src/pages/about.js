import React from 'react';
import {
  Button, Grid, Image, Container,
} from 'semantic-ui-react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { P } from '../components/styled';

const ButtonGroup = styled.div`
  padding-top: 20px;
`;
const Header = styled.h1``;


const AboutPage = props => (
  <Layout>
    <SEO title="About" keywords={['Paul Allen', 'Web Development']} />
    <Navbar {...props} />
    <Container textAlign="center">
      <Header>About</Header>

      <Grid columns={2} stackable>
        <Grid.Column width={4}>
          <Image
            circular
            src="https://s3-us-west-2.amazonaws.com/paultallen.com/aboutPic+2.jpg"
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
          <Container textAlign="left">
            <P>
                My path has been a bit different than most. I grew up in
                Alabama where I went to school for finance and banking. My
                    first career was at
              {' '}
              <a href="http://www.regions.com">Regions Bank </a>
                in Birmingham, AL. I soon worked my way up to the management
                team of a branch with a large deposit base. I was all of 23
                years old managing a staff where the youngest member was 49. I
                spent a great deal of time working on processes to increase
                customer service ratings and developing spreadsheet models to
                increase efficiencies and branch sales.
              {' '}
            </P>

            <P>
                While on vacation in Egypt, I was recruited to move overseas
                and do consulting work in the Middle East. Primarily working
                in Egypt, I engaged with small companies who wanted to expand
                their operations into western markets. Around this time the
                Arab Spring of
              {' '}
              <strong>2011</strong>
              {' '}
began, and I learned how to operate in an
                environment that changed daily.
            </P>

            <P>
                Just before leaving for Egypt, I met the woman who is now my
                wife. It was wanting to marry her that brought me to my
                current location in Columbia, SC in
              {' '}
              <strong>May of 2011</strong>
. At the time,
                I landed a job with a small university doing admissions and
                recruiting for adult evening programs. I discovered that I
                enjoyed working in this field and that I was a natural at
                building processes and systems to reach this student
                population.
            </P>

            <P>
                In
              {' '}
              <strong>2013</strong>
, I came on board at USC’s
              {' '}
              <a href="http://moore.sc.edu">
                  Darla Moore School of Business
                {' '}
              </a>
                to work within the graduate division with the
              {' '}
              <a href="http://moore.sc.edu/pmba">
                  Professional MBA program
              </a>
. There I was a part of revolutionizing the way we
                communicated with prospective students. I was able to design
                and implement our communications model that led to higher
                efficiency in recruiting students.
            </P>

            <P>
                In
              {' '}
              <strong>August of 2016</strong>
, I became the Marketing Technologist for the
                entire university. In this role, I focused on finding technology
                solutions to the challenges facing our marketing and
                communications groups.
            </P>
            <P>
                In
              {' '}
              <strong>February of 2018</strong>
, I decided to fully commit to my passion of web development
                and became a software engineer for
              {' '}
              <a href="www.redventures.com">Red Ventures</a>
.
            </P>
            <P>
                In my free time, I am obsessed with programming. I
                spend a lot of time building apps to make life more fun. I
                also really enjoy building products to help my wife in her
                classroom. I am constantly learning more about different
                programming languages.
            </P>

            <P>
                I also enjoy spending time with my wife, learning how to dance
                the
              {' '}
              <a href="https://en.wikipedia.org/wiki/Carolina_shag">
                {' '}
                  Carolina shag
              </a>
, running, and traveling.
            </P>
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  </Layout>
);


AboutPage.propTypes = {};

export default AboutPage;

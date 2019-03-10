import React from 'react';
import Link from 'gatsby-link';
import { Container, Divider, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  margin-top: 50px;
  text-align: center;
  padding: 20px;
  position: relative;
  left: 0;
  bottom: 0;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 50px !important;
`;

const SmallParagraph = styled.p`
  font-size: 0.85rem;
  margin-bottom: 5px !important;
`;

const Footer = () => (
  <div>
    <Wrapper>
      <StyledDivider />
      <p>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/projects">Projects</Link>
        <span> | </span>
        <Link to="/resume">Resume</Link>
      </p>
      <SmallParagraph>
        Made with
        {' '}
        <Icon name="heart" />
        {' '}
by Paul Allen
      </SmallParagraph>
      <SmallParagraph>
        Check out this site on
        {' '}
        <a href="https://github.com/ptallen63/paulallen.dev">Github</a>
      </SmallParagraph>
      <SmallParagraph>
        <Icon name="copyright" />
        {new Date().getFullYear()}
      </SmallParagraph>
    </Wrapper>
  </div>
);

Footer.propTypes = {};

export default Footer;

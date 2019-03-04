import React from "react";
import { Menu } from "semantic-ui-react";
import styled from 'styled-components';
import Link from 'gatsby-link';

import '../styles/navbar.scss'

const Wrapper = styled.div`
  margin-bottom: 50px;
`
const MainMenu = styled(Menu)`
  padding: 0px !important;
  height: 50px;
  border-color: #fff;
  background-color: #fff;
`

const SecondaryMenu = styled(Menu.Menu)`
  background-color: #fff;
  margin-right: 50px !important;
`

const StyledLink = styled(Link)`
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    color: #000;

    :hover {
      background-color: rgba(34, 36, 38, .1);
      color: #000;
    }

    &.active {
      padding: 0px !important;
      background-color: rgba(34, 36, 38, .1) !important;
      color: #000 !important;
    }
`

const MenuItem = styled(Menu.Item)`
  padding: 0 !important;
`

// RegExp for the Project route
const regex = new RegExp("/(project/).*");

const Navbar = (props) => {
  const activeItem = props.location.pathname || '';
  return <Wrapper>
      <MainMenu fixed="top" secondary>
        <SecondaryMenu position="right">
          <MenuItem  name="home" active={activeItem === "/"}>
            <StyledLink className="link" to="/">Home</StyledLink>
          </MenuItem>
          <MenuItem  name="projects" active={regex.test(activeItem) || activeItem === "/projects"}>
            <StyledLink className="link" to="/projects">Projects</StyledLink>
          </MenuItem>
          <MenuItem  name="about" active={activeItem === "/about"}>
            <StyledLink className="link" to="/about">About</StyledLink>
          </MenuItem>
          <MenuItem  name="resume" active={activeItem === "/resume"}>
            <StyledLink className="link" to="/resume">Resume</StyledLink>
          </MenuItem>
          <MenuItem name="Contact" active={activeItem === "/contact"}>
            <StyledLink className="link" to="/contact">Contact</StyledLink>
          </MenuItem>
        </SecondaryMenu>
      </MainMenu>
    </Wrapper>
}


Navbar.propTypes = {};

export default Navbar;
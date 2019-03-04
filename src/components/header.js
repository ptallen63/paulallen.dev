import PropTypes from "prop-types"
import React from "react"
import Navbar from './navabar'

const Header = ({ siteTitle }) => (
  <header>
    {siteTitle}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

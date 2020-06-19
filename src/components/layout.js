/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from './footer';
import game from '../services/theGame';
import gameHint from '../data/gameHint';

import 'semantic-ui-css/semantic.min.css'

if (window) game.init();

const Comment = ({text}) => (<div className="TheGame" dangerouslySetInnerHTML={{__html:`<!-- ${text} -->`}}/>)

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
        <Comment text={gameHint}/>
          <main>{props.children}</main>
          <Footer/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

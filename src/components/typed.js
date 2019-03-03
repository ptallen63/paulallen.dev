import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

import '../styles/typed.scss'

const Keywords = styled(Header)`
    margin-top: -5px !important;
    margin-bottom: 55px !important;
`


class TypedComponent extends Component {

  componentDidMount() {
    // const strings = homepageTypedText
    const options = {
      strings: this.props.strings,
      typeSpeed: 30,
      backSpeed: 20,
      smartBackspace: true,
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <Keywords textAlign='center' color="grey" as="h2">
        <span
          style={{ whiteSpace: 'pre', fontSize: '28px' }}
          ref={(el) => { this.el = el; }}
        />
      </Keywords>
    );
  }
}

Typed.propTypes = {
  strings: PropTypes.array.isRequired
};

export default TypedComponent;
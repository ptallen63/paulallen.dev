import React from 'react';

interface Props {
  siteTitle?: string,
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header>
    {siteTitle}
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

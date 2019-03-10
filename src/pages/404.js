import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = props => (
  <Layout>
    <SEO title="404" />
    <Navbar {...props} />
    <Container>

      <h1>NOT FOUND</h1>
      <div>
        <h1>404: Yikes! Might want to back up.</h1>
        <iframe
          title="404-giiphy"
          src="//giphy.com/embed/ryn10EFwFk2ME"
          width="480"
          height="269.76"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <p>
          <a href="https://giphy.com/gifs/cat-fail-ryn10EFwFk2ME">via GIPHY</a>
        </p>
        <p>It appears that the page you were looking for is not here.</p>
      </div>

    </Container>
  </Layout>
);

export default NotFoundPage;

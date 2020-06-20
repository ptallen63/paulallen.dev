import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact-form';

const PageWrapper = styled(Container)`
`;

const PageHeader = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const ContactPage = (props) => (
  <Layout>
    <SEO title="Contact" />
    <Navbar {...props} />
    <PageWrapper>
      <PageHeader>Contact Me</PageHeader>
      <ContactForm />
    </PageWrapper>
  </Layout>
);

export default ContactPage;

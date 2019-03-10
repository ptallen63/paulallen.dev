import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Form, Input, TextArea, Button, Message,
} from 'semantic-ui-react';
import { contactFormDefault } from 'data/defaults';
import NetlifyFunctions from 'services/apis';
import theme from 'styles/theme';
import validate from 'utils/validate';
import sanitize from 'utils/sanitize';
import packageUp from 'utils/package-up';


const Wrapper = styled.div`
  position: relative;
  background: white;
  max-width: 700px;
  min-height: 400px;
  margin: 0 auto;
  padding: 30px;
`;

const Heading = styled.h1`
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  margin-top: 3px;
  color: #8b0000;
`;

const SubmitButton = styled(Button)`
  background-color: ${theme.colors.black} !important;
  color: ${theme.colors.white} !important;
  @media screen and (max-width: 675px) {
    width: 100%;
  }
`;

export default class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { ...contactFormDefault },
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClose(e) {
    const el = e.target;
    const form = {
      loading: false,
      invalid: false,
      valid: false,
      submitted: false,
      submitError: false,
      data: {
        firstName: {
          valid: false,
          value: '',
          error: false,
          required: true,
        },
        lastName: {
          valid: false,
          value: '',
          error: false,
          required: true,
        },
        email: {
          valid: false,
          value: '',
          error: false,
          required: true,
        },
        phone: {
          valid: false,
          value: '',
          error: false,
          required: false,
        },
        message: {
          valid: false,
          value: '',
          error: false,
          required: true,
        },
      },
    };
    if (el.className.includes('Wrapper') || el.className.includes('Close')) {
      this.setState({ form });
    }
  }

  handleSubmit() {
    const { form } = this.state;
    const validatedData = validate(form.data);
    const hasErrors = Object.values(validatedData).filter(value => value.error).length > 0;
    if (hasErrors) {
      form.data = validatedData;
      form.valid = false;
      form.invalid = true;
      this.setState({ form });
    } else {
      form.loading = true;
      this.setState({ form });
      NetlifyFunctions.contactData(packageUp(form.data))
        .then(() => {
          form.loading = false;
          form.submitted = true;
          this.setState({ form });
        })
        .catch((err) => {
          form.loading = false;
          form.submitError = true;
          this.setState({ form });
          console.error(err); // eslint-disable-line no-console
        });
    }
  }

  handleInput(e) {
    const key = e.currentTarget.id;
    const val = e.currentTarget.value;
    const { form } = this.state;
    form.data[key].value = sanitize(val);
    this.setState({
      form,
    });
  }

  render() {
    const { form } = this.state;
    return (
      <Wrapper>
        <p>
            Please complete this form with your name and email, and I will
            get back to you as soon as possible. I usually try to respond
            within 1-2 business days, but depending on volume it may be
            longer.
        </p>
        {!form.submitted && (
        <Form noValidate loading={form.loading} onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field required error={form.data.firstName.error !== false}>
              <label htmlFor="firstName">First Name</label>
              <Input onChange={this.handleInput} value={form.data.firstName.value} id="firstName" placeholder="First Name" />
              {form.data.firstName.error && (
              <ErrorMessage>
                {form.data.firstName.error}
                {' '}
              </ErrorMessage>
              )}
            </Form.Field>
            <Form.Field required error={form.data.lastName.error !== false}>
              <label htmlFor="lastName">Last Name</label>
              <Input onChange={this.handleInput} value={form.data.lastName.value} id="lastName" placeholder="Last Name" />
              {form.data.lastName.error && (
              <ErrorMessage>
                {form.data.lastName.error}
                {' '}
              </ErrorMessage>
              )}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field required error={form.data.email.error !== false}>
              <label htmlFor="email">Email</label>
              <Input type="email" onChange={this.handleInput} value={form.data.email.value} id="email" placeholder="Email Address" />
              {form.data.email.error && (
              <ErrorMessage>
                {form.data.email.error}
                {' '}
              </ErrorMessage>
              )}
            </Form.Field>
            <Form.Field error={form.data.phone.error !== false}>
              <label htmlFor="phone">Phone</label>
              <Input type="tel" onChange={this.handleInput} value={form.data.phone.value} id="phone" placeholder="Phone Number" />
              {form.data.phone.error && (
              <ErrorMessage>
                {form.data.phone.error}
              </ErrorMessage>
              )}
            </Form.Field>
          </Form.Group>
          <Form.Field required error={form.data.message.error !== false}>
            <label htmlFor="message">Message</label>
            <TextArea onChange={this.handleInput} value={form.data.message.value} id="message" placeholder="Enter your message" />
            {form.data.message.error && (
            <ErrorMessage>
              {form.data.message.error}
            </ErrorMessage>
            )}
          </Form.Field>
          <Form.Field id="form-button-control-public" control={SubmitButton} content="Send" />
        </Form>
        )}
        {form.submitted && (
        <Message success>
          <strong>Success!</strong>
              Your message is on its way. Thank you for reaching out.
              I will respond as soon as we can.
        </Message>
        )}
        {form.submitError && (
        <Message error>
          <strong>Uh-oh!</strong>
          {' '}
              Something went wrong! Please try again.
          {' '}
        </Message>
        )}
      </Wrapper>
    );
  }
}
ContactModal.propTypes = {
};

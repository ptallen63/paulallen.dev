export const contactFormDefault = {
  loading: false,
  invalid: false,
  valid: false,
  submitted: false,
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

export default {
  contactFormDefault,
};

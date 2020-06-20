import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NETLIFY_FUNCTIONS_URL || '/.netlify/functions',
  headers: {
    crossDomain: true,
  },
});

const contactData = (data) => instance.post('/sendContactSubmit', data);

export default {
  contactData,
};

/* eslint-disable */
const axios = require('axios');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  crossDomain: true,
};

const config = {
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
};

const instance = axios.create({
  baseURL: process.env.MJ_API_URL,
  auth: {
    username: config.apiKey,
    password: config.apiSecret,
  },
  headers,
});

const statusCode = 200;

exports.handler = function (event, context, callback) {
  // Do not forget to update the sender address used in the sample
  console.log(event.httpMethod);

  if (event.httpMethod !== 'POST' || !event.body) {
    return callback(null, {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    });
  }

  const body = JSON.parse(event.body);

  const emailText = `
      <h3>Hello!</h3>
      <p>You have a new message from ${body.firstName} ${body.lastName}</p>
      <p>email: ${body.email}</p>
      <p>phone: ${body.phone}</p>
      <h4>Message:</h4>
      <p>${body.message}</p>
    `;

  instance.post('/send', {
    FromEmail: 'ptallen63@gmail.com',
    FromName: 'PaulAllen.dev',
    Subject: '📬New Message from paulallen.dev',
    'Html-part': emailText,
    Recipients: [
      {
        Email: 'ptallen63@gmail.com',
      },
    ],
  })
    .then((res) => {
      console.log('success');
      return callback(null, { body: JSON.stringify(res.data), statusCode: 202 });
    })
    .catch((err) => {
      console.log('errr', err);
      return callback(err.message, { statusCode: 404 });
    });
};
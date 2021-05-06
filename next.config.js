/* eslint-disable @typescript-eslint/no-var-requires */
const dotEnvResult = require('dotenv').config();
if (dotEnvResult.error && process.env.NODE_ENV !== 'production')
  console.warn('Cannot load configuration from .env. The .env file is probably missing.');
const path = require('path');

module.exports = () => ({
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
    PREVIEW_SECRET: process.env.PREVIEW_SECRET || '',
    INQUIRY_API_ENDPOINT:
      process.env.INQUIRY_API_ENDPOINT || 'https://api.shaire-dev.scrum-dev.com/send-inquiry',
  },
  webpack: (config) => {
    config.resolve.alias['@@'] = path.resolve(__dirname);
    config.resolve.alias['@components'] = path.resolve(path.join(__dirname, 'src/components'));
    config.resolve.alias['@styles'] = path.resolve(path.join(__dirname, 'src/styles'));
    config.resolve.alias['@utils'] = path.resolve(path.join(__dirname, 'src/utils'));
    return config;
  },
});

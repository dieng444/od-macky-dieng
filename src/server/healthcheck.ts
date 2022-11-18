import http from 'http';

const { SERVER_HOST, SERVER_PORT } = process.env;

const options = {
  host: SERVER_HOST,
  port: SERVER_PORT,
  path: '/',
  timeout: 2000,
};

const request = http.request(options, ({ statusCode }) => process.exit(statusCode === 200 ? 0 : 1));

request.on('error', () => {
  process.exit(1);
});

request.end();

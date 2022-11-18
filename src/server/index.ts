import './env';
import app from '../app';

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${SERVER_PORT}`);
});

app.on('uncaughtException', (err) => {
  console.error(err);
});

import cors from 'cors';

// CORS middleware options
const corsOptions = {
  origin: true, // set to true to reflect the request origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // list of methods that will be returned in the Access-Control-Allow-Methods header
  credentials: true, // value returned by the Access-Control-Allow-Credentials (set to true to allow Cookie header support)
  exposedHeaders: ['Content-Range'],
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const applyCors = () => cors(corsOptions);

export default applyCors;

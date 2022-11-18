import { Router } from 'express';

import { eventRouter } from '../features/events/routes';

const router = Router();

const { APP_TITLE } = process.env;

router.use('/events', eventRouter);

// Root path
router.use(/\/$/, (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<h1>${APP_TITLE}</h1>`);
});

export default router;

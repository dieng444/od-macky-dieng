import express from 'express';
import bindEventsToInterests from './bindEventsToInterests';

const eventRouter = express.Router();

eventRouter.post('/', bindEventsToInterests);

export { eventRouter };

import { Request, Response } from 'express';
import requestHandler from '../../middlewares/requestHandler';
import interests from './points-of-interest.json';
import { Interest, Event } from './events.types';

// Fake
const events = [
  { lat: 1, lon: 2, type: 'imp' },
  { lat: 1, lon: 2, type: 'click' },
];

function distance(event: Event, int: Interest): number {
  return Math.sqrt(Math.pow(event.lat - int.lat, 2) + Math.pow(event.lon - int.lon, 2));
}

const bindEventsToInterests = async (): Promise<unknown> => {
  const boundedInterests = interests.reduce((acc, itr) => {
    const impNearestPoint = events
      .filter((itr) => itr.type === 'imp')
      .reduce((a, b) => (distance(a, itr) < distance(b, itr) ? a : b));
    const clickNearestPoint = events
      .filter((itr) => itr.type === 'click')
      .reduce((a, b) => (distance(a, itr) < distance(b, itr) ? a : b));

    if (!acc[itr.name]) acc[itr.name] = { ...itr, imp: impNearestPoint.lat, click: clickNearestPoint.lat };

    return acc;
  }, {});

  return boundedInterests;
};

export default requestHandler(bindEventsToInterests);

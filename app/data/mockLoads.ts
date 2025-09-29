import { Load } from '../types/load';

export const mockLoads: Load[] = [
  {
    id: '1',
    badge: '!',
    price: 477,
    distance: 186.3,
    weight: 13944,
    loadedRPM: 2.56,
    estTotalRPM: 1.12,
    pickup: {
      city: 'JOLIET',
      state: 'IL',
      date: 'Wed, Aug 06',
      time: '7:00 AM',
      liveLoad: true,
      emptyMiles: 240,
    },
    delivery: {
      city: 'MARION',
      state: 'IN',
      date: 'Thu, Aug 14',
      time: '12:01 AM',
      instructions: ['Drop Loaded Trailer', 'Pick Up Empty Trailer'],
      emptyMiles: 180,
    },
    isReload: true,
  },
  {
    id: '2',
    price: 79,
    distance: 56.8,
    weight: 43000,
    loadedRPM: 1.41,
    estTotalRPM: 0.26,
    pickup: {
      city: 'GARY',
      state: 'IN',
      date: 'Thu, Aug 07',
      time: '1:34 PM',
      emptyMiles: 248,
    },
    delivery: {
      city: 'HANOVER PARK',
      state: 'IL',
      date: 'Mon, Aug 18',
      time: '3:18 PM',
      instructions: ['Pick Up Relay', 'Drop Empty Trailer'],
      emptyMiles: 125,
    },
  },
];

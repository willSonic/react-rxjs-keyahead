import { Record, List } from 'immutable';
import { Artist } from './Artist';

export const Song = Record(
  {
    id: undefined,
    type: undefined,
    title: undefined,
    artist: Artist,
    chordsPresent: undefined,
    tabTypes: List,
  },
  'Song',
);

export const SongsList = List;

import { Record, List } from 'immutable';

export const Artist = Record(
  {
    id: undefined,
    type: undefined,
    nameWithoutThePrefix: undefined,
    useThePrefix: undefined,
  },
  'Artist',
);

export const ArtistList = List;

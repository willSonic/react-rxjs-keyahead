import { Record, List} from 'immutable';
import { ImageLink } from './ImageLink';

export const Book = Record(
  {
    id: undefined,
    authors: undefined,
    averageRating: undefined,
    description: undefined,
    imageLinks: ImageLink,
    pageCount: undefined,
    subtitle: undefined,
    title: undefined,
    categories: undefined,
    ratingsCount: undefined,
    publishedDate: undefined,
    publisher: undefined,
  },
  'Book',
);

export const BooksList = List;

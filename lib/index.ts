import * as R from 'ramda';
import * as diacritics from 'diacritics';

export const clearString = R.pipe(
  diacritics.remove,
  R.toLower,
);

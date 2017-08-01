import * as R from 'ramda';
import * as diacritics from 'diacritics';

export const clearString = R.pipe(
  diacritics.remove,
  R.toLower,
);

export const filterByProp = R.curry((prop, query, list) => {
  return R.filter(
    R.pipe(
      R.prop(prop),
      clearString,
      R.test(
        new RegExp(
          clearString(query),
        ),
      ),
    ),
    list,
  );
});

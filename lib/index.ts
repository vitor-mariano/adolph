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

export const paginate = R.curry((p, perPage, list) => {
  const page = R.clamp(1, Infinity, p);
  const offset = perPage * R.dec(page);
  const limit = page * perPage;
  return R.slice(offset, limit, list);
});

export const removeByProp = R.curry((prop, value, list) => {
  const index = R.findIndex(
    R.propEq(prop, value),
    list,
  );

  return index > -1 ?
    R.remove(index, 1, list) :
    list;
});

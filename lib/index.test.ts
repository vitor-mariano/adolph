import * as R from 'ramda';
import {
  clearString,
  filterByProp,
  paginate,
} from './';

test('clearString', () => {
  expect(
    clearString('José Raphaël'),
  ).toBe('jose raphael');
});

test('filterByProp', () => {
  const list = [
    {
      id: 1,
      name: 'Joseph Climber',
    },
    {
      id: 2,
      name: 'José Raphaël',
    },
    {
      id: 1,
      name: 'André Moriatti',
    },
    {
      id: 1,
      name: 'Jöe Saldaña',
    },
  ];

  expect(
    filterByProp('name', 'Jösé', list),
  ).toEqual([
    {
      id: 1,
      name: 'Joseph Climber',
    },
    {
      id: 2,
      name: 'José Raphaël',
    },
  ]);
});

test('paginate', () => {
  const list = R.range(0, 20);

  expect(
    paginate(1, 10, list),
  ).toEqual(
    R.take(10, list),
  );

  expect(
    paginate(2, 15, list),
  ).toEqual(
    R.slice(15, Infinity, list),
  );

  expect(
    paginate(3, 15, list),
  ).toEqual([]);
});

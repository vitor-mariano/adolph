import {
  clearString,
  filterByProp,
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

"use strict";
exports.__esModule = true;
var R = require("ramda");
var _1 = require("./");
test('clearString', function () {
    expect(_1.clearString('José Raphaël')).toBe('jose raphael');
});
test('filterByProp', function () {
    var list = [
        {
            id: 1,
            name: 'Joseph Climber'
        },
        {
            id: 2,
            name: 'José Raphaël'
        },
        {
            id: 1,
            name: 'André Moriatti'
        },
        {
            id: 1,
            name: 'Jöe Saldaña'
        },
    ];
    expect(_1.filterByProp('name', 'Jösé', list)).toEqual([
        {
            id: 1,
            name: 'Joseph Climber'
        },
        {
            id: 2,
            name: 'José Raphaël'
        },
    ]);
});
test('paginate', function () {
    var list = R.range(0, 20);
    expect(_1.paginate(1, 10, list)).toEqual(R.take(10, list));
    expect(_1.paginate(2, 15, list)).toEqual(R.slice(15, Infinity, list));
    expect(_1.paginate(3, 15, list)).toEqual([]);
});
test('removeByProp', function () {
    var list = R.pipe(R.inc, R.range(1), R.map(function (id) { return ({ id: id }); }))(4);
    expect(_1.removeByProp('id', 2, list)).toEqual([
        { id: 1 },
        { id: 3 },
        { id: 4 },
    ]);
    expect(_1.removeByProp('id', 0, list)).toEqual(list);
});
//# sourceMappingURL=index.test.js.map
"use strict";
exports.__esModule = true;
var R = require("ramda");
var diacritics = require("diacritics");
exports.clearString = R.pipe(diacritics.remove, R.toLower);
exports.filterByProp = R.curry(function (prop, query, list) {
    return R.filter(R.pipe(R.prop(prop), exports.clearString, R.test(new RegExp(exports.clearString(query)))), list);
});
exports.paginate = R.curry(function (p, perPage, list) {
    var page = R.clamp(1, Infinity, p);
    var offset = perPage * R.dec(page);
    var limit = page * perPage;
    return R.slice(offset, limit, list);
});
exports.removeByProp = R.curry(function (prop, value, list) {
    var index = R.findIndex(R.propEq(prop, value), list);
    return index > -1 ?
        R.remove(index, 1, list) :
        list;
});
//# sourceMappingURL=index.js.map
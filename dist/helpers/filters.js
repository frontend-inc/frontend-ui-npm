"use strict";
// Frontend uses filters in 3 formats. These are helper
// methods to convert between these formats.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFilterArray = exports.mergeAllFilters = exports.mergeFilters = void 0;
// URL params
// The app uses syntax like this to pass filters in the URL:
// ?filters=()
var mergeFilters = function (filters, newFilters) {
    if (!filters)
        return newFilters;
    if (!newFilters)
        return filters;
    var mergedFilters = {
        AND: __spreadArray(__spreadArray([], ((filters === null || filters === void 0 ? void 0 : filters.AND) || []), true), ((newFilters === null || newFilters === void 0 ? void 0 : newFilters.AND) || []), true),
        OR: __spreadArray(__spreadArray([], (filters.OR || []), true), (newFilters.OR || []), true),
    };
    return mergedFilters;
};
exports.mergeFilters = mergeFilters;
var mergeAllFilters = function (filters) {
    if (filters.length === 0) {
        return {};
    }
    return filters.reduce(function (mergedFilter, currentFilter) {
        return (0, exports.mergeFilters)(mergedFilter, currentFilter);
    }, {});
};
exports.mergeAllFilters = mergeAllFilters;
// Convert the query object into an array of filter options
var formatFilterArray = function (filters) {
    var formattedFilters = [];
    if (typeof filters === 'object') {
        Object.keys(filters).forEach(function (where) {
            filters[where].forEach(function (filter) {
                var field = Object.keys(filter)[0];
                var operator = Object.keys(filter[field])[0];
                var value = filter[field][operator];
                //@ts-ignore
                formattedFilters.push({
                    where: where,
                    field: field,
                    operator: operator,
                    value: value,
                });
            });
        });
    }
    return formattedFilters;
};
exports.formatFilterArray = formatFilterArray;

'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var helpers_1 = require("../../helpers");
var useSearch = function (props) {
    var _a;
    var _b = props.query, defaultQuery = _b === void 0 ? {} : _b;
    var _c = (0, frontend_js_1.useResourceContext)(), loading = _c.loading, delayedLoading = _c.delayedLoading, resources = _c.resources, query = _c.query, setQuery = _c.setQuery, findMany = _c.findMany, reloadMany = _c.reloadMany, page = _c.page, numPages = _c.numPages, loadMore = _c.loadMore;
    var _d = (0, react_1.useState)(), filter = _d[0], setFilter = _d[1];
    var _e = (0, react_1.useState)([]), queryFilters = _e[0], setQueryFilters = _e[1];
    var _f = (0, react_1.useState)([]), activeFilters = _f[0], setActiveFilters = _f[1];
    var _g = (0, react_1.useState)(''), keywords = _g[0], setKeywords = _g[1];
    var _h = (0, react_1.useState)(''), location = _h[0], setLocation = _h[1];
    var findFilter = function (fieldName, filters) {
        var foundFilter = filters.find(function (f) { return f.name == fieldName; });
        setFilter(foundFilter);
        return foundFilter;
    };
    var compareValues = function (a, b) {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a.sort().join(',') === b.sort().join(',');
        }
        return a === b;
    };
    // Compare only the name and operator and override
    var findDuplicateFilterIndex = function (filters, filter) {
        return filters.findIndex(function (f) { return f.name === filter.name && f.operator === filter.operator; });
    };
    var handleAddFilter = function (filter) {
        var updatedFilters = __spreadArray([], activeFilters, true);
        var duplicateIndex = findDuplicateFilterIndex(activeFilters, filter);
        if (duplicateIndex > -1) {
            updatedFilters = updatedFilters === null || updatedFilters === void 0 ? void 0 : updatedFilters.filter(function (f, index) { return index !== duplicateIndex; });
        }
        else {
            //@ts-ignore
            updatedFilters = __spreadArray(__spreadArray([], updatedFilters, true), [filter], false);
        }
        setActiveFilters(updatedFilters);
        return updatedFilters;
    };
    var isBlank = function (value) {
        return (value === '' ||
            value == undefined ||
            value == null ||
            (Array.isArray(value) && value.length === 0));
    };
    var buildQueryFilters = function (activeFilters) {
        var filters = [];
        activeFilters
            .filter(function (filter) { return !isBlank(filter === null || filter === void 0 ? void 0 : filter.value); })
            .forEach(function (filter) {
            var _a, _b;
            var name = filter.name, operator = filter.operator, value = filter.value;
            filters = __spreadArray(__spreadArray([], filters, true), [
                (_a = {}, _a[name] = (_b = {}, _b[operator] = value, _b), _a)
            ], false);
        });
        return filters;
    };
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleLocationChange = function (ev) {
        setLocation(ev.target.value);
    };
    var handleSearch = function (keywords, location) {
        if (keywords === void 0) { keywords = ''; }
        if (location === void 0) { location = ''; }
        var searchQuery = __assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1 });
        if ((location === null || location === void 0 ? void 0 : location.length) > 0) {
            searchQuery = __assign(__assign({}, searchQuery), { location: location });
        }
        else {
            searchQuery = __assign(__assign({}, searchQuery), { location: null });
        }
        findMany(searchQuery);
    };
    var handleSortBy = function (field) {
        findMany(__assign(__assign({}, query), { sort_by: field === null || field === void 0 ? void 0 : field.name }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
    };
    (0, react_1.useEffect)(function () {
        findMany(__assign(__assign({}, defaultQuery), { filters: __spreadArray(__spreadArray([], queryFilters, true), ((defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters) || []), true), sort_by: 'id', sort_direction: 'desc', keywords: '', page: 1 }));
    }, [queryFilters]);
    (0, react_1.useEffect)(function () {
        setQueryFilters(buildQueryFilters(activeFilters));
    }, [activeFilters]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (((_a = defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters) === null || _a === void 0 ? void 0 : _a.length) >= 0) {
            var filterArray = (0, helpers_1.formatFilterArray)(defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters);
            setActiveFilters(filterArray);
        }
    }, [(_a = defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters) === null || _a === void 0 ? void 0 : _a.length]);
    return {
        loading: loading,
        delayedLoading: delayedLoading,
        resources: resources,
        query: query,
        findMany: findMany,
        reloadMany: reloadMany,
        page: page,
        numPages: numPages,
        loadMore: loadMore,
        keywords: keywords,
        setKeywords: setKeywords,
        handleKeywordChange: handleKeywordChange,
        location: location,
        setLocation: setLocation,
        handleLocationChange: handleLocationChange,
        handleSearch: handleSearch,
        handleSortBy: handleSortBy,
        handleSortDirection: handleSortDirection,
        activeFilters: activeFilters,
        setActiveFilters: setActiveFilters,
        handleAddFilter: handleAddFilter,
        handleClearFilters: handleClearFilters,
    };
};
exports.default = useSearch;

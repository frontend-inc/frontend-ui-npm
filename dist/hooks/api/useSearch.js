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
    var _a = props.query, defaultQuery = _a === void 0 ? { filters: [] } : _a;
    var _b = (0, frontend_js_1.useResourceContext)(), loading = _b.loading, delayedLoading = _b.delayedLoading, resources = _b.resources, query = _b.query, setQuery = _b.setQuery, findMany = _b.findMany, reloadMany = _b.reloadMany, page = _b.page, numPages = _b.numPages, loadMore = _b.loadMore;
    var _c = (0, react_1.useState)([]), activeFilters = _c[0], setActiveFilters = _c[1];
    var _d = (0, react_1.useState)(''), keywords = _d[0], setKeywords = _d[1];
    var _e = (0, react_1.useState)(''), location = _e[0], setLocation = _e[1];
    // Finds the index of a filter that has the exact same name, operator, and value.
    var findExactFilterIndex = function (filters, filter) {
        var _a = filter || {}, name = _a.name, operator = _a.operator, value = _a.value;
        return filters.findIndex(function (f) { return f.name == name && f.operator == operator && f.value == value; });
    };
    // Removes all filters that share the same name and operator (regardless of value)
    var removeDuplicateNameOperatorFilters = function (filters, filter) {
        return filters.filter(function (f) { return f.name !== filter.name || f.operator !== filter.operator; });
    };
    var handleToggleFilter = function (filter) {
        var currentFilters = buildQueryFilters(activeFilters || []);
        var exactIndex = findExactFilterIndex(activeFilters, filter);
        var updatedFilters;
        if (exactIndex > -1) {
            // The exact filter is present, so we remove it (toggling off)
            updatedFilters = currentFilters.filter(function (f, index) { return index !== exactIndex; });
        }
        else {
            // No exact match. We need to ensure only one filter with the same name/operator.
            // Remove any existing filters with the same name & operator.
            updatedFilters = removeDuplicateNameOperatorFilters(currentFilters, filter);
            // Add the new filter
            updatedFilters = __spreadArray(__spreadArray([], updatedFilters, true), [filter], false);
        }
        // Convert back to the desired query format (assuming buildQueryFilters works both ways)
        var queryFilters = buildQueryFilters(updatedFilters);
        findMany(__assign(__assign({}, defaultQuery), { filters: __spreadArray(__spreadArray([], defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, true), queryFilters, true), keywords: '', page: 1 }));
    };
    var isBlank = function (value) {
        return (value === '' ||
            value == undefined ||
            value == null ||
            (Array.isArray(value) && value.length === 0));
    };
    var buildQueryFilters = function (filters) {
        return filters
            .filter(function (filter) { return !isBlank(filter === null || filter === void 0 ? void 0 : filter.value); })
            .map(function (filter) {
            var _a, _b;
            var name = filter.name, operator = filter.operator, value = filter.value;
            return _a = {}, _a[name] = (_b = {}, _b[operator] = value, _b), _a;
        });
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
        var searchQuery = __assign(__assign(__assign({}, query), defaultQuery), { filters: __spreadArray(__spreadArray([], (query.filters || []), true), (defaultQuery.filters || []), true), keywords: keywords, page: 1 });
        if ((location === null || location === void 0 ? void 0 : location.length) > 0) {
            searchQuery = __assign(__assign({}, searchQuery), { location: location });
        }
        else {
            searchQuery = __assign(__assign({}, searchQuery), { location: null });
        }
        findMany(searchQuery);
    };
    var handleSortBy = function (sortBy) {
        findMany(__assign(__assign({}, query), { sort_by: sortBy }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
    };
    (0, react_1.useEffect)(function () {
        setActiveFilters((0, helpers_1.formatFilterArray)(query === null || query === void 0 ? void 0 : query.filters));
    }, [query === null || query === void 0 ? void 0 : query.filters]);
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
        handleToggleFilter: handleToggleFilter,
        handleClearFilters: handleClearFilters,
    };
};
exports.default = useSearch;

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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var useSearch = function (props) {
    var _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.perPage, perPage = _b === void 0 ? 20 : _b;
    var _c = (0, frontend_js_1.useCollection)(), loading = _c.loading, delayedLoading = _c.delayedLoading, resources = _c.resources, query = _c.query, findMany = _c.findMany, reloadMany = _c.reloadMany, page = _c.page, numPages = _c.numPages, loadMore = _c.loadMore;
    var _d = (0, react_1.useState)(''), keywords = _d[0], setKeywords = _d[1];
    var _e = (0, react_1.useState)(''), location = _e[0], setLocation = _e[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleLocationChange = function (ev) {
        setLocation(ev.target.value);
    };
    var handleSearch = function (keywords, location) {
        if (keywords === void 0) { keywords = ''; }
        if (location === void 0) { location = ''; }
        var searchQuery = __assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage });
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
    var _f = (0, __1.useFilters)({
        query: query,
    }), mergeFilters = _f.mergeFilters, buildQueryFilters = _f.buildQueryFilters, activeFilters = _f.activeFilters, setActiveFilters = _f.setActiveFilters, handleAddFilter = _f.handleAddFilter;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany(__assign(__assign({}, defaultQuery), { filters: defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, sort_by: 'id', sort_direction: 'desc', keywords: '', page: 1, per_page: perPage }));
    };
    var handleFilter = function (filter) {
        var newFilters = handleAddFilter(filter);
        var queryFilter = buildQueryFilters(newFilters);
        var mergedFilters = mergeFilters(defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, queryFilter);
        findMany(__assign(__assign(__assign({}, defaultQuery), query), { filters: mergedFilters, page: 1 }));
    };
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
        handleFilter: handleFilter,
        handleClearFilters: handleClearFilters,
    };
};
exports.default = useSearch;

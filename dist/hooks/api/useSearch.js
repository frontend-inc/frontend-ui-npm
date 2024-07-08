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
    var url = props.url, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.perPage, perPage = _b === void 0 ? 20 : _b;
    var _c = (0, frontend_js_1.useQuery)(), loading = _c.loading, delayedLoading = _c.delayedLoading, resources = _c.resources, query = _c.query, findMany = _c.findMany, reloadMany = _c.reloadMany, page = _c.page, numPages = _c.numPages, loadMore = _c.loadMore;
    var _d = (0, react_1.useState)(''), keywords = _d[0], setKeywords = _d[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        if (keywords === void 0) { keywords = ''; }
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSortBy = function (field) {
        findMany(__assign(__assign({}, query), { sort_by: field === null || field === void 0 ? void 0 : field.field }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _e = (0, __1.useFilters)({
        query: query,
    }), activeFilters = _e.activeFilters, setActiveFilters = _e.setActiveFilters, handleAddFilter = _e.handleAddFilter;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany(__assign(__assign({}, defaultQuery), { filters: defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, sort_by: 'id', sort_direction: 'desc', keywords: '', page: 1, per_page: perPage }));
    };
    var handleFilter = function (filter) {
        handleAddFilter(filter);
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
        handleSearch: handleSearch,
        handleSortBy: handleSortBy,
        handleSortDirection: handleSortDirection,
        activeFilters: activeFilters,
        handleFilter: handleFilter,
        handleClearFilters: handleClearFilters,
    };
};
exports.default = useSearch;

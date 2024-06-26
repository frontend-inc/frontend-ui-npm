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
var hooks_1 = require("../../hooks");
var useSearch = function (props) {
    var _a;
    var url = props.url, _b = props.perPage, perPage = _b === void 0 ? 20 : _b, user = props.user, _c = props.filterUser, filterUser = _c === void 0 ? false : _c, _d = props.filterTeam, filterTeam = _d === void 0 ? false : _d, _e = props.query, defaultQuery = _e === void 0 ? {} : _e;
    var _f = (0, frontend_js_1.useDocuments)({
        url: url,
    }), loading = _f.loading, delayedLoading = _f.delayedLoading, resources = _f.resources, query = _f.query, findMany = _f.findMany, reloadMany = _f.reloadMany, page = _f.page, numPages = _f.numPages, loadMore = _f.loadMore;
    var _g = (0, react_1.useState)(''), keywords = _g[0], setKeywords = _g[1];
    var handleKeywordChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, query), defaultQuery), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSortBy = function (field) {
        findMany(__assign(__assign({}, query), { sort_by: field === null || field === void 0 ? void 0 : field.field }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _h = (0, hooks_1.useFilters)({
        query: query,
    }), queryFilters = _h.queryFilters, activeFilters = _h.activeFilters, setActiveFilters = _h.setActiveFilters, handleAddFilter = _h.handleAddFilter, mergeAllFilters = _h.mergeAllFilters, buildUserFilters = _h.buildUserFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: mergeAllFilters([defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, userFilter]),
            sort_by: 'id',
            sort_direction: 'desc',
            keywords: '',
            page: 1,
            per_page: perPage,
        });
    };
    var handleFilter = function (filter) {
        handleAddFilter(filter);
    };
    var userFilter = buildUserFilters(user, filterUser, filterTeam);
    (0, react_1.useEffect)(function () {
        if (url && user) {
            findMany(__assign(__assign({}, defaultQuery), { filters: mergeAllFilters([
                    defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters,
                    userFilter,
                    queryFilters,
                ]), per_page: perPage }));
        }
    }, [
        url,
        perPage,
        user,
        filterUser,
        filterTeam,
        queryFilters,
        (_a = Object.keys(defaultQuery)) === null || _a === void 0 ? void 0 : _a.length,
    ]);
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

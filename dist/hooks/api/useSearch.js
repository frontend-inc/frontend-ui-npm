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
    var url = props.url, _a = props.perPage, perPage = _a === void 0 ? 20 : _a, _b = props.filterUser, filterUser = _b === void 0 ? false : _b, _c = props.filterTeam, filterTeam = _c === void 0 ? false : _c, _d = props.query, defaultQuery = _d === void 0 ? {} : _d;
    var _e = (0, frontend_js_1.useQuery)(), loading = _e.loading, delayedLoading = _e.delayedLoading, resources = _e.resources, query = _e.query, findMany = _e.findMany, reloadMany = _e.reloadMany, page = _e.page, numPages = _e.numPages, loadMore = _e.loadMore;
    var _f = (0, react_1.useState)(''), keywords = _f[0], setKeywords = _f[1];
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
    var _g = (0, __1.useFilters)({
        query: query,
    }), queryFilters = _g.queryFilters, activeFilters = _g.activeFilters, setActiveFilters = _g.setActiveFilters, handleAddFilter = _g.handleAddFilter, mergeFilters = _g.mergeFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters,
            sort_by: 'id',
            sort_direction: 'desc',
            keywords: '',
            page: 1,
            per_page: perPage,
            current_user: filterUser ? true : false,
            current_team: filterTeam ? true : false
        });
    };
    var handleFilter = function (filter) {
        handleAddFilter(filter);
    };
    (0, react_1.useEffect)(function () {
        if (!loading && url && perPage && defaultQuery && queryFilters) {
            findMany(__assign(__assign({}, defaultQuery), { filters: mergeFilters(defaultQuery === null || defaultQuery === void 0 ? void 0 : defaultQuery.filters, queryFilters), per_page: perPage, current_user: filterUser ? true : false, current_team: filterTeam ? true : false }));
        }
    }, [url, filterUser, filterTeam]);
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

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var CollectionSearchFilters_1 = __importDefault(require("./filters/CollectionSearchFilters"));
var hooks_2 = require("../../../hooks");
var Collection = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var title = props.title, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, url = props.url, _c = props.filterAnchor, filterAnchor = _c === void 0 ? 'left' : _c, _d = props.filterOptions, filterOptions = _d === void 0 ? [] : _d, _e = props.sortOptions, sortOptions = _e === void 0 ? [] : _e, _f = props.query, defaultQuery = _f === void 0 ? {} : _f, _g = props.perPage, perPage = _g === void 0 ? 20 : _g, _h = props.enableSearch, enableSearch = _h === void 0 ? false : _h, _j = props.enableFilters, enableFilters = _j === void 0 ? false : _j, _k = props.enableSorting, enableSorting = _k === void 0 ? false : _k, _l = props.enableInfiniteLoad, enableInfiniteLoad = _l === void 0 ? false : _l, _m = props.enableLoadMore, enableLoadMore = _m === void 0 ? true : _m, navigateUrl = props.navigateUrl, buttonText = props.buttonText, _o = props.enableBorder, enableBorder = _o === void 0 ? false : _o, _p = props.enableGradient, enableGradient = _p === void 0 ? false : _p;
    var _q = (0, frontend_js_1.useResource)({
        url: url,
    }), loading = _q.loading, query = _q.query, findMany = _q.findMany, resources = _q.resources, page = _q.page, numPages = _q.numPages, loadMore = _q.loadMore;
    var _r = (0, react_1.useState)(''), keywords = _r[0], setKeywords = _r[1];
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, defaultQuery), query), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var handleSortBy = function (sortBy) {
        findMany(__assign(__assign({}, query), { sort_by: sortBy }));
    };
    var handleSortDirection = function (sortDirection) {
        findMany(__assign(__assign({}, query), { sort_direction: sortDirection }));
    };
    var _s = (0, hooks_1.useFilters)({
        query: query,
    }), activeFilters = _s.activeFilters, setActiveFilters = _s.setActiveFilters, handleAddFilter = _s.handleAddFilter, buildQueryFilters = _s.buildQueryFilters;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: {},
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
    var handleClick = function (item) {
        if (clientUrl && navigateUrl && (item === null || item === void 0 ? void 0 : item.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(navigateUrl, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    var delayedLoading = (0, hooks_2.useDelayedLoading)({
        loading: loading,
        delay: 250,
    }).loading;
    (0, react_1.useEffect)(function () {
        if (url && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, perPage]);
    (0, react_1.useEffect)(function () {
        if ((activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters.length) >= 0) {
            findMany(__assign(__assign({}, query), { filters: buildQueryFilters(activeFilters), page: 1, per_page: perPage }));
        }
    }, [activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters.length]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
            react_1.default.createElement(__1.Heading, { title: title }),
            enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch })),
            react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.sortFilterActions, spacing: 1 },
                enableFilters && filterAnchor == 'top' && (react_1.default.createElement(__1.CollectionFilterButton, { filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters, filterOptions: filterOptions })),
                enableSorting && (react_1.default.createElement(__1.SortButton, { sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, sortOptions: sortOptions, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 },
            enableFilters && filterAnchor == 'left' && (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 4, lg: 3 },
                react_1.default.createElement(material_1.Box, { sx: sx.filtersContainer },
                    react_1.default.createElement(CollectionSearchFilters_1.default, { filters: activeFilters, filterOptions: filterOptions, handleFilter: handleFilter })))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: enableFilters && filterAnchor == 'left' ? 8 : 12, lg: enableFilters && filterAnchor == 'left' ? 9 : 12 },
                react_1.default.createElement(material_1.Box, { sx: __assign({}, (delayedLoading && sx.loading)) },
                    react_1.default.createElement(components_1.CollectionList, { layout: layout, style: style, resources: resources, handleClick: handleClick, buttonText: buttonText, enableBorder: enableBorder, enableGradient: enableGradient })),
                !loading && resources.length == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "Search", title: "No results found", description: "Try adjusting your search or filters" })))),
        enableLoadMore && (react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore, enableInfiniteLoad: enableInfiniteLoad }))));
};
exports.default = Collection;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    item: {
        p: 2,
    },
    filtersContainer: {
        mr: {
            sm: 2,
            xs: 0,
        },
        mb: {
            sm: 0,
            xs: 2,
        },
    },
    sortFilterActions: {
        justifyContent: 'flex-end',
    },
    loading: {
        opacity: 0.7,
    },
    circularProgress: {
        color: 'primary.main',
    },
};

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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var material_2 = require("@mui/material");
var context_1 = require("../../../context");
var index_1 = require("../../../constants/index");
var router_1 = require("next/router");
var CollectionCard_1 = __importDefault(require("./CollectionCard"));
var Collection = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var title = props.title, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, url = props.url, fields = props.fields, _c = props.query, defaultQuery = _c === void 0 ? {} : _c, _d = props.perPage, perPage = _d === void 0 ? 20 : _d, _e = props.enableSearch, enableSearch = _e === void 0 ? false : _e, _f = props.enableFilters, enableFilters = _f === void 0 ? false : _f, _g = props.enableSortTitle, enableSortTitle = _g === void 0 ? false : _g, _h = props.enableSortPrice, enableSortPrice = _h === void 0 ? false : _h, _j = props.enableInfiniteLoad, enableInfiniteLoad = _j === void 0 ? false : _j, _k = props.enableLoadMore, enableLoadMore = _k === void 0 ? true : _k, navigateUrl = props.navigateUrl, buttonText = props.buttonText, _l = props.enableBorder, enableBorder = _l === void 0 ? false : _l, _m = props.enableGradient, enableGradient = _m === void 0 ? false : _m;
    var _o = (0, frontend_js_1.useResource)({
        url: url,
    }), loading = _o.loading, query = _o.query, findMany = _o.findMany, resources = _o.resources, page = _o.page, numPages = _o.numPages, loadMore = _o.loadMore;
    var _p = (0, react_1.useState)(''), keywords = _p[0], setKeywords = _p[1];
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
    var _q = (0, hooks_1.useFilters)({
        query: query,
        handleSubmit: findMany,
    }), activeFilters = _q.activeFilters, setActiveFilters = _q.setActiveFilters, handleAddFilter = _q.handleAddFilter;
    // Filter methods
    var handleClearFilters = function () {
        setActiveFilters([]);
        findMany({
            filters: {},
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
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: 'space-between', spacing: 1 },
            react_1.default.createElement(material_2.Typography, { variant: "h5", color: "textPrimary" }, title),
            react_1.default.createElement(material_1.Box, null,
                enableFilters && (react_1.default.createElement(__1.ListFilterButton, { fields: fields, filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters })),
                (enableSortTitle || enableSortPrice) && (react_1.default.createElement(__1.ListSortButton, { sortBy: query === null || query === void 0 ? void 0 : query.sort_by, sortDirection: query === null || query === void 0 ? void 0 : query.sort_direction, fields: __spreadArray(__spreadArray([], ((enableSortTitle && [index_1.TITLE_SORT]) || []), true), ((enableSortPrice && [index_1.PRICE_SORT]) || []), true), handleSortBy: handleSortBy, handleSortDirection: handleSortDirection })))),
        enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch })),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.content), (layout == 'grid' ? sx.grid : sx.list)) }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) {
            var _a, _b;
            return (react_1.default.createElement(CollectionCard_1.default, { key: index, layout: layout, style: style, title: resource === null || resource === void 0 ? void 0 : resource.title, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, video: (_b = resource === null || resource === void 0 ? void 0 : resource.video) === null || _b === void 0 ? void 0 : _b.url, description: resource === null || resource === void 0 ? void 0 : resource.description, buttonText: buttonText, handleClick: function () { return handleClick(resource); }, enableBorder: enableBorder, enableGradient: enableGradient }));
        })),
        enableLoadMore && (react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore, enableInfiniteLoad: enableInfiniteLoad }))));
};
exports.default = Collection;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px'
    },
    item: {
        p: 2
    }
};

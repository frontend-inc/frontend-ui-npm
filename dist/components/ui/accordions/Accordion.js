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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("..");
var material_2 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var AccordionView = function (props) {
    var theme = (0, material_2.useTheme)();
    var title = props.title, url = props.url, fields = props.fields, _a = props.query, defaultQuery = _a === void 0 ? {} : _a, _b = props.perPage, perPage = _b === void 0 ? 20 : _b, editing = props.editing, _c = props.enableSearch, enableSearch = _c === void 0 ? false : _c, _d = props.enableFilters, enableFilters = _d === void 0 ? false : _d, _e = props.enableInfiniteLoad, enableInfiniteLoad = _e === void 0 ? false : _e, _f = props.enableLoadMore, enableLoadMore = _f === void 0 ? true : _f;
    var _g = (0, frontend_js_1.useResource)({
        url: url,
    }), loading = _g.loading, query = _g.query, findMany = _g.findMany, resources = _g.resources, page = _g.page, numPages = _g.numPages, loadMore = _g.loadMore;
    var _h = (0, react_1.useState)(''), keywords = _h[0], setKeywords = _h[1];
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findMany(__assign(__assign(__assign({}, defaultQuery), query), { keywords: keywords, page: 1, per_page: perPage }));
    };
    var _j = (0, hooks_1.useFilters)({
        query: query,
        handleSubmit: findMany,
    }), activeFilters = _j.activeFilters, setActiveFilters = _j.setActiveFilters, handleAddFilter = _j.handleAddFilter;
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
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: 'space-between', spacing: 1 },
            react_1.default.createElement(material_2.Typography, { variant: "h6", color: "textPrimary" }, title),
            react_1.default.createElement(material_1.Box, null, enableFilters && (react_1.default.createElement(__1.ListFilterButton, { fields: fields, filters: activeFilters, handleFilter: handleFilter, handleClear: handleClearFilters })))),
        enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch })), resources === null || resources === void 0 ? void 0 :
        resources.map(function (resource, i) { return (react_1.default.createElement(__1.AccordionItem, { key: i, title: resource === null || resource === void 0 ? void 0 : resource.title, description: resource === null || resource === void 0 ? void 0 : resource.description, image: resource === null || resource === void 0 ? void 0 : resource.image })); }),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: react_1.default.createElement(lucide_react_1.Search, { color: theme.palette.text.secondary }), title: "No results found", description: "Try adjusting your search or filters" })),
        enableLoadMore && (react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore, enableInfiniteLoad: enableInfiniteLoad }))));
};
exports.default = AccordionView;
var sx = {
    root: {
        width: '100%',
    },
    accordionSummary: {},
};

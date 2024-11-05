'use client';
"use strict";
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
var frontend_shopify_1 = require("frontend-shopify");
var navigation_1 = require("next/navigation");
var __1 = require("../..");
var __2 = require("..");
var LoadMore_1 = __importDefault(require("../search/LoadMore"));
var ShopifyProductSearch = function (_a) {
    var options = _a.options, _b = _a.enableSearch, enableSearch = _b === void 0 ? false : _b, _c = _a.enableFilters, enableFilters = _c === void 0 ? false : _c, _d = _a.enableSorting, enableSorting = _d === void 0 ? false : _d, _e = _a.enableAddToCart, enableAddToCart = _e === void 0 ? false : _e, _f = _a.enableQuantity, enableQuantity = _f === void 0 ? false : _f;
    var handle = (0, navigation_1.useParams)().handle;
    if (handle == 'index' || handle == undefined)
        handle = '';
    var _g = (0, react_1.useState)(''), keywords = _g[0], setKeywords = _g[1];
    var _h = (0, frontend_shopify_1.useProducts)(), loading = _h.loading, cursor = _h.cursor, hasNextPage = _h.hasNextPage, products = _h.products, findProducts = _h.findProducts, searchProducts = _h.searchProducts;
    var _j = (0, react_1.useState)('RELEVANCE'), sortKey = _j[0], setSortKey = _j[1];
    var _k = (0, react_1.useState)(false), reverse = _k[0], setReverse = _k[1];
    var _l = (0, frontend_shopify_1.useSearchFilters)(), filters = _l.filters, handleFilter = _l.handleFilter, handleFilterArray = _l.handleFilterArray, formatQueryFilters = _l.formatQueryFilters;
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleSearch = function (keywords) {
        findProducts({
            query: keywords,
            sortKey: sortKey,
            reverse: reverse,
        });
    };
    var handleLoadMore = function (after) {
        searchProducts({
            query: keywords,
            sortKey: sortKey,
            reverse: reverse,
            after: after,
        });
    };
    var handleSortClick = function (sortKey, reverse) {
        if (reverse === void 0) { reverse = false; }
        setSortKey(sortKey);
        setReverse(reverse);
        findProducts({
            query: keywords,
            sortKey: sortKey,
            reverse: reverse,
        });
    };
    (0, react_1.useEffect)(function () {
        findProducts({
            sortKey: sortKey,
            reverse: reverse,
        });
    }, []);
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 w-full items-center" },
            enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search' })),
            enableFilters && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                react_1.default.createElement(__2.ShopifyProductSearchFilters, { filters: filters, options: options, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))),
            enableSorting && (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
                react_1.default.createElement(__2.ShopifyProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick })))),
        (products === null || products === void 0 ? void 0 : products.length) > 0 && (react_1.default.createElement(__2.ShopifyProducts, { loading: loading, products: products, enableAddToCart: enableAddToCart, enableQuantity: enableQuantity })),
        !loading && (!products || (products === null || products === void 0 ? void 0 : products.length) == 0) && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No search results", description: "Try another search term" })),
        react_1.default.createElement(LoadMore_1.default, { loading: loading, hasNextPage: hasNextPage, handleSearch: function () { return handleLoadMore(cursor); } })));
};
exports.default = ShopifyProductSearch;

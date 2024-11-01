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
var frontend_shadcn_1 = require("frontend-shadcn");
var PER_PAGE = 48;
var ShopifyProductSearch = function (_a) {
    var options = _a.options, priceOptions = _a.priceOptions, _b = _a.enableFilters, enableFilters = _b === void 0 ? false : _b, _c = _a.enableSorting, enableSorting = _c === void 0 ? false : _c, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = _a.enableAddToCart, enableAddToCart = _e === void 0 ? false : _e, _f = _a.enableQuickShop, enableQuickShop = _f === void 0 ? false : _f, _g = _a.enableQuantity, enableQuantity = _g === void 0 ? false : _g;
    var handle = (0, navigation_1.useParams)().handle;
    if (handle == 'index' || handle == undefined)
        handle = '';
    var _h = (0, react_1.useState)(''), keywords = _h[0], setKeywords = _h[1];
    var first = PER_PAGE;
    var _j = (0, frontend_shopify_1.useProducts)(), loading = _j.loading, cursor = _j.cursor, hasNextPage = _j.hasNextPage, products = _j.products, findProducts = _j.findProducts, searchProducts = _j.searchProducts;
    var _k = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _k[0], setSortKey = _k[1];
    var _l = (0, react_1.useState)(false), reverse = _l[0], setReverse = _l[1];
    var _m = (0, frontend_shopify_1.useSearchFilters)(), filters = _m.filters, handleFilter = _m.handleFilter, handleFilterArray = _m.handleFilterArray, formatQueryFilters = _m.formatQueryFilters;
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) == 0) {
            handleSearch('');
        }
    };
    var handleSearch = function (keywords) {
        setKeywords(keywords);
    };
    var handleLoadMore = function (after) {
        searchProducts({
            query: "".concat(keywords, " tag_not:hidden"),
            first: first,
            after: after,
        });
    };
    var handleSortClick = function (sortKey, reverse) {
        if (reverse === void 0) { reverse = false; }
        setSortKey(sortKey);
        setReverse(reverse);
    };
    (0, react_1.useEffect)(function () {
        if ((filters === null || filters === void 0 ? void 0 : filters.length) > 0) {
            var filterQuery = formatQueryFilters(filters);
            searchProducts({
                query: "".concat(keywords, " ").concat(filterQuery),
            });
        }
        else {
            findProducts({
                first: 20,
            });
        }
    }, [filters]);
    return (react_1.default.createElement("div", { className: "pt-2" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col sm:flex-row justify-between items-center mb-1', 'sm:ml-1 ml-0') }, enableSorting && (react_1.default.createElement(__2.ShopifyProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick }))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4" },
            enableFilters && (react_1.default.createElement("div", { className: "col-span-1 md:col-span-3" },
                react_1.default.createElement(__2.ShopifyProductSearchFilters, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))),
            react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('col-span-1', enableFilters ? 'md:col-span-9' : 'md:col-span-12') },
                react_1.default.createElement("div", { className: "mb-2" },
                    react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search' })),
                (products === null || products === void 0 ? void 0 : products.length) > 0 && (react_1.default.createElement(__2.ShopifyProducts, { loading: loading, products: products, xs: 12, sm: 6, md: enableFilters ? 6 : 4, lg: 4, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity })),
                !loading && (!products || (products === null || products === void 0 ? void 0 : products.length) == 0) && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No search results", description: "Try another search term" })),
                react_1.default.createElement(LoadMore_1.default, { loading: loading, hasNextPage: hasNextPage, handleSearch: function () { return handleLoadMore(cursor); } })))));
};
exports.default = ShopifyProductSearch;

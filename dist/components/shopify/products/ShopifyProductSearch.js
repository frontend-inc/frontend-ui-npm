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
var addons_1 = require("../../../hooks/addons");
var router_1 = require("next/router");
var material_1 = require("@mui/material");
var __1 = require("../..");
var __2 = require("..");
var LoadMore_1 = __importDefault(require("../search/LoadMore"));
var hooks_1 = require("../../../hooks");
var PER_PAGE = 48;
var ShopifyProductSearch = function (props) {
    var href = props.href, options = props.options, priceOptions = props.priceOptions, _a = props.enableFilters, enableFilters = _a === void 0 ? false : _a, _b = props.enableSorting, enableSorting = _b === void 0 ? false : _b, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = props.enableAddToCart, enableAddToCart = _d === void 0 ? false : _d, _e = props.enableQuickShop, enableQuickShop = _e === void 0 ? false : _e, _f = props.enableQuantity, enableQuantity = _f === void 0 ? false : _f, _g = props.enableOkendoStarRating, enableOkendoStarRating = _g === void 0 ? false : _g;
    var router = (0, router_1.useRouter)();
    var trackProductsSearched = (0, addons_1.useSegment)().trackProductsSearched;
    var _h = router.query, pageId = _h.page_id, handle = _h.handle;
    if (handle == 'index' || handle == undefined)
        handle = '';
    var _j = (0, react_1.useState)(handle), query = _j[0], setQuery = _j[1];
    var _k = (0, react_1.useState)(String(query).toLowerCase()), keywords = _k[0], setKeywords = _k[1];
    var first = PER_PAGE;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _l = (0, frontend_shopify_1.useProducts)(), loading = _l.loading, errors = _l.errors, cursor = _l.cursor, hasNextPage = _l.hasNextPage, products = _l.products, findProducts = _l.findProducts, searchProducts = _l.searchProducts;
    var _m = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _m[0], setSortKey = _m[1];
    var _o = (0, react_1.useState)(false), reverse = _o[0], setReverse = _o[1];
    var _p = (0, frontend_shopify_1.useSearchFilters)(), filters = _p.filters, handleFilter = _p.handleFilter, handleFilterArray = _p.handleFilterArray, formatQueryFilters = _p.formatQueryFilters;
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) == 0) {
            handleSearch('');
        }
    };
    var handleSearch = function (keywords) {
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) > 0) {
            trackProductsSearched(keywords);
        }
        router.push("".concat(clientUrl, "/").concat(pageId, "/").concat(keywords.split(' ').join('-')));
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
        var _a;
        if ((query === null || query === void 0 ? void 0 : query.length) > 0 || (filters === null || filters === void 0 ? void 0 : filters.length) > 0) {
            var searchKeywords = (_a = decodeURI(String(query)).split('-')) === null || _a === void 0 ? void 0 : _a.join(' ');
            var filterQuery = formatQueryFilters(filters);
            searchProducts({
                query: "".concat(searchKeywords, " ").concat(filterQuery),
            });
        }
        else {
            findProducts({
                first: 20,
            });
        }
    }, [query, filters]);
    (0, react_1.useEffect)(function () {
        setQuery(handle);
    }, [handle]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.header, spacing: 1 }, enableSorting && (react_1.default.createElement(__2.ShopifyProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick }))),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 },
            enableFilters && (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 3 },
                react_1.default.createElement(__2.ShopifyProductSearchFilters, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: enableFilters ? 9 : 12 },
                react_1.default.createElement(material_1.Box, { sx: sx.searchInput },
                    react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search' })),
                (products === null || products === void 0 ? void 0 : products.length) > 0 && (react_1.default.createElement(__2.ShopifyProductGrid, { href: href, loading: loading, products: products, xs: 12, sm: 6, md: enableFilters ? 6 : 4, lg: 4, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })),
                !loading && (!products || (products === null || products === void 0 ? void 0 : products.length) == 0) && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No search results", description: "Try another search term" })),
                react_1.default.createElement(LoadMore_1.default, { loading: loading, hasNextPage: hasNextPage, handleSearch: function () { return handleLoadMore(cursor); } })))));
};
exports.default = ShopifyProductSearch;
var sx = {
    root: {
        pt: 2,
    },
    searchInput: {
        mb: 2,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
        ml: {
            sm: 1,
            xs: 0,
        },
    },
};

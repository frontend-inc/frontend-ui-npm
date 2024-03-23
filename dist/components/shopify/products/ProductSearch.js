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
var context_1 = require("../../../context");
var __3 = require("../..");
var PER_PAGE = 48;
var ProductSearch = function (props) {
    var title = props.title, _a = props.editing, editing = _a === void 0 ? false : _a, options = props.options, priceOptions = props.priceOptions, _b = props.enableFilters, enableFilters = _b === void 0 ? false : _b, _c = props.enableSorting, enableSorting = _c === void 0 ? false : _c, _d = props.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = props.enableAddToCart, enableAddToCart = _e === void 0 ? false : _e, _f = props.enableQuickShop, enableQuickShop = _f === void 0 ? false : _f, _g = props.enableQuantity, enableQuantity = _g === void 0 ? false : _g, _h = props.enableOkendoStarRating, enableOkendoStarRating = _h === void 0 ? false : _h;
    var router = (0, router_1.useRouter)();
    var trackProductsSearched = (0, addons_1.useSegment)().trackProductsSearched;
    var _j = router.query, pageId = _j.page_id, handle = _j.handle;
    if (handle == 'index' || handle == undefined)
        handle = '';
    var _k = (0, react_1.useState)(handle), query = _k[0], setQuery = _k[1];
    var _l = (0, react_1.useState)(String(query).toLowerCase()), keywords = _l[0], setKeywords = _l[1];
    var first = PER_PAGE;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _m = (0, frontend_shopify_1.useProducts)(), loading = _m.loading, errors = _m.errors, cursor = _m.cursor, hasNextPage = _m.hasNextPage, products = _m.products, findProducts = _m.findProducts, searchProducts = _m.searchProducts;
    var _o = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _o[0], setSortKey = _o[1];
    var _p = (0, react_1.useState)(false), reverse = _p[0], setReverse = _p[1];
    var _q = (0, frontend_shopify_1.useSearchFilters)(), filters = _q.filters, handleFilter = _q.handleFilter, handleFilterArray = _q.handleFilterArray, formatProductFilters = _q.formatProductFilters, formatQueryFilters = _q.formatQueryFilters;
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
        react_1.default.createElement(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, sx: sx.header, spacing: 1 },
            title && react_1.default.createElement(__3.Heading, { title: title }),
            enableSorting && (react_1.default.createElement(__2.ProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick }))),
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 },
            enableFilters && (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 3 },
                react_1.default.createElement(__2.ProductSearchFilters, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))),
            react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: enableFilters ? 9 : 12 },
                react_1.default.createElement(material_1.Box, { sx: sx.searchInput },
                    react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search' })),
                (products === null || products === void 0 ? void 0 : products.length) > 0 && (react_1.default.createElement(__2.ProductGrid, { loading: loading, products: products, xs: 12, sm: 6, md: enableFilters ? 6 : 4, lg: 4, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })),
                !loading && (!products || (products === null || products === void 0 ? void 0 : products.length) == 0) && (react_1.default.createElement(__1.Placeholder, { icon: "Search", title: "No search results", description: "Try another search term" })),
                react_1.default.createElement(LoadMore_1.default, { loading: loading, hasNextPage: hasNextPage, handleSearch: function () { return handleLoadMore(cursor); } })))));
};
exports.default = ProductSearch;
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

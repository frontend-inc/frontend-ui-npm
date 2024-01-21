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
var webstudio_shopify_1 = require("webstudio-shopify");
var addons_1 = require("../../../hooks/addons");
var router_1 = require("next/router");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var LoadMore_1 = __importDefault(require("../../../components/shopify/search/LoadMore"));
var webstudio_shopify_2 = require("webstudio-shopify");
var PER_PAGE = 48;
var Search = function () {
    var router = (0, router_1.useRouter)();
    var trackProductsSearched = (0, addons_1.useSegment)().trackProductsSearched;
    var query = router.query.query;
    if (query == 'all')
        query = '';
    var _a = (0, react_1.useState)(String(query).toLowerCase()), keywords = _a[0], setKeywords = _a[1];
    var first = PER_PAGE;
    var shopUrl = (0, react_1.useContext)(webstudio_shopify_2.ShopContext).shopUrl;
    var _b = (0, webstudio_shopify_1.useProducts)(), loading = _b.loading, errors = _b.errors, cursor = _b.cursor, hasNextPage = _b.hasNextPage, products = _b.products, fetchProducts = _b.fetchProducts, searchProducts = _b.searchProducts;
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
        router.push("".concat(shopUrl, "/search/").concat(keywords.split(' ').join('-')));
    };
    var handleLoadMore = function (after) {
        searchProducts({
            query: "".concat(keywords, " tag_not:hidden"),
            first: first,
            after: after,
        });
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if ((query === null || query === void 0 ? void 0 : query.length) > 0) {
            var searchKeywords = (_a = decodeURI(String(query)).split('-')) === null || _a === void 0 ? void 0 : _a.join(' ');
            setKeywords(searchKeywords);
            searchProducts({
                query: searchKeywords,
            });
        }
        else {
            fetchProducts({
                first: 20,
            });
        }
    }, [query]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.searchInput },
            react_1.default.createElement(components_1.SearchInput, { value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search' })),
        (products === null || products === void 0 ? void 0 : products.length) > 0 && (react_1.default.createElement(shopify_1.ProductGrid, { loading: loading, products: products })),
        !loading && (!products || (products === null || products === void 0 ? void 0 : products.length) == 0) && (react_1.default.createElement(components_1.Placeholder, { title: "No search results", description: "Try another search term" })),
        react_1.default.createElement(LoadMore_1.default, { loading: loading, hasNextPage: hasNextPage, handleSearch: function () { return handleLoadMore(cursor); } })));
};
exports.default = Search;
var sx = {
    root: {
        pt: 2,
    },
    searchInput: {
        mb: 2,
    },
};

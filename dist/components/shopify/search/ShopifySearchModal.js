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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var components_2 = require("../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var addons_1 = require("../../../hooks/addons");
var ShopifySearchModal = function (props) {
    var href = props.href;
    // Minimum number of characters to track analytics
    var MIN_ANALYTICS_CHARS = 5;
    var trackProductsSearched = (0, addons_1.useSegment)().trackProductsSearched;
    var _a = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext), setMenuOpen = _a.setMenuOpen, searchOpen = _a.searchOpen, setSearchOpen = _a.setSearchOpen;
    var _b = (0, react_1.useState)(''), keywords = _b[0], setKeywords = _b[1];
    var _c = (0, frontend_shopify_2.useProducts)(), loading = _c.loading, products = _c.products, setProducts = _c.setProducts, searchProducts = _c.searchProducts;
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleClose = function () {
        handleClear();
        setMenuOpen(false);
        setSearchOpen(false);
        setProducts(null);
    };
    var handleClear = function () { return setKeywords(''); };
    var handleSearch = function (keywords) {
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) >= MIN_ANALYTICS_CHARS) {
            trackProductsSearched(keywords);
        }
        searchProducts({ query: keywords });
    };
    (0, react_1.useEffect)(function () {
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) > 0) {
            handleSearch(keywords);
        }
        else {
            setProducts(null);
        }
    }, [keywords]);
    return (react_1.default.createElement(components_2.Drawer, { open: searchOpen, handleClose: handleClose },
        react_1.default.createElement("div", { className: "w-full flex flex-row justify-center" },
            react_1.default.createElement(components_1.SearchInput, { name: "keywords", value: keywords, handleChange: handleChange, handleSearch: handleSearch, placeholder: 'Search...' })),
        react_1.default.createElement(shopify_1.ShopifyProducts, { loading: loading, products: products }),
        (keywords === null || keywords === void 0 ? void 0 : keywords.length) > 0 && !loading && (products === null || products === void 0 ? void 0 : products.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: 'search', title: "No search results", description: "Try another search term" }))));
};
exports.default = ShopifySearchModal;

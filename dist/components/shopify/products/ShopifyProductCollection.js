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
var frontend_shopify_1 = require("frontend-shopify");
var __1 = require("..");
var ShopifyProductCollection = function (props) {
    var shopifyCollection = props.shopifyCollection, _a = props.options, options = _a === void 0 ? [] : _a, _b = props.priceOptions, priceOptions = _b === void 0 ? [] : _b, _c = props.enableFilters, enableFilters = _c === void 0 ? false : _c, _d = props.enableSort, enableSort = _d === void 0 ? false : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableAddToCart, enableAddToCart = _f === void 0 ? false : _f, _g = props.enableQuickShop, enableQuickShop = _g === void 0 ? false : _g, _h = props.enableQuantity, enableQuantity = _h === void 0 ? false : _h;
    var _j = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _j[0], setSortKey = _j[1];
    var _k = (0, react_1.useState)(false), reverse = _k[0], setReverse = _k[1];
    var _l = (0, frontend_shopify_1.useCollections)(), loading = _l.loading, products = _l.products, findCollection = _l.findCollection;
    var _m = (0, frontend_shopify_1.useSearchFilters)(), filters = _m.filters, handleFilter = _m.handleFilter, handleFilterArray = _m.handleFilterArray, formatProductFilters = _m.formatProductFilters;
    var handleSortClick = function (sortKey, reverse) {
        if (reverse === void 0) { reverse = false; }
        setSortKey(sortKey);
        setReverse(reverse);
    };
    (0, react_1.useEffect)(function () {
        if (shopifyCollection) {
            var productFilters = formatProductFilters(filters);
            findCollection(shopifyCollection, {
                sortKey: sortKey,
                reverse: reverse,
                filters: productFilters,
            });
        }
    }, [shopifyCollection, filters, sortKey, reverse]);
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
            enableFilters && (react_1.default.createElement(__1.ShopifyProductFilterButton, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray })),
            enableSort && (react_1.default.createElement(__1.ShopifyProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick }))),
        react_1.default.createElement(__1.ShopifyProducts, { loading: loading, products: products, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity })));
};
exports.default = ShopifyProductCollection;

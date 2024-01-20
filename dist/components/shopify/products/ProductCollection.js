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
var material_1 = require("@mui/material");
var webstudio_shopify_1 = require("webstudio-shopify");
var shopify_1 = require("../../../components/shopify");
var ProductCollection = function (props) {
    var title = props.title, handle = props.handle, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, _b = props.editing, editing = _b === void 0 ? false : _b, inStockFilter = props.inStockFilter, productComponent = props.productComponent, colorOptions = props.colorOptions, sizeOptions = props.sizeOptions, styleOptions = props.styleOptions, materialOptions = props.materialOptions, vendorOptions = props.vendorOptions, productTypeOptions = props.productTypeOptions, tagOptions = props.tagOptions, _c = props.enableFilters, enableFilters = _c === void 0 ? false : _c, _d = props.enableSort, enableSort = _d === void 0 ? false : _d, _e = props.autoPlay, autoPlay = _e === void 0 ? false : _e, _f = props.arrows, arrows = _f === void 0 ? false : _f, _g = props.showDots, showDots = _g === void 0 ? true : _g, _h = props.enableBorder, enableBorder = _h === void 0 ? false : _h, _j = props.enableAddToCart, enableAddToCart = _j === void 0 ? false : _j, _k = props.enableQuickShop, enableQuickShop = _k === void 0 ? false : _k, _l = props.enableQuantity, enableQuantity = _l === void 0 ? false : _l, _m = props.enableOkendoStarRating, enableOkendoStarRating = _m === void 0 ? false : _m;
    var _o = (0, react_1.useState)({}), query = _o[0], setQuery = _o[1];
    var _p = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _p[0], setSortKey = _p[1];
    var _q = (0, react_1.useState)(false), reverse = _q[0], setReverse = _q[1];
    var _r = (0, webstudio_shopify_1.useCollections)(), loading = _r.loading, products = _r.products, fetchCollection = _r.fetchCollection, filters = _r.filters, filterVariantOption = _r.filterVariantOption, filterInStock = _r.filterInStock, filterVendor = _r.filterVendor, filterProductType = _r.filterProductType, filterTag = _r.filterTag;
    var handleSortClick = function (sortKey, reverse) {
        if (reverse === void 0) { reverse = false; }
        setSortKey(sortKey);
        setReverse(reverse);
    };
    var handleFilterColor = function (value) {
        filterVariantOption('color', value);
    };
    var handleFilterSize = function (value) {
        filterVariantOption('size', value);
    };
    var handleFilterStyle = function (value) {
        filterVariantOption('style', value);
    };
    var handleFilterMaterial = function (value) {
        filterVariantOption('material', value);
    };
    var handleFilterInStock = function () {
        filterInStock();
    };
    var handleFilterTag = function (value) {
        filterTag(value);
    };
    var handleFilterVendor = function (value) {
        filterVendor(value);
    };
    var handleFilterProductType = function (value) {
        filterProductType(value);
    };
    (0, react_1.useEffect)(function () {
        if (query) {
            fetchCollection(handle, query);
        }
    }, [query]);
    (0, react_1.useEffect)(function () {
        if (handle) {
            fetchCollection(handle, __assign(__assign({}, query), { sortKey: sortKey, reverse: reverse, filters: filters }));
        }
    }, [handle, filters, sortKey, reverse]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, justifyContent: 'space-between' },
            react_1.default.createElement(material_1.Typography, { variant: "h6", color: "text.primary" }, title),
            react_1.default.createElement(material_1.Box, null,
                enableFilters && (react_1.default.createElement(shopify_1.ProductFilterButton, { filters: filters, colorOptions: colorOptions, sizeOptions: sizeOptions, styleOptions: styleOptions, materialOptions: materialOptions, vendorOptions: vendorOptions, tagOptions: tagOptions, productTypeOptions: productTypeOptions, handleFilterColor: handleFilterColor, handleFilterSize: handleFilterSize, handleFilterStyle: handleFilterStyle, handleFilterMaterial: handleFilterMaterial, handleFilterInStock: handleFilterInStock, handleFilterVendor: handleFilterVendor, handleFilterProductType: handleFilterProductType, handleFilterTag: handleFilterTag })),
                enableSort && (react_1.default.createElement(shopify_1.ProductSortButton, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick })))),
        layout == 'list' && (react_1.default.createElement(shopify_1.ProductList, { editing: editing, loading: loading, products: products, productComponent: productComponent, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })),
        layout == 'grid' && (react_1.default.createElement(shopify_1.ProductGrid, { editing: editing, loading: loading, products: products, productComponent: productComponent, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })),
        layout == 'carousel' && (react_1.default.createElement(shopify_1.ProductCarousel, { editing: editing, loading: loading, products: products, productComponent: productComponent, autoPlay: autoPlay, arrows: arrows, showDots: showDots, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating }))));
};
exports.default = ProductCollection;

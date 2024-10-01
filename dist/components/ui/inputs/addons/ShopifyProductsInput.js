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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../../..");
var __2 = require("../../..");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var material_1 = require("@mui/material");
var lodash_1 = require("lodash");
var ShopifyProductImage = function (props) {
    var _a, _b, _c, _d;
    var handle = props.handle, handleDelete = props.handleDelete, _e = props.height, height = _e === void 0 ? 160 : _e, _f = props.width, width = _f === void 0 ? 160 : _f;
    var _g = (0, frontend_shopify_1.useProducts)(), product = _g.product, findProduct = _g.findProduct;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findProduct(handle);
        }
    }, [handle]);
    if (!product)
        return null;
    return (react_1.default.createElement(material_1.Fade, { in: true, timeout: 350 },
        react_1.default.createElement(material_1.Box, { sx: sx.productCard },
            react_1.default.createElement(__2.Image, { enableGradient: true, disableBorder: true, src: (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.url, alt: product === null || product === void 0 ? void 0 : product.title, height: height, width: width, enableDelete: true, handleDelete: handleDelete }))));
};
var ShopifyProductsInput = function (props) {
    var value = props.value, label = props.label, _a = props.direction, direction = _a === void 0 ? 'column' : _a, placeholder = props.placeholder, _b = props.name, name = _b === void 0 ? 'shopify_handle' : _b, handleChange = props.handleChange, height = props.height, width = props.width;
    var _c = (0, react_1.useState)(''), currentValue = _c[0], setCurrentValue = _c[1];
    var _d = (0, react_1.useState)([]), shopifyProducts = _d[0], setShopifyProducts = _d[1];
    var _e = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext), domain = _e.domain, storefrontAccessToken = _e.storefrontAccessToken;
    var _f = (0, frontend_shopify_1.useProducts)(), products = _f.products, setProduct = _f.setProduct, findProducts = _f.findProducts;
    var _g = (0, react_1.useState)([]), options = _g[0], setOptions = _g[1];
    var handleInputChange = function (newValue) {
        findProducts(newValue);
        if (newValue == '') {
            setProduct(null);
        }
    };
    (0, react_1.useEffect)(function () {
        if (products) {
            setOptions(products === null || products === void 0 ? void 0 : products.map(function (product) {
                var _a, _b, _c, _d;
                return ({
                    label: product.title,
                    value: product.handle,
                    image: (_d = (_c = (_b = (_a = product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.url,
                });
            }));
        }
    }, [products]);
    (0, react_1.useEffect)(function () {
        if (value && Array.isArray(value)) {
            setShopifyProducts(value);
        }
    }, [value]);
    var handleAutocompleteChange = function (e) {
        var value = e.target.value;
        setCurrentValue(value);
        var uniqProducts = (0, lodash_1.uniq)(__spreadArray(__spreadArray([], shopifyProducts, true), [value], false));
        setShopifyProducts(uniqProducts);
        handleChange({
            target: {
                name: name,
                value: uniqProducts,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        findProducts({
            first: 10,
        });
    }, []);
    var handleDelete = function (handle) {
        var newProducts = shopifyProducts.filter(function (product) { return product !== handle; });
        setShopifyProducts(newProducts);
        handleChange({
            target: {
                name: name,
                value: newProducts || [],
            },
        });
    };
    if (!domain || !storefrontAccessToken) {
        return (react_1.default.createElement(__2.Placeholder, { title: "Shopify setup required", description: "Shopify provider is not setup" }));
    }
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Collapse, { in: (shopifyProducts === null || shopifyProducts === void 0 ? void 0 : shopifyProducts.length) > 0 },
            react_1.default.createElement(material_1.Box, { sx: sx.carouselContainer },
                react_1.default.createElement(material_1.Box, { sx: sx.carousel }, shopifyProducts === null || shopifyProducts === void 0 ? void 0 : shopifyProducts.map(function (handle) { return (react_1.default.createElement(ShopifyProductImage, { key: handle, handle: handle, height: height, width: width, handleDelete: function () { return handleDelete(handle); } })); })))),
        react_1.default.createElement(__1.AutocompleteInput, { name: name, label: label, value: currentValue, options: options, handleChange: handleAutocompleteChange, handleInputChange: handleInputChange, direction: direction, placeholder: placeholder })));
};
exports.default = ShopifyProductsInput;
var sx = {
    root: {
        width: '100%',
    },
    productCard: {
        position: 'relative',
        width: 160,
        minWidth: 160,
        minHeight: 160,
        borderRadius: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2,
        },
    },
    productContent: {
        p: 1,
    },
    carouselContainer: {},
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
    },
};

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
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var material_1 = require("@mui/material");
var ShopifyProductInput = function (props) {
    var _a, _b, _c, _d;
    var value = props.value, label = props.label, _e = props.direction, direction = _e === void 0 ? 'column' : _e, placeholder = props.placeholder, _f = props.name, name = _f === void 0 ? 'shopify_handle' : _f, handleChange = props.handleChange;
    var _g = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext), domain = _g.domain, storefrontAccessToken = _g.storefrontAccessToken;
    var _h = (0, frontend_shopify_1.useProducts)(), loading = _h.loading, product = _h.product, products = _h.products, findProduct = _h.findProduct, findProducts = _h.findProducts;
    var _j = (0, react_1.useState)([]), options = _j[0], setOptions = _j[1];
    var handleInputChange = function (newValue) {
        findProducts(newValue);
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
        if (value) {
            findProduct(value);
        }
    }, [value]);
    var handleAutocompleteChange = function (e) {
        var value = e.target.value;
        handleChange({
            target: {
                name: name,
                value: value,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        findProducts({
            first: 10,
        });
    }, []);
    if (!domain || !storefrontAccessToken)
        return (react_1.default.createElement(components_2.Placeholder, { title: "Shopify setup required", description: "Shopify provider is not setup" }));
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Collapse, { in: (product === null || product === void 0 ? void 0 : product.id) || loading },
            react_1.default.createElement(material_1.Box, { sx: sx.productCard },
                react_1.default.createElement(components_2.Image, { enableGradient: true, disableBorder: true, src: (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.url, alt: product === null || product === void 0 ? void 0 : product.title, height: 180, width: 180 }))),
        react_1.default.createElement(components_1.AutocompleteInput, { name: name, label: label, value: value, options: options, handleChange: handleAutocompleteChange, handleInputChange: handleInputChange, direction: direction, placeholder: placeholder })));
};
exports.default = ShopifyProductInput;
var sx = {
    root: {
        width: '100%',
    },
    productCard: {
        width: 180,
        minHeight: 180,
        borderRadius: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: 2
        }
    },
    productContent: {
        p: 1,
    },
};

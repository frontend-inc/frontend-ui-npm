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
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyProductAutosuggest = function (props) {
    var value = props.value, label = props.label, placeholder = props.placeholder, _a = props.name, name = _a === void 0 ? 'shopify_handle' : _a, handleChange = props.handleChange;
    var _b = (0, frontend_shopify_1.useProducts)(), products = _b.products, findProducts = _b.findProducts;
    var _c = (0, react_1.useState)([]), options = _c[0], setOptions = _c[1];
    var handleInputChange = function (keywords) {
        findProducts(keywords);
    };
    (0, react_1.useEffect)(function () {
        if (products) {
            setOptions(products === null || products === void 0 ? void 0 : products.map(function (product) {
                var _a, _b, _c;
                return ({
                    label: product === null || product === void 0 ? void 0 : product.title,
                    value: product === null || product === void 0 ? void 0 : product.handle,
                    image: (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.url,
                });
            }));
        }
    }, [products]);
    (0, react_1.useEffect)(function () {
        findProducts({
            first: 5,
        });
    }, []);
    return (react_1.default.createElement(components_1.Autosuggest, { label: label, name: name, value: value, options: options, placeholder: placeholder, handleChange: handleChange, handleInputChange: handleInputChange, enableClear: true }));
};
exports.default = ShopifyProductAutosuggest;

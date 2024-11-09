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
var components_1 = require("../../../../components");
var components_2 = require("../../../../components");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var components_3 = require("../../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../../core");
var lucide_react_1 = require("lucide-react");
var image_1 = __importDefault(require("next/image"));
var ShopifyProductInput = function (props) {
    var _a, _b, _c, _d;
    var value = props.value, label = props.label, _e = props.direction, direction = _e === void 0 ? 'column' : _e, placeholder = props.placeholder, _f = props.name, name = _f === void 0 ? 'shopify_product' : _f, handleChange = props.handleChange, className = props.className;
    var enabled = (0, react_1.useContext)(frontend_shopify_2.ShopifyContext).enabled;
    var _g = (0, frontend_shopify_1.useProducts)(), loading = _g.loading, product = _g.product, products = _g.products, setProduct = _g.setProduct, findProduct = _g.findProduct, findProducts = _g.findProducts;
    var _h = (0, react_1.useState)([]), options = _h[0], setOptions = _h[1];
    var handleInputChange = function (newValue) {
        findProducts(newValue);
        if (newValue == '') {
            setProduct(null);
        }
    };
    var handleClear = function () {
        handleChange({
            target: {
                name: name,
                value: '',
            },
        });
        setProduct(null);
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
    if (!enabled) {
        return (react_1.default.createElement(components_2.Placeholder, { title: "Shopify setup required", description: "Shopify provider is not setup" }));
    }
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-col space-y-4', className) },
        react_1.default.createElement(core_1.Collapse, { in: !!(product === null || product === void 0 ? void 0 : product.id) },
            react_1.default.createElement("div", { className: "relative rounded-lg overflow-hidden" },
                react_1.default.createElement(image_1.default, { height: 180, width: 180, src: (_d = (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.edges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.url, alt: product === null || product === void 0 ? void 0 : product.title, className: "object-cover rounded-lg" }),
                react_1.default.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40" }),
                react_1.default.createElement("div", { className: "absolute top-4 right-4" },
                    react_1.default.createElement(components_3.IconButton, { onClick: handleClear },
                        react_1.default.createElement(lucide_react_1.X, { className: "h-4 w-4" }))))),
        react_1.default.createElement(components_1.AutocompleteInput, { name: name, label: label, value: value, options: options, handleChange: handleAutocompleteChange, handleInputChange: handleInputChange, direction: direction, placeholder: placeholder })));
};
exports.default = ShopifyProductInput;

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var shopify_1 = require("../../../shopify");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var MetafieldProducts = function (props) {
    var title = props.title, handle = props.handle, _a = props.layout, layout = _a === void 0 ? 'grid' : _a, metafield = props.metafield, rest = __rest(props, ["title", "handle", "layout", "metafield"]);
    var _b = (0, frontend_shopify_2.useProducts)(), loading = _b.loading, product = _b.product, findProduct = _b.findProduct;
    var _c = (0, react_1.useState)(null), products = _c[0], setProducts = _c[1];
    (0, react_1.useEffect)(function () {
        if (handle && metafield) {
            findProduct(handle, [metafield]);
        }
    }, [handle, metafield]);
    (0, react_1.useEffect)(function () {
        if (product) {
            setProducts((0, frontend_shopify_1.getMetafieldReferences)(product, metafield.key));
        }
    }, [product]);
    if (!products)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        title && (react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "h5" }, title)),
        products && (react_1.default.createElement(react_1.default.Fragment, null,
            layout == 'grid' && react_1.default.createElement(shopify_1.ProductGrid, __assign({ products: products }, rest)),
            layout == 'carousel' && (react_1.default.createElement(shopify_1.ProductCarousel, __assign({ products: products }, rest)))))));
};
exports.default = MetafieldProducts;

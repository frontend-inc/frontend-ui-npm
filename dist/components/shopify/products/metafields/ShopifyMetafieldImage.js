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
var frontend_shopify_2 = require("frontend-shopify");
var ShopifyMetafieldImage = function (props) {
    var handle = props.handle, metafield = props.metafield, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, opacity = props.opacity, _d = props.height, height = _d === void 0 ? 250 : _d, bgcolor = props.bgcolor;
    var _e = (0, frontend_shopify_2.useProducts)(), loading = _e.loading, product = _e.product, findProduct = _e.findProduct;
    var _f = (0, react_1.useState)(null), src = _f[0], setSrc = _f[1];
    (0, react_1.useEffect)(function () {
        if (handle && metafield) {
            findProduct(handle, [metafield]);
        }
    }, [handle, metafield]);
    (0, react_1.useEffect)(function () {
        if (product) {
            setSrc((0, frontend_shopify_1.getMetafieldImage)(product, metafield.key));
        }
    }, [product]);
    if (!src)
        return null;
    return (react_1.default.createElement("img", { src: src, alt: product === null || product === void 0 ? void 0 : product.title, height: "".concat(height, "px"), width: '100%', style: {
            objectFit: 'contain',
        } }));
};
exports.default = ShopifyMetafieldImage;

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
var __1 = require("..");
var core_1 = require("../../core");
var helpers_1 = require("../../../helpers");
var SwipeableShopifyProductImages_1 = __importDefault(require("./images/SwipeableShopifyProductImages"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyProductFeatured = function (_a) {
    var _b, _c, _d, _e;
    var handle = _a.handle, _f = _a.height, height = _f === void 0 ? 360 : _f, _g = _a.width, width = _g === void 0 ? 360 : _g, _h = _a.buttonText, buttonText = _h === void 0 ? 'Add to Cart' : _h, _j = _a.quickShopButtonText, quickShopButtonText = _j === void 0 ? 'Quick Shop' : _j, handleClick = _a.handleClick, _k = _a.enableAddToCart, enableAddToCart = _k === void 0 ? false : _k, _l = _a.enableQuantity, enableQuantity = _l === void 0 ? false : _l, _m = _a.enableQuickShop, enableQuickShop = _m === void 0 ? false : _m;
    var _o = (0, frontend_shopify_2.useProducts)(), loading = _o.loading, product = _o.product, findProduct = _o.findProduct;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
    };
    (0, react_1.useEffect)(function () {
        if (handle) {
            findProduct(handle);
        }
    }, [handle, findProduct]);
    if (!product)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('flex flex-row rounded overflow-hidden') },
        react_1.default.createElement("div", { className: "flex flex-row space-x-3 w-full" },
            react_1.default.createElement("div", { className: "px-1 flex justify-end items-center" },
                react_1.default.createElement(SwipeableShopifyProductImages_1.default, { product: product, height: height, width: width, handleClick: handleItemClick })),
            react_1.default.createElement("div", { className: "w-full flex flex-row justify-center items-start h-full" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                    react_1.default.createElement(core_1.Typography, { variant: "h3" }, product === null || product === void 0 ? void 0 : product.title),
                    react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body2", className: "max-w-[320px]" }, (0, helpers_1.truncate)(product === null || product === void 0 ? void 0 : product.description, 60)),
                    react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body2" }, (0, frontend_shopify_1.formatCurrency)((_c = (_b = product === null || product === void 0 ? void 0 : product.priceRange) === null || _b === void 0 ? void 0 : _b.minVariantPrice) === null || _c === void 0 ? void 0 : _c.amount))),
                react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
                    enableAddToCart && (react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, variant: (_e = (_d = product === null || product === void 0 ? void 0 : product.variants) === null || _d === void 0 ? void 0 : _d.edges[0]) === null || _e === void 0 ? void 0 : _e.node, enableQuantity: enableQuantity, label: buttonText })),
                    enableQuickShop && (react_1.default.createElement(__1.ShopifyQuickShopButton, { size: "lg", product: product, color: enableAddToCart ? 'secondary' : 'primary', buttonText: buttonText, quickShopButtonText: quickShopButtonText })))))));
};
exports.default = ShopifyProductFeatured;

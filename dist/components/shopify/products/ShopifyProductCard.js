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
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var SwipeableShopifyProductImages_1 = __importDefault(require("./images/SwipeableShopifyProductImages"));
var __1 = require("..");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
function ShopifyProductCard(props) {
    var _a, _b, _c, _d;
    var _e = props || {}, product = _e.product, handleClick = _e.handleClick, _f = _e.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = _e.enableAddToCart, enableAddToCart = _g === void 0 ? false : _g, _h = _e.enableQuantity, enableQuantity = _h === void 0 ? false : _h, className = _e.className;
    var _j = (0, react_1.useState)(false), open = _j[0], setOpen = _j[1];
    var setSearchOpen = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext).setSearchOpen;
    var handleItemClick = function () {
        if (handleClick) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSearchOpen(false);
            handleClick();
        }
        else {
            setOpen(true);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Card, { shadow: "sm", className: (0, react_2.cn)('bg-background', className) },
            react_1.default.createElement(frontend_shadcn_1.CardContent, { className: "p-0" },
                react_1.default.createElement(SwipeableShopifyProductImages_1.default, { product: product, handleClick: handleItemClick, disableBorderRadius: enableBorder })),
            react_1.default.createElement(react_2.CardFooter, { className: "bg-content1 w-full" },
                react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full" },
                    react_1.default.createElement("div", { className: "flex flex-col space-y-0 min-h-[50px]" },
                        react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, (0, helpers_1.truncate)(product === null || product === void 0 ? void 0 : product.title)),
                        react_1.default.createElement(components_1.Typography, { variant: "body2" }, (0, frontend_shopify_2.formatCurrency)((_b = (_a = product === null || product === void 0 ? void 0 : product.priceRange) === null || _a === void 0 ? void 0 : _a.minVariantPrice) === null || _b === void 0 ? void 0 : _b.amount))),
                    enableAddToCart && (react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, 
                        /* @ts-ignore */
                        variant: (_d = (_c = product === null || product === void 0 ? void 0 : product.variants) === null || _c === void 0 ? void 0 : _c.edges[0]) === null || _d === void 0 ? void 0 : _d.node, enableQuantity: enableQuantity, size: "md" }))))),
        react_1.default.createElement(__1.ShopifyProductModal, { open: open, handleClose: function () { return setOpen(false); }, shopifyProduct: product === null || product === void 0 ? void 0 : product.handle, enableQuantity: enableQuantity })));
}
exports.default = ShopifyProductCard;

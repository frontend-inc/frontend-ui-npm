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
var core_1 = require("../../core");
var helpers_1 = require("../../../helpers");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var SwipeableShopifyProductImages_1 = __importDefault(require("./images/SwipeableShopifyProductImages"));
var __1 = require("..");
var addons_1 = require("../../addons");
var frontend_shadcn_2 = require("frontend-shadcn");
function ShopifyProductCard(_a) {
    var _b, _c, _d, _e;
    var product = _a.product, handleClick = _a.handleClick, _f = _a.height, height = _f === void 0 ? 320 : _f, _g = _a.enableBorder, enableBorder = _g === void 0 ? false : _g, _h = _a.enableAddToCart, enableAddToCart = _h === void 0 ? false : _h, _j = _a.enableQuantity, enableQuantity = _j === void 0 ? false : _j, _k = _a.enableQuickShop, enableQuickShop = _k === void 0 ? false : _k, _l = _a.enableOkendoStarRating, enableOkendoStarRating = _l === void 0 ? false : _l, _m = _a.buttonVariant, buttonVariant = _m === void 0 ? 'default' : _m, buttonText = _a.buttonText, _o = _a.disableBorder, disableBorder = _o === void 0 ? false : _o;
    var _p = (0, react_1.useState)(false), open = _p[0], setOpen = _p[1];
    var setSearchOpen = (0, react_1.useContext)(frontend_shopify_1.ShopifyContext).setSearchOpen;
    var handleQuickShop = function () {
        setOpen(true);
    };
    var handleItemClick = function () {
        if (handleClick) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSearchOpen(false);
            handleClick();
        }
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)(!disableBorder && 'border border-border hover:shadow-md', 'w-full overflow-hidden rounded-lg transition-shadow duration-300 bg-background') },
        react_1.default.createElement(SwipeableShopifyProductImages_1.default, { product: product, height: height, handleClick: handleItemClick, disableBorderRadius: enableBorder }),
        react_1.default.createElement(frontend_shadcn_1.CardContent, null,
            react_1.default.createElement("div", { className: "flex flex-col py-1" },
                react_1.default.createElement(core_1.Typography, { variant: "subtitle2" }, (0, helpers_1.truncate)(product === null || product === void 0 ? void 0 : product.title)),
                enableOkendoStarRating && react_1.default.createElement(addons_1.OkendoStarRating, { product: product }),
                react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body2" }, (0, frontend_shopify_2.formatCurrency)((_c = (_b = product === null || product === void 0 ? void 0 : product.priceRange) === null || _b === void 0 ? void 0 : _b.minVariantPrice) === null || _c === void 0 ? void 0 : _c.amount))),
            react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                enableAddToCart && (react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, 
                    /* @ts-ignore */
                    variant: (_e = (_d = product === null || product === void 0 ? void 0 : product.variants) === null || _d === void 0 ? void 0 : _d.edges[0]) === null || _e === void 0 ? void 0 : _e.node, label: buttonText, enableQuantity: enableQuantity, buttonVariant: buttonVariant, size: "small", enableFavorites: true })),
                enableQuickShop && (react_1.default.createElement(core_1.Button, { color: "secondary", onClick: handleQuickShop, className: "w-full" }, "Quick Shop")))),
        react_1.default.createElement(__1.ShopifyProductModal, { open: open, handleClose: function () { return setOpen(false); }, shopifyProduct: product, enableQuantity: enableQuantity, buttonText: buttonText })));
}
exports.default = ShopifyProductCard;

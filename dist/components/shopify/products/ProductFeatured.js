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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("..");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var SwipeableProductImages_1 = __importDefault(require("./images/SwipeableProductImages"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var ProductFeatured = function (props) {
    var _a, _b, _c, _d;
    var _e = props || {}, handle = _e.handle, _f = _e.flexDirection, flexDirection = _f === void 0 ? 'row' : _f, _g = _e.height, height = _g === void 0 ? 360 : _g, _h = _e.width, width = _h === void 0 ? 360 : _h, _j = _e.buttonText, buttonText = _j === void 0 ? 'Add to Cart' : _j, _k = _e.quickShopButtonText, quickShopButtonText = _k === void 0 ? 'Quick Shop' : _k, handleClick = _e.handleClick, _l = _e.enableBorder, enableBorder = _l === void 0 ? false : _l, _m = _e.enableAddToCart, enableAddToCart = _m === void 0 ? false : _m, _o = _e.enableQuantity, enableQuantity = _o === void 0 ? false : _o, _p = _e.enableQuickShop, enableQuickShop = _p === void 0 ? false : _p;
    var _q = (0, frontend_shopify_2.useProducts)(), loading = _q.loading, product = _q.product, findProduct = _q.findProduct;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
    };
    (0, react_1.useEffect)(function () {
        if (handle) {
            findProduct(handle);
        }
    }, [handle]);
    if (!product)
        return null;
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Stack, { direction: { sm: flexDirection, sx: 'column' } },
            react_1.default.createElement(material_1.Box, { sx: sx.images },
                react_1.default.createElement(SwipeableProductImages_1.default, { product: product, height: height, width: width, handleClick: handleItemClick })),
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.content },
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "h3" }, product === null || product === void 0 ? void 0 : product.title),
                    react_1.default.createElement(material_1.Typography, { color: "textSecondary", variant: "body2", sx: sx.description }, (0, helpers_1.truncate)(product === null || product === void 0 ? void 0 : product.description, 60)),
                    react_1.default.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, (0, frontend_shopify_1.formatCurrency)((_b = (_a = product === null || product === void 0 ? void 0 : product.priceRange) === null || _a === void 0 ? void 0 : _a.minVariantPrice) === null || _b === void 0 ? void 0 : _b.amount))),
                react_1.default.createElement(material_1.Stack, { direction: enableAddToCart && enableQuickShop && !enableQuantity
                        ? 'row'
                        : 'column', spacing: 1 },
                    enableAddToCart && (react_1.default.createElement(__1.AddToCartButton, { product: product, variant: (_d = (_c = product === null || product === void 0 ? void 0 : product.variants) === null || _c === void 0 ? void 0 : _c.edges[0]) === null || _d === void 0 ? void 0 : _d.node, enableQuantity: enableQuantity, label: buttonText })),
                    enableQuickShop && (react_1.default.createElement(__1.QuickShopButton, { size: "large", product: product, color: enableAddToCart ? 'secondary' : 'primary', buttonText: buttonText, quickShopButtonText: quickShopButtonText })))))));
};
exports.default = ProductFeatured;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 1,
        overflow: 'hidden',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
    },
    description: {
        maxWidth: '320px',
    },
    images: {
        px: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
};

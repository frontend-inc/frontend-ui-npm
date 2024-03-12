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
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var index_1 = require("../../../constants/index");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var SwipeableProductImages_1 = __importDefault(require("./images/SwipeableProductImages"));
var __1 = require("..");
var addons_1 = require("../../addons");
var ProductCard = function (props) {
    var _a, _b, _c, _d;
    var _e = props || {}, product = _e.product, handleClick = _e.handleClick, _f = _e.height, height = _f === void 0 ? index_1.PRODUCT_CARD_HEIGHT : _f, _g = _e.enableBorder, enableBorder = _g === void 0 ? false : _g, _h = _e.enableAddToCart, enableAddToCart = _h === void 0 ? false : _h, _j = _e.enableQuantity, enableQuantity = _j === void 0 ? false : _j, _k = _e.enableQuickShop, enableQuickShop = _k === void 0 ? false : _k, _l = _e.enableOkendoStarRating, enableOkendoStarRating = _l === void 0 ? false : _l, _m = _e.buttonVariant, buttonVariant = _m === void 0 ? 'contained' : _m, buttonText = _e.buttonText;
    var _o = (0, react_1.useState)(false), open = _o[0], setOpen = _o[1];
    var setSearchOpen = (0, react_1.useContext)(frontend_shopify_1.ShopContext).setSearchOpen;
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
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(SwipeableProductImages_1.default, { product: product, height: height, handleClick: handleItemClick }),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign({}, (enableBorder && sx.contentBorder)) },
            react_1.default.createElement(material_1.Stack, { spacing: 0.5, direction: "column", sx: __assign(__assign({}, sx.text), (enableOkendoStarRating && sx.textWithReviews)) },
                react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: "subtitle1" }, (0, helpers_1.truncate)(product === null || product === void 0 ? void 0 : product.title)),
                enableOkendoStarRating && react_1.default.createElement(addons_1.OkendoStarRating, { product: product }),
                react_1.default.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, (0, frontend_shopify_2.formatCurrency)((_b = (_a = product === null || product === void 0 ? void 0 : product.priceRange) === null || _a === void 0 ? void 0 : _a.minVariantPrice) === null || _b === void 0 ? void 0 : _b.amount))),
            react_1.default.createElement(material_1.Stack, { spacing: 1, direction: "column" },
                enableAddToCart && (react_1.default.createElement(__1.AddToCartButton, { product: product, variant: 
                    //@ts-ignore
                    (_d = (_c = product === null || product === void 0 ? void 0 : product.variants) === null || _c === void 0 ? void 0 : _c.edges[0]) === null || _d === void 0 ? void 0 : _d.node, label: buttonText, enableQuantity: enableQuantity, buttonVariant: buttonVariant, size: "small" })),
                enableQuickShop && (react_1.default.createElement(material_1.Button, { sx: sx.quickShopButton, variant: enableAddToCart ? 'text' : 'contained', color: "secondary", onClick: handleQuickShop }, "Quick Shop")))),
        react_1.default.createElement(__1.ProductModal, { open: open, handleClose: function () { return setOpen(false); }, handle: product === null || product === void 0 ? void 0 : product.handle, enableQuantity: enableQuantity, buttonText: buttonText })));
};
exports.default = ProductCard;
var sx = {
    root: {
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    text: {
        height: '80px',
    },
    textWithReviews: {
        height: '110px',
    },
    contentBorder: {
        p: 1,
        pt: 0,
    },
    title: {
        minHeight: '50px',
    },
    description: {
        maxWidth: '320px',
    },
    quickShopButton: {
        bgcolor: 'tertiary.main',
        color: 'text.primary',
    }
};

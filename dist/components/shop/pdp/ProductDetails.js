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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var material_1 = require("@mui/material");
var ProductDetails = function (props) {
    var _a;
    var _b = props || {}, _c = _b.displayFields, displayFields = _c === void 0 ? [] : _c, buttons = _b.buttons, enableFavorites = _b.enableFavorites, enableLikes = _b.enableLikes, enableSharing = _b.enableSharing, enableRatings = _b.enableRatings, enableGradient = _b.enableGradient, enableOverlay = _b.enableOverlay, _d = _b.slots, defaultSlots = _d === void 0 ? {
        image: {},
        content: {},
    } : _d;
    var product = (0, frontend_js_1.useResourceContext)().resource;
    var handleEdit = (0, hooks_1.useForms)().handleEdit;
    var slots = {
        image: __assign({ enableGradient: enableGradient, enableOverlay: enableOverlay }, defaultSlots.image),
        content: __assign({}, defaultSlots.content),
    };
    if (!(product === null || product === void 0 ? void 0 : product.id))
        return null;
    return (react_1.default.createElement(__1.PDP, { image: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, primary: product === null || product === void 0 ? void 0 : product.title, price: product === null || product === void 0 ? void 0 : product.display_price, compareAtPrice: product === null || product === void 0 ? void 0 : product.display_compare_at_price, description: product === null || product === void 0 ? void 0 : product.description, secondary: react_1.default.createElement(material_1.Stack, { spacing: 2, sx: { width: '100%' } },
            react_1.default.createElement(material_1.Stack, { spacing: 2, sx: { width: '100%' }, alignItems: "flex-start" }, enableRatings == true && (react_1.default.createElement(__2.ProductRating, { resource: product, enableTotal: true })))), actions: react_1.default.createElement(__2.SocialButtons, { size: "large", justifyContent: 'center', resource: product, product: product, enableProductLikes: enableLikes, enableProductFavorites: enableFavorites, enableSharing: enableSharing }), addToCart: react_1.default.createElement(material_1.Stack, { spacing: 2 },
            react_1.default.createElement(__2.AddToCartButton, { availableForSale: true, productId: product === null || product === void 0 ? void 0 : product.id }),
            (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__2.DisplayMetafields, { fields: displayFields, resource: product }))), secondaryAction: buttons && (react_1.default.createElement(material_1.Box, { sx: sx.buttons },
            react_1.default.createElement(__2.ButtonActions, { justifyContent: 'flex-end', buttons: buttons, resource: product }))), slots: slots }));
};
exports.default = ProductDetails;
var sx = {
    buttons: {
        width: '100%',
    },
    addToCart: {
        width: '100%',
        maxWidth: '300px',
    },
};

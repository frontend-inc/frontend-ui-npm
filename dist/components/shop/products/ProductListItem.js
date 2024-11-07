'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var components_1 = require("../../../components");
var ProductListItem = function (props) {
    var _a;
    var resource = props.resource, handleClick = props.handleClick, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = props.enableFavorites, enableFavorites = _d === void 0 ? false : _d, _e = props.enableLikes, enableLikes = _e === void 0 ? false : _e, _f = props.enableRatings, enableRatings = _f === void 0 ? false : _f, _g = props.disableBorder, disableBorder = _g === void 0 ? false : _g;
    return (react_1.default.createElement(__1.ProductCard, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, price: resource === null || resource === void 0 ? void 0 : resource.display_price, compareAtPrice: resource === null || resource === void 0 ? void 0 : resource.display_compare_at_price, handleClick: handleClick, actions: react_1.default.createElement("div", null,
            react_1.default.createElement(__2.SocialButtons, { size: "small", justifyContent: "flex-start", resource: resource, product: resource, enableProductLikes: enableLikes, enableProductFavorites: enableFavorites })), addToCart: (resource === null || resource === void 0 ? void 0 : resource.recurring) ?
            react_1.default.createElement(components_1.SubscribeButton, { availableForSale: true, fullWidth: true, productId: resource === null || resource === void 0 ? void 0 : resource.id, size: "lg", price: resource === null || resource === void 0 ? void 0 : resource.display_price }) :
            react_1.default.createElement(components_1.AddToCartButton, { availableForSale: true, fullWidth: true, productId: resource === null || resource === void 0 ? void 0 : resource.id, size: "lg", price: resource === null || resource === void 0 ? void 0 : resource.display_price }), disableBorder: disableBorder, slots: {
            image: {
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            },
        } }));
};
exports.default = ProductListItem;

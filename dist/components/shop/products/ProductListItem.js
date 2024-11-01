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
    var resource = props.resource, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, handleClick = props.handleClick, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.enableFavorites, enableFavorites = _e === void 0 ? false : _e, _f = props.enableLikes, enableLikes = _f === void 0 ? false : _f, _g = props.enableRatings, enableRatings = _g === void 0 ? false : _g, _h = props.disableBorder, disableBorder = _h === void 0 ? false : _h;
    return (react_1.default.createElement(__1.ProductCard, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, price: resource === null || resource === void 0 ? void 0 : resource.display_price, compareAtPrice: resource === null || resource === void 0 ? void 0 : resource.display_compare_at_price, handleClick: handleClick, secondary: react_1.default.createElement(__2.DisplayFields, { disableBorder: true, disableLabel: true, fields: displayFields, resource: resource }), actions: react_1.default.createElement("div", null,
            react_1.default.createElement(__2.SocialButtons, { size: "small", justifyContent: "flex-start", resource: resource, product: resource, enableProductLikes: enableLikes, enableProductFavorites: enableFavorites })), addToCart: react_1.default.createElement(components_1.AddToCartButton, { availableForSale: true, fullWidth: true, productId: resource === null || resource === void 0 ? void 0 : resource.id, size: "lg" }), disableBorder: disableBorder, slots: {
            image: {
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            },
        } }));
};
exports.default = ProductListItem;

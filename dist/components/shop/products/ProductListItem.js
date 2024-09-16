"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var __2 = require("../..");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var ProductListItem = function (props) {
    var _a;
    var buttons = props.buttons, resource = props.resource, _b = props.displayFields, displayFields = _b === void 0 ? [] : _b, href = props.href, handleClick = props.handleClick, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.enableFavorites, enableFavorites = _e === void 0 ? false : _e, _f = props.enableLikes, enableLikes = _f === void 0 ? false : _f, _g = props.enableRatings, enableRatings = _g === void 0 ? false : _g, _h = props.enableUsers, enableUsers = _h === void 0 ? false : _h, rest = __rest(props, ["buttons", "resource", "displayFields", "href", "handleClick", "enableGradient", "enableOverlay", "enableFavorites", "enableLikes", "enableRatings", "enableUsers"]);
    return (react_1.default.createElement(__1.ProductCard, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, price: resource === null || resource === void 0 ? void 0 : resource.display_price, compareAtPrice: resource === null || resource === void 0 ? void 0 : resource.display_compare_at_price, handleClick: handleClick, secondary: react_1.default.createElement(__2.SecondaryFields, { enableRatings: enableRatings, enableUsers: enableUsers, fields: displayFields, resource: resource }), actions: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(__2.SocialButtons, { size: "small", justifyContent: "flex-start", resource: resource, product: resource, enableProductLikes: enableLikes, enableProductFavorites: enableFavorites })), secondaryAction: react_1.default.createElement(__2.ButtonActions, { numVisible: 0, buttons: buttons, resource: resource }), addToCart: react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(components_1.AddToCartButton, { availableForSale: true, productId: resource === null || resource === void 0 ? void 0 : resource.id })), slots: {
            image: {
                enableGradient: enableGradient,
                enableOverlay: enableOverlay,
            },
        } }));
};
exports.default = ProductListItem;

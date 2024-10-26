'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var ShopifyCollectionCover = function (props) {
    var _a;
    var shopifyCollection = props.shopifyCollection, handleClick = props.handleClick, height = props.height, _b = props.alt, alt = _b === void 0 ? 'image' : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.opacity, opacity = _e === void 0 ? 0.5 : _e, _f = props.alignItems, alignItems = _f === void 0 ? 'center' : _f, href = props.href, buttonText = props.buttonText;
    if (!shopifyCollection)
        return null;
    return (react_1.default.createElement(__1.Cover, { enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, height: height, title: shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.title, 
        // @ts-ignore
        image: (_a = shopifyCollection === null || shopifyCollection === void 0 ? void 0 : shopifyCollection.image) === null || _a === void 0 ? void 0 : _a.url, alt: alt, alignItems: alignItems, path: href, handleClick: handleClick, buttonText: buttonText }));
};
exports.default = ShopifyCollectionCover;

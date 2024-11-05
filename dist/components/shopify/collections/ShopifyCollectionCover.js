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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var components_1 = require("../../../components");
var ShopifyCollectionCover = function (props) {
    var _a;
    var shopifyCollection = props.shopifyCollection, _b = props.alt, alt = _b === void 0 ? 'image' : _b, handleClick = props.handleClick, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d, _e = props.alignItems, alignItems = _e === void 0 ? 'center' : _e, buttonText = props.buttonText, enableQuantity = props.enableQuantity, enableAddToCart = props.enableAddToCart;
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    var _g = (0, frontend_shopify_1.useCollections)(), collection = _g.collection, findCollection = _g.findCollection;
    var handleShowClick = function () {
        if (handleClick) {
            handleClick();
        }
        else {
            setOpen(true);
        }
    };
    (0, react_1.useEffect)(function () {
        if (shopifyCollection) {
            findCollection(shopifyCollection);
        }
    }, [shopifyCollection]);
    if (!shopifyCollection)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Cover, { enableOverlay: enableOverlay, enableGradient: enableGradient, title: collection === null || collection === void 0 ? void 0 : collection.title, 
            // @ts-ignore
            image: (_a = collection === null || collection === void 0 ? void 0 : collection.image) === null || _a === void 0 ? void 0 : _a.url, alt: alt, alignItems: alignItems, handleClick: handleShowClick, buttonText: buttonText }),
        react_1.default.createElement(components_1.ShopifyProductCollectionModal, { collection: collection, open: open, handleClose: function () { return setOpen(false); }, enableQuantity: enableQuantity, enableAddToCart: enableAddToCart })));
};
exports.default = ShopifyCollectionCover;

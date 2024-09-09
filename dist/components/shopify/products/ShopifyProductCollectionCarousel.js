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
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var ShopifyProductCollectionCarousel = function (props) {
    var handle = props.handle, href = props.href, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? false : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableDots, enableDots = _c === void 0 ? false : _c, _d = props.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = props.enableAddToCart, enableAddToCart = _e === void 0 ? false : _e, _f = props.enableQuickShop, enableQuickShop = _f === void 0 ? false : _f, _g = props.enableQuantity, enableQuantity = _g === void 0 ? false : _g, _h = props.enableOkendoStarRating, enableOkendoStarRating = _h === void 0 ? false : _h;
    var _j = (0, frontend_shopify_1.useCollections)(), loading = _j.loading, products = _j.products, findCollection = _j.findCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findCollection(handle);
        }
    }, [handle]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(shopify_1.ShopifyProductCarousel, { href: href, loading: loading, products: products, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, enableDots: enableDots, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })));
};
exports.default = ShopifyProductCollectionCarousel;

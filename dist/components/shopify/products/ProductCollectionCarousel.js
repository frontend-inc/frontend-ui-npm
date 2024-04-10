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
var ProductCollectionCarousel = function (props) {
    var handle = props.handle, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.enableAutoPlay, enableAutoPlay = _b === void 0 ? false : _b, _c = props.enableArrows, enableArrows = _c === void 0 ? false : _c, _d = props.enableDots, enableDots = _d === void 0 ? false : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableAddToCart, enableAddToCart = _f === void 0 ? false : _f, _g = props.enableQuickShop, enableQuickShop = _g === void 0 ? false : _g, _h = props.enableQuantity, enableQuantity = _h === void 0 ? false : _h, _j = props.enableOkendoStarRating, enableOkendoStarRating = _j === void 0 ? false : _j;
    var _k = (0, frontend_shopify_1.useCollections)(), loading = _k.loading, products = _k.products, findCollection = _k.findCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            findCollection(handle);
        }
    }, [handle]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(shopify_1.ProductCarousel, { editing: editing, loading: loading, products: products, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, enableDots: enableDots, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })));
};
exports.default = ProductCollectionCarousel;

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
var shopify_1 = require("../../../components/shopify");
var router_1 = require("next/router");
var addons_1 = require("../../../hooks/addons");
var context_1 = require("../../../context");
var ProductGrid = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props.href, href = _a === void 0 ? '/products' : _a, products = props.products, _b = props.buttonText, buttonText = _b === void 0 ? 'Add to cart' : _b, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, enableAddToCart = props.enableAddToCart, enableQuickShop = props.enableQuickShop, enableQuantity = props.enableQuantity, enableOkendoStarRating = props.enableOkendoStarRating;
    var router = (0, router_1.useRouter)();
    var trackProductClicked = (0, addons_1.useSegment)().trackProductClicked;
    var handleClick = function (product) {
        if (href) {
            var url = "".concat(clientUrl).concat(href, "/").concat(product === null || product === void 0 ? void 0 : product.handle);
            router.push(url);
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.grid }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: product === null || product === void 0 ? void 0 : product.id },
        react_1.default.createElement(shopify_1.ProductCard, { product: product, handleClick: function () { return handleClick(product); }, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText }))); })));
};
exports.default = ProductGrid;
var sx = {
    item: {
        p: 1,
        gridColumn: 'span 1',
    },
    grid: {
        maxWidth: '100%',
        display: 'grid',
        gridTemplateColumns: {
            md: 'repeat(3, 1fr)',
            sm: 'repeat(2, 1fr)',
            xs: '1fr',
        },
    },
};

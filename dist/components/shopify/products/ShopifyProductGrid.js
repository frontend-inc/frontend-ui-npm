"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var router_1 = require("next/router");
var addons_1 = require("../../../hooks/addons");
var hooks_1 = require("../../../hooks");
var ShopifyProductGrid = function (props) {
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
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
        react_1.default.createElement(shopify_1.ShopifyProductCard, { product: product, handleClick: function () { return handleClick(product); }, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText }))); })));
};
exports.default = ShopifyProductGrid;
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

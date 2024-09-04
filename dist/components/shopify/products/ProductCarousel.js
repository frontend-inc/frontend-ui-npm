"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var addons_1 = require("../../../hooks/addons");
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var ProductCarousel = function (props) {
    var _a = props.href, href = _a === void 0 ? '/products' : _a, products = props.products, _b = props.buttonText, buttonText = _b === void 0 ? 'Add to cart' : _b, _c = props.enableAutoPlay, enableAutoPlay = _c === void 0 ? false : _c, _d = props.enableArrows, enableArrows = _d === void 0 ? false : _d, _e = props.enableDots, enableDots = _e === void 0 ? true : _e, _f = props.enableBorder, enableBorder = _f === void 0 ? false : _f, enableAddToCart = props.enableAddToCart, enableQuickShop = props.enableQuickShop, _g = props.enableQuantity, enableQuantity = _g === void 0 ? false : _g, enableOkendoStarRating = props.enableOkendoStarRating;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var router = (0, router_1.useRouter)();
    var trackProductClicked = (0, addons_1.useSegment)().trackProductClicked;
    var handleClick = function (product) {
        if (href) {
            var url = "".concat(clientUrl).concat(href, "/").concat(product === null || product === void 0 ? void 0 : product.handle);
            router.push(url);
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.Carousel, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, enableDots: enableDots }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: product.id },
            react_1.default.createElement(shopify_1.ProductCard, { product: product, handleClick: function () { return handleClick(product); }, buttonText: buttonText, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating }))); }))));
};
exports.default = ProductCarousel;
var sx = {
    root: {
        maxWidth: '100%',
    },
    item: {
        px: '10px',
        pb: 4,
    },
};

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var navigation_1 = require("next/navigation");
var addons_1 = require("../../../hooks/addons");
var hooks_1 = require("../../../hooks");
var ShopifyProducts = function (_a) {
    var _b = _a.href, href = _b === void 0 ? '/products' : _b, products = _a.products, _c = _a.buttonText, buttonText = _c === void 0 ? 'Add to cart' : _c, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d, enableAddToCart = _a.enableAddToCart, enableQuickShop = _a.enableQuickShop, enableQuantity = _a.enableQuantity, enableOkendoStarRating = _a.enableOkendoStarRating;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var router = (0, navigation_1.useRouter)();
    var trackProductClicked = (0, addons_1.useSegment)().trackProductClicked;
    var handleClick = function (product) {
        if (href) {
            var url = "".concat(clientUrl).concat(href, "/").concat(product === null || product === void 0 ? void 0 : product.handle);
            router.push(url);
        }
    };
    return (react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full" }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (react_1.default.createElement("div", { className: "p-1", key: product === null || product === void 0 ? void 0 : product.id },
        react_1.default.createElement(__1.ShopifyProductCard, { product: product, handleClick: function () { return handleClick(product); }, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText }))); })));
};
exports.default = ShopifyProducts;

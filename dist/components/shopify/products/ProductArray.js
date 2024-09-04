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
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var hooks_1 = require("../../../hooks");
var ProductArray = function (props) {
    var href = props.href, handles = props.handles, _a = props.enableBorder, enableBorder = _a === void 0 ? false : _a, _b = props.enableAddToCart, enableAddToCart = _b === void 0 ? false : _b, _c = props.enableQuickShop, enableQuickShop = _c === void 0 ? false : _c, _d = props.enableQuantity, enableQuantity = _d === void 0 ? false : _d, _e = props.enableOkendoStarRating, enableOkendoStarRating = _e === void 0 ? false : _e, buttonText = props.buttonText;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var handleClick = function (product) {
        if (href) {
            var url = "".concat(clientUrl).concat(href, "/").concat(product === null || product === void 0 ? void 0 : product.handle);
            router.push(url);
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.grid }, handles === null || handles === void 0 ? void 0 : handles.map(function (handle) {
        var _a = (0, frontend_shopify_1.useProducts)(), product = _a.product, findProduct = _a.findProduct;
        (0, react_1.useEffect)(function () {
            findProduct(handle);
        }, [handle]);
        if (!product)
            return null;
        return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: product === null || product === void 0 ? void 0 : product.id },
            react_1.default.createElement(shopify_1.ProductCard, { product: product, handleClick: function () { return handleClick(product); }, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating, buttonText: buttonText })));
    })));
};
exports.default = ProductArray;
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

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
var navigation_1 = require("next/navigation");
var addons_1 = require("../../../hooks/addons");
var context_1 = require("../../../context");
var ProductList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props.editing, editing = _a === void 0 ? false : _a, products = props.products, _b = props.productComponent, ProductComponent = _b === void 0 ? shopify_1.ProductCardHoriz : _b, _c = props.buttonText, buttonText = _c === void 0 ? "Add to cart" : _c, _d = props.enableBorder, enableBorder = _d === void 0 ? false : _d, enableAddToCart = props.enableAddToCart, enableQuickShop = props.enableQuickShop, enableQuantity = props.enableQuantity, enableOkendoStarRating = props.enableOkendoStarRating;
    var router = (0, navigation_1.useRouter)();
    var trackProductClicked = (0, addons_1.useSegment)().trackProductClicked;
    var handleClick = function (product) {
        if (!editing)
            trackProductClicked(product);
        var url = "".concat(clientUrl, "/products/").concat(product === null || product === void 0 ? void 0 : product.handle);
        router.push(url);
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 }, products === null || products === void 0 ? void 0 : products.map(function (product) { return (react_1.default.createElement(ProductComponent, { product: product, handleClick: function () { return handleClick(product); }, buttonText: buttonText, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })); })));
};
exports.default = ProductList;

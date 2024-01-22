"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var webstudio_shopify_1 = require("webstudio-shopify");
var shopify_1 = require("../../../components/shopify");
var addons_1 = require("../../../components/addons");
var ProductDetails = function (props) {
    var product = props.product, price = props.price, compareAtPrice = props.compareAtPrice, _a = props.disableCompareAtPrice, disableCompareAtPrice = _a === void 0 ? false : _a, _b = props.enableOkendoStarRating, enableOkendoStarRating = _b === void 0 ? false : _b;
    if (!product)
        return null;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "h3" }, product.title),
        enableOkendoStarRating && react_1.default.createElement(addons_1.OkendoStarRating, { product: product }),
        react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body2", sx: sx.price },
            price && (0, webstudio_shopify_1.formatCurrency)(price),
            !disableCompareAtPrice && compareAtPrice && (react_1.default.createElement("span", null, (0, webstudio_shopify_1.formatCurrency)(compareAtPrice)))),
        react_1.default.createElement(shopify_1.ProductDescription, { product: product })));
};
exports.default = ProductDetails;
var sx = {
    price: {
        "& span": {
            textDecoration: "line-through",
            color: "text.secondary",
            ml: 1,
        },
    },
};

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var components_2 = require("../../../components");
var ShopifyProductModal = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, shopifyProduct = props.shopifyProduct, enableQuantity = props.enableQuantity, handleClose = props.handleClose, buttonText = props.buttonText;
    return (react_1.default.createElement(components_1.Drawer, { open: open, handleClose: handleClose, maxWidth: "xl", className: "md:p-6" },
        react_1.default.createElement(components_2.BlurFade, { delay: 0.25, inView: true },
            react_1.default.createElement(shopify_1.ShopifyProductDetails, { disableZoom: true, shopifyProduct: shopifyProduct, enableQuantity: enableQuantity, buttonText: buttonText }))));
};
exports.default = ShopifyProductModal;

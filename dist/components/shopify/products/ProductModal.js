"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var webstudio_shopify_1 = require("webstudio-shopify");
var ProductModal = function (props) {
    var handle = props.handle, enableQuantity = props.enableQuantity, _a = props.open, open = _a === void 0 ? false : _a, handleClose = props.handleClose, buttonText = props.buttonText;
    return (react_1.default.createElement(components_1.Modal, { open: open, handleClose: handleClose, maxWidth: "sm" },
        react_1.default.createElement(webstudio_shopify_1.ProductProvider, null,
            react_1.default.createElement(shopify_1.ProductDetailPage, { handle: handle, enableQuantity: enableQuantity, buttonText: buttonText }))));
};
exports.default = ProductModal;

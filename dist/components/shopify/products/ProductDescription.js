"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var webstudio_shopify_1 = require("webstudio-shopify");
var ProductDescription = function (props) {
    var _a = props.color, color = _a === void 0 ? 'text.secondary' : _a;
    var product = (0, webstudio_shopify_1.useProductContext)().product;
    return (react_1.default.createElement(material_1.Typography, { variant: "body2", color: color, sx: sx.description }, product === null || product === void 0 ? void 0 : product.description));
};
exports.default = ProductDescription;
var sx = {
    description: {
        whiteSpace: 'pre-wrap',
    },
};

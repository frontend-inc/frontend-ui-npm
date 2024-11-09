'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var ShopifyProductDescription = function (props) {
    var _a;
    var product = props.product;
    if (!(product === null || product === void 0 ? void 0 : product.description) || ((_a = product === null || product === void 0 ? void 0 : product.description) === null || _a === void 0 ? void 0 : _a.length) == 0)
        return null;
    return react_1.default.createElement(components_1.Typography, { variant: "body1" }, product === null || product === void 0 ? void 0 : product.description);
};
exports.default = ShopifyProductDescription;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShopifyOptionButton_1 = __importDefault(require("./ShopifyOptionButton"));
var components_1 = require("../../../components");
var ShopifyProductVariantOptions = function (props) {
    var name = props.name, values = props.values, selected = props.selected, handleChange = props.handleChange;
    return (react_1.default.createElement("div", { className: "flex flex-col items-start justify-center space-y-2" },
        react_1.default.createElement(components_1.Typography, { variant: "body1" },
            "Select ",
            name),
        react_1.default.createElement("div", { className: "flex flex-row flex-wrap gap-2.5" }, values === null || values === void 0 ? void 0 : values.map(function (value) { return (react_1.default.createElement(ShopifyOptionButton_1.default, { key: value, value: value, name: name, active: selected === value, handleClick: handleChange }, value)); }))));
};
exports.default = ShopifyProductVariantOptions;

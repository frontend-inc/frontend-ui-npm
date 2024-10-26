'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShopifyOptionButton_1 = __importDefault(require("./ShopifyOptionButton"));
var core_1 = require("../../core");
var ProductVariantOptions = function (_a) {
    var name = _a.name, values = _a.values, selected = _a.selected, handleChange = _a.handleChange;
    return (react_1.default.createElement("div", { className: "flex flex-col items-start justify-center space-y-2" },
        react_1.default.createElement(core_1.Typography, { variant: "body1" },
            "Select ",
            name),
        react_1.default.createElement("div", { className: "flex flex-row flex-wrap gap-2.5" }, values === null || values === void 0 ? void 0 : values.map(function (value) { return (react_1.default.createElement(ShopifyOptionButton_1.default, { key: value, value: value, name: name, active: selected === value, handleClick: handleChange }, value)); }))));
};
exports.default = ProductVariantOptions;

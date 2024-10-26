'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShopifyProductVariantOptions_1 = __importDefault(require("./ShopifyProductVariantOptions"));
var ShopifyColorVariantOptions_1 = __importDefault(require("./ShopifyColorVariantOptions"));
var ShopifyProductVariantSelector = function (props) {
    var product = props.product, selectedOptions = props.selectedOptions, handleOptionChange = props.handleOptionChange;
    var productOption = function (optionName) {
        var _a;
        return (_a = product === null || product === void 0 ? void 0 : product.options) === null || _a === void 0 ? void 0 : _a.find(function (option) { return (option === null || option === void 0 ? void 0 : option.name) == optionName; });
    };
    var SORTED_OPTIONS = ['Color', 'Size', 'Style', 'Material'];
    return (react_1.default.createElement(react_1.default.Fragment, null, SORTED_OPTIONS.map(function (optionName) {
        var option = productOption(optionName);
        if (!option)
            return null;
        return optionName == 'Color' ? (react_1.default.createElement(ShopifyColorVariantOptions_1.default, { key: optionName, product: product, name: 'Color', values: option === null || option === void 0 ? void 0 : option.values, selected: selectedOptions['Color'], handleChange: handleOptionChange })) : (react_1.default.createElement(ShopifyProductVariantOptions_1.default, { key: optionName, name: option === null || option === void 0 ? void 0 : option.name, values: option === null || option === void 0 ? void 0 : option.values, selected: selectedOptions[option === null || option === void 0 ? void 0 : option.name], handleChange: handleOptionChange }));
    })));
};
exports.default = ShopifyProductVariantSelector;

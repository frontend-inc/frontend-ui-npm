'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var RadioPriceRangeOption = function (props) {
    var priceOption = props.priceOption, values = props.values, handleClick = props.handleClick;
    return (react_1.default.createElement("div", { className: "flex items-center space-x-2" },
        react_1.default.createElement(frontend_shadcn_1.RadioGroupItem, { value: "".concat(priceOption.min, "-").concat(priceOption.max), id: "".concat(priceOption.min, "-").concat(priceOption.max), checked: values === null || values === void 0 ? void 0 : values.includes(priceOption), onClick: function () { return handleClick(priceOption); } }),
        react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: "".concat(priceOption.min, "-").concat(priceOption.max), className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" },
            (0, frontend_shopify_1.formatCurrency)(priceOption.min, 0),
            " -",
            ' ',
            (0, frontend_shopify_1.formatCurrency)(priceOption.max, 0))));
};
var RadioPriceRangeInput = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, options = props.options, handleClick = props.handleClick;
    var values = filters.map(function (f) { return f.value; });
    var handleFilterClick = function (value) {
        handleClick({
            name: 'price',
            value: value,
        });
    };
    if ((options === null || options === void 0 ? void 0 : options.length) == 0)
        return null;
    return (react_1.default.createElement(frontend_shadcn_1.RadioGroup, { className: "space-y-1" }, options === null || options === void 0 ? void 0 : options.map(function (priceOption, index) { return (react_1.default.createElement(RadioPriceRangeOption, { key: index, values: values, priceOption: priceOption, handleClick: handleFilterClick })); })));
};
exports.default = RadioPriceRangeInput;

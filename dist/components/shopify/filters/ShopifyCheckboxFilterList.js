'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var ShopifyCheckboxFilterList = function (props) {
    var _a;
    var _b = props.filters, filters = _b === void 0 ? [] : _b, option = props.option, handleClick = props.handleClick;
    var values = filters.map(function (f) { return f.value; });
    var handleFilterClick = function (value) {
        handleClick({
            name: option.name,
            value: value,
        });
    };
    if (!option || !(typeof (option === null || option === void 0 ? void 0 : option.value) == 'object'))
        return null;
    return (react_1.default.createElement("div", { className: "space-y-2" }, (_a = option === null || option === void 0 ? void 0 : option.value) === null || _a === void 0 ? void 0 : _a.map(function (optionValue, index) { return (react_1.default.createElement("div", { key: index, className: "flex items-center space-x-2" },
        react_1.default.createElement(frontend_shadcn_1.Checkbox, { id: "".concat(option.name, "-").concat(index), checked: values === null || values === void 0 ? void 0 : values.includes(optionValue), onCheckedChange: function () { return handleFilterClick(optionValue); } }),
        react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: "".concat(option.name, "-").concat(index), className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, optionValue))); })));
};
exports.default = ShopifyCheckboxFilterList;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var SortList = function (props) {
    var _a = props || {}, value = _a.value, reverse = _a.reverse, options = _a.options, handleClick = _a.handleClick;
    return (react_1.default.createElement(frontend_shadcn_1.RadioGroup, { value: "".concat(value, "-").concat(reverse), onValueChange: function (newValue) {
            var _a = newValue.split('-'), value = _a[0], reverse = _a[1];
            handleClick(value, reverse === 'true');
        }, className: "space-y-1" }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement("div", { key: index, className: "flex items-center space-x-2" },
        react_1.default.createElement(frontend_shadcn_1.RadioGroupItem, { value: "".concat(option.value, "-").concat(option.reverse), id: "option-".concat(index) }),
        react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: "option-".concat(index), className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, option.label))); })));
};
exports.default = SortList;

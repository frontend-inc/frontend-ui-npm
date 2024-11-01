'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var CheckboxRatingsFilterItem = function (props) {
    var _a = props.values, values = _a === void 0 ? [] : _a, option = props.option, handleClick = props.handleClick;
    return (react_1.default.createElement("li", { className: "list-none" },
        react_1.default.createElement("button", { className: "flex items-center w-full px-0 py-2 hover:bg-accent hover:text-accent-foreground", onClick: handleClick },
            react_1.default.createElement("div", { className: "mr-2" },
                react_1.default.createElement(frontend_shadcn_1.Checkbox, { checked: values === null || values === void 0 ? void 0 : values.includes(option.value), onCheckedChange: handleClick })),
            react_1.default.createElement(components_1.Rating, { readOnly: true, value: Number(option === null || option === void 0 ? void 0 : option.value) }))));
};
var CheckboxFilter = function (props) {
    var label = props.label, field = props.field, values = props.values, handleClick = props.handleClick;
    var RATING_OPTIONS = [
        { label: '5 Star', value: 5 },
        { label: '4 Stars', value: 4 },
        { label: '3 Stars', value: 3 },
        { label: '2 Stars', value: 2 },
        { label: '1 Stars', value: 1 },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label }, RATING_OPTIONS === null || RATING_OPTIONS === void 0 ? void 0 : RATING_OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxRatingsFilterItem, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: 'OR',
                operator: 'eq',
                field: field,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;

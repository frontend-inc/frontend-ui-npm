'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var __1 = require("../..");
var CheckboxDatesPastFilter = function (props) {
    var label = props.label, field = props.field, values = props.values, handleClick = props.handleClick, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a;
    var OPTIONS = [
        { label: 'Today', value: 'current_time' },
        { label: '1 day ago', value: '1_day_ago' },
        { label: '7 days ago', value: '7_days_ago' },
        { label: '30 days ago', value: '30_days_ago' },
        { label: '90 days ago', value: '90_days_ago' },
        { label: 'Current Year', value: 'current_year' },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label }, OPTIONS === null || OPTIONS === void 0 ? void 0 : OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                field: field,
                where: 'AND',
                operator: 'gt',
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxDatesPastFilter;

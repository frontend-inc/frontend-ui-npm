'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxNumberRangeFilterItem_1 = __importDefault(require("./CheckboxNumberRangeFilterItem"));
var __1 = require("../..");
var CheckboxNumberRangeFilter = function (props) {
    var label = props.label, field = props.field, options = props.options, values = props.values, handleClick = props.handleClick;
    return (react_1.default.createElement(__1.MenuList, { label: label || 'Filter' }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(CheckboxNumberRangeFilterItem_1.default, { key: index, values: values, option: {
            label: option.label,
            min: parseFloat(String(option.min)),
            max: parseFloat(String(option.max)),
        }, handleClick: function () {
            return handleClick({
                field: field,
                operator: 'btw',
                where: 'OR',
                value: [
                    parseFloat(String(option.min)),
                    parseFloat(String(option.max)),
                ],
            });
        } })); })));
};
exports.default = CheckboxNumberRangeFilter;

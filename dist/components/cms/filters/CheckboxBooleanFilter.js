'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var __1 = require("../..");
var CheckboxFilter = function (props) {
    var label = props.label, field = props.field, values = props.values, handleClick = props.handleClick;
    var BOOLEAN_OPTIONS = [
        { label: 'True', operator: 'eq', value: true },
        { label: 'False', operator: 'eq', value: false },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label }, BOOLEAN_OPTIONS === null || BOOLEAN_OPTIONS === void 0 ? void 0 : BOOLEAN_OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                field: field,
                where: 'OR',
                operator: option.operator,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;

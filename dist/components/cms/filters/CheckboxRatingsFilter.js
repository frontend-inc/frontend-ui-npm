'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxRatingsFilterItem_1 = __importDefault(require("./CheckboxRatingsFilterItem"));
var __1 = require("../..");
var CheckboxFilter = function (props) {
    var label = props.label, field = props.field, values = props.values, handleClick = props.handleClick;
    var RATING_OPTIONS = [
        { label: '5 Star', value: 5 },
        { label: '4 Stars', value: 4 },
        { label: '3 Stars', value: 3 },
        { label: '2 Stars', value: 2 },
        { label: '1 Stars', value: 1 },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label }, RATING_OPTIONS === null || RATING_OPTIONS === void 0 ? void 0 : RATING_OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxRatingsFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: 'OR',
                operator: 'eq',
                field: field,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;

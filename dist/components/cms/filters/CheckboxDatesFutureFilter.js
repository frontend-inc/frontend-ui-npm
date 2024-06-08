"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var __1 = require("../..");
var CheckboxDatesFutureFilter = function (props) {
    var label = props.label, field = props.field, values = props.values, handleClick = props.handleClick, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a;
    var OPTIONS = [
        { label: 'Next day', value: '1_day' },
        { label: 'Next 7 days ', value: '7_days' },
        { label: 'Next 30 days', value: '30_days' },
        { label: 'Next 90 days', value: '90_days' },
        { label: 'Next Year', value: 'next_year' },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label, disablePadding: disablePadding }, OPTIONS === null || OPTIONS === void 0 ? void 0 : OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                field: field,
                where: 'AND',
                operator: 'lt',
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxDatesFutureFilter;

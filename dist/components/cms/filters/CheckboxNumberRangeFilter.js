"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxNumberRangeFilterItem_1 = __importDefault(require("./CheckboxNumberRangeFilterItem"));
var __1 = require("../..");
var CheckboxNumberRangeFilter = function (props) {
    var label = props.label, name = props.name, options = props.options, values = props.values, handleClick = props.handleClick, enableBorder = props.enableBorder, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, _b = props.closed, closed = _b === void 0 ? false : _b;
    return (react_1.default.createElement(__1.ExpandableList, { label: label, enableBorder: enableBorder, disablePadding: disablePadding, closed: closed }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(CheckboxNumberRangeFilterItem_1.default, { key: index, values: values, option: {
            label: option.label,
            min: parseFloat(String(option.min)),
            max: parseFloat(String(option.max)),
        }, handleClick: function () {
            return handleClick({
                field: name,
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

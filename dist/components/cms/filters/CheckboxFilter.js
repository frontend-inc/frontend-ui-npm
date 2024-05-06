"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var __1 = require("../..");
var CheckboxFilter = function (props) {
    var label = props.label, name = props.name, options = props.options, values = props.values, handleClick = props.handleClick, _a = props.disablePadding, disablePadding = _a === void 0 ? true : _a, _b = props.closed, closed = _b === void 0 ? false : _b;
    return (react_1.default.createElement(__1.ExpandableList, { label: label, enableBorder: false, disablePadding: disablePadding, closed: closed }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: 'OR',
                operator: 'eq',
                field: name,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FilterWrapper_1 = __importDefault(require("./FilterWrapper"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var CheckboxFilter = function (props) {
    var label = props.label, name = props.name, options = props.options, values = props.values, handleClick = props.handleClick, enableBorder = props.enableBorder, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, _b = props.closed, closed = _b === void 0 ? false : _b;
    return (react_1.default.createElement(FilterWrapper_1.default, { label: label, enableBorder: enableBorder, disablePadding: disablePadding, closed: closed }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: 'OR',
                operator: 'eq',
                field: name,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;

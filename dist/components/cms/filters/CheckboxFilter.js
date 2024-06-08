"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilterItem_1 = __importDefault(require("./CheckboxFilterItem"));
var __1 = require("../..");
var CheckboxFilter = function (props) {
    var label = props.label, field = props.field, _a = props.where, where = _a === void 0 ? 'AND' : _a, _b = props.operator, operator = _b === void 0 ? 'eq' : _b, options = props.options, values = props.values, handleClick = props.handleClick, _c = props.disablePadding, disablePadding = _c === void 0 ? true : _c, _d = props.defaultClosed, defaultClosed = _d === void 0 ? false : _d;
    return (react_1.default.createElement(__1.MenuList, { label: label, disablePadding: disablePadding, defaultClosed: defaultClosed }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1.default.createElement(CheckboxFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: where,
                operator: operator,
                field: field,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;

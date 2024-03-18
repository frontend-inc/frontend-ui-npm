"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilter_1 = __importDefault(require("./CheckboxFilter"));
var CheckboxNumberRangeFilter_1 = __importDefault(require("./CheckboxNumberRangeFilter"));
var CollectionFilterListInput = function (props) {
    var _a, _b;
    var _c = props || {}, filterOption = _c.filterOption, _d = _c.filters, filters = _d === void 0 ? [] : _d, handleFilter = _c.handleFilter;
    var findFilterValues = function (fieldName, filters) {
        var _filters = filters.filter(function (f) { return f.field == fieldName; });
        return _filters.map(function (f) { return f.value; });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        filterOption.variant == 'multi_select' && (react_1.default.createElement(CheckboxFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), options: (_a = filterOption.options) === null || _a === void 0 ? void 0 : _a.map(function (option) { return ({
                label: option,
                value: option,
            }); }), handleClick: handleFilter })),
        filterOption.variant == 'number_range' && (react_1.default.createElement(CheckboxNumberRangeFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), options: (_b = filterOption.options) === null || _b === void 0 ? void 0 : _b.map(function (option) { return ({
                min: option.min,
                max: option.max,
            }); }), handleClick: handleFilter }))));
};
exports.default = CollectionFilterListInput;

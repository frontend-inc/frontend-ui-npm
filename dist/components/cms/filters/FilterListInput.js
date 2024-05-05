"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxFilter_1 = __importDefault(require("./CheckboxFilter"));
var CheckboxBooleanFilter_1 = __importDefault(require("./CheckboxBooleanFilter"));
var CheckboxNumberRangeFilter_1 = __importDefault(require("./CheckboxNumberRangeFilter"));
var CheckboxRatingsFilter_1 = __importDefault(require("./CheckboxRatingsFilter"));
var FilterListInput = function (props) {
    var _a = props || {}, filterOption = _a.filterOption, _b = _a.filters, filters = _b === void 0 ? [] : _b, handleFilter = _a.handleFilter;
    var findFilterValues = function (fieldName, filters) {
        var _filters = filters.filter(function (f) { return f.field == fieldName; });
        return _filters.map(function (f) { return f.value; });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        filterOption.variant == 'boolean' && (react_1.default.createElement(CheckboxBooleanFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), handleClick: handleFilter })),
        filterOption.variant == 'multiple_choice' && (react_1.default.createElement(CheckboxFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), 
            // @ts-ignore
            options: filterOption.options, handleClick: handleFilter })),
        filterOption.variant == 'number_range' && (react_1.default.createElement(CheckboxNumberRangeFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), 
            // @ts-ignore
            options: filterOption.options, handleClick: handleFilter })),
        filterOption.variant == 'ratings_scale' && (react_1.default.createElement(CheckboxRatingsFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), handleClick: handleFilter }))));
};
exports.default = FilterListInput;

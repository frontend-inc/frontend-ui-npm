'use client';
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
var CheckboxDatesPastFilter_1 = __importDefault(require("./CheckboxDatesPastFilter"));
var CheckboxDatesFutureFilter_1 = __importDefault(require("./CheckboxDatesFutureFilter"));
var FilterListInput = function (props) {
    var _a = props || {}, filterOption = _a.filterOption, _b = _a.filters, filters = _b === void 0 ? [] : _b, handleFilter = _a.handleFilter;
    var findFilterValues = function (fieldName, filters) {
        var _filters = filters.filter(function (f) { return f.field == fieldName; });
        return _filters.map(function (f) { return f.value; });
    };
    var Component = {
        boolean: CheckboxBooleanFilter_1.default,
        date_range: CheckboxDatesPastFilter_1.default,
        date_range_past: CheckboxDatesPastFilter_1.default,
        date_range_future: CheckboxDatesFutureFilter_1.default,
        multiple_choice: CheckboxFilter_1.default,
        number_range: CheckboxNumberRangeFilter_1.default,
        ratings_scale: CheckboxRatingsFilter_1.default,
    }[filterOption === null || filterOption === void 0 ? void 0 : filterOption.variant];
    return (react_1.default.createElement(Component, { field: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), handleClick: handleFilter, options: filterOption.options }));
};
exports.default = FilterListInput;

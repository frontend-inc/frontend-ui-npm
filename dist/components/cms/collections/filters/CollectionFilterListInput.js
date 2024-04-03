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
var CheckboxPriceRangeFilter_1 = __importDefault(require("./CheckboxPriceRangeFilter"));
var CollectionFilterListInput = function (props) {
    var _a, _b, _c;
    var _d = props || {}, filterOption = _d.filterOption, _e = _d.filters, filters = _e === void 0 ? [] : _e, handleFilter = _d.handleFilter;
    var findFilterValues = function (fieldName, filters) {
        var _filters = filters.filter(function (f) { return f.field == fieldName; });
        return _filters.map(function (f) { return f.value; });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        filterOption.variant == 'boolean' && (react_1.default.createElement(CheckboxBooleanFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), handleClick: handleFilter })),
        filterOption.variant == 'multiple_choice' && (react_1.default.createElement(CheckboxFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), options: (_a = filterOption.options) === null || _a === void 0 ? void 0 : _a.map(function (option) { return ({
                label: option,
                value: option,
            }); }), handleClick: handleFilter })),
        filterOption.variant == 'number_range' && (react_1.default.createElement(CheckboxNumberRangeFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), options: (_b = filterOption.options) === null || _b === void 0 ? void 0 : _b.map(function (option) { return ({
                min: option.min,
                max: option.max,
            }); }), handleClick: handleFilter })),
        filterOption.variant == 'price_range' && (react_1.default.createElement(CheckboxPriceRangeFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), options: (_c = filterOption.options) === null || _c === void 0 ? void 0 : _c.map(function (option) { return ({
                min: option.min,
                max: option.max,
            }); }), handleClick: handleFilter })),
        filterOption.variant == 'ratings' && (react_1.default.createElement(CheckboxRatingsFilter_1.default, { name: filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, label: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label, values: findFilterValues(filterOption === null || filterOption === void 0 ? void 0 : filterOption.field, filters), handleClick: handleFilter }))));
};
exports.default = CollectionFilterListInput;

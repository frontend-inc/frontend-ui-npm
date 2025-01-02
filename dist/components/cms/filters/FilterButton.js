'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterGroup = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var FilterGroup = function (props) {
    var _a, _b;
    var _c = props || {}, filters = _c.filters, filterOption = _c.filterOption, handleFilter = _c.handleFilter;
    var selectedKeys = (_a = filters === null || filters === void 0 ? void 0 : filters.filter(function (filter) { return (filter === null || filter === void 0 ? void 0 : filter.name) == (filterOption === null || filterOption === void 0 ? void 0 : filterOption.name); })) === null || _a === void 0 ? void 0 : _a.map(function (filter) { return filter === null || filter === void 0 ? void 0 : filter.value; });
    var handleSelectionChange = function (keys) {
        handleFilter(filterOption === null || filterOption === void 0 ? void 0 : filterOption.name, keys.currentKey);
    };
    return (react_1.default.createElement(react_3.Listbox, { selectionMode: "single", selectedKeys: selectedKeys, onSelectionChange: handleSelectionChange },
        react_1.default.createElement(react_3.ListboxSection, { title: filterOption === null || filterOption === void 0 ? void 0 : filterOption.label }, (_b = filterOption === null || filterOption === void 0 ? void 0 : filterOption.options) === null || _b === void 0 ? void 0 : _b.map(function (option) { return (
        //@ts-ignore
        react_1.default.createElement(react_3.ListboxItem, { key: option === null || option === void 0 ? void 0 : option.value }, option === null || option === void 0 ? void 0 : option.label)); }))));
};
exports.FilterGroup = FilterGroup;
var FilterButton = function (props) {
    var _a = props || {}, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, _d = _a.filterOptions, filterOptions = _d === void 0 ? [] : _d, handleFilter = _a.handleFilter;
    return (react_1.default.createElement(react_3.Popover, null,
        react_1.default.createElement(react_3.PopoverTrigger, null,
            react_1.default.createElement(react_3.Button, { variant: "ghost", isLoading: loading, className: (0, react_2.cn)('text-foreground relative w-full sm:w-auto'), startContent: react_1.default.createElement(__1.RemixIcon, { name: "ri-filter-3-line", className: "text-foreground" }) }, "Filters")),
        react_1.default.createElement(react_3.PopoverContent, { className: "w-full md:min-w-[220px]" }, filterOptions.map(function (filterOption, index) { return (react_1.default.createElement(exports.FilterGroup, { key: index, filters: filters, filterOption: filterOption, handleFilter: handleFilter })); }))));
};
exports.default = FilterButton;

'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterGroup = void 0;
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var components_3 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var FilterGroup = function (props) {
    var _a;
    var _b = props || {}, filters = _b.filters, filterOption = _b.filterOption, handleFilter = _b.handleFilter;
    return (react_1.default.createElement("div", { className: "w-full flex flex-col space-y-3 p-4 rounded-lg" },
        react_1.default.createElement(components_2.Typography, { variant: "body1", className: "font-medium" }, filterOption === null || filterOption === void 0 ? void 0 : filterOption.label),
        react_1.default.createElement("ul", { className: "list-none w-full p-0 flex flex-col space-y-2" }, (_a = filterOption === null || filterOption === void 0 ? void 0 : filterOption.options) === null || _a === void 0 ? void 0 : _a.map(function (option, index) {
            var selected = filters === null || filters === void 0 ? void 0 : filters.find(function (f) { return (f === null || f === void 0 ? void 0 : f.name) === (filterOption === null || filterOption === void 0 ? void 0 : filterOption.name) && (f === null || f === void 0 ? void 0 : f.value) === (option === null || option === void 0 ? void 0 : option.value); });
            return (react_1.default.createElement("li", { key: index, className: "list-none" },
                react_1.default.createElement(components_3.Button, { fullWidth: true, variant: "ghost", className: "justify-between items-center", onClick: function () { return handleFilter(filterOption === null || filterOption === void 0 ? void 0 : filterOption.name, option === null || option === void 0 ? void 0 : option.value); }, endIcon: selected && (react_1.default.createElement(__1.RemixIcon, { name: "ri-check-fill", className: "text-foreground ml-2" })) }, option === null || option === void 0 ? void 0 : option.label)));
        }))));
};
exports.FilterGroup = FilterGroup;
var FilterButton = function (props) {
    var _a = props || {}, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, _d = _a.filterOptions, filterOptions = _d === void 0 ? [] : _d, handleFilter = _a.handleFilter;
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    return (react_1.default.createElement("div", { className: "w-full sm:w-auto" },
        react_1.default.createElement(frontend_shadcn_1.Popover, null,
            react_1.default.createElement(frontend_shadcn_1.PopoverTrigger, { asChild: true },
                react_1.default.createElement(components_3.Button, { variant: "secondary", loading: loading, className: (0, frontend_shadcn_2.cn)('relative w-full sm:w-auto', (filters === null || filters === void 0 ? void 0 : filters.length) > 0 && 'border-r-0'), startIcon: react_1.default.createElement(__1.RemixIcon, { name: "ri-equilizer-2-fill", className: "text-secondary-foreground" }) }, "Filters")),
            react_1.default.createElement(frontend_shadcn_1.PopoverContent, { className: "bg-background w-80 p-0" },
                react_1.default.createElement("ul", { className: "w-full p-0" }, filterOptions.map(function (filterOption, index) { return (react_1.default.createElement(exports.FilterGroup, { key: index, filters: filters, filterOption: filterOption, handleFilter: handleFilter })); })))),
        react_1.default.createElement(components_1.Hidden, { smUp: true },
            react_1.default.createElement(__1.Sheet, { open: open, handleClose: function () { return setOpen(false); }, title: "Search" },
                react_1.default.createElement("ul", { className: "w-full p-0" }, filterOptions.map(function (filterOption, index) { return (react_1.default.createElement(exports.FilterGroup, { key: index, filters: filters, filterOption: filterOption, handleFilter: handleFilter })); }))))));
};
exports.default = FilterButton;

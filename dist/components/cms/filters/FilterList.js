"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FilterListInput_1 = __importDefault(require("./FilterListInput"));
var material_1 = require("@mui/material");
var FilterList = function (props) {
    var _a = props || {}, _b = _a.filters, filters = _b === void 0 ? [] : _b, _c = _a.filterOptions, filterOptions = _c === void 0 ? [] : _c, handleFilter = _a.handleFilter;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0 }, filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.map(function (filterOption, index) { return (react_1.default.createElement(FilterListInput_1.default, { key: index, filters: filters, filterOption: filterOption, handleFilter: handleFilter })); })));
};
exports.default = FilterList;

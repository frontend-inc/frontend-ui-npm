"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CollectionFilterListInput_1 = __importDefault(require("./CollectionFilterListInput"));
var material_1 = require("@mui/material");
var CollectionFilterList = function (props) {
    var _a = props || {}, filters = _a.filters, filterOptions = _a.filterOptions, handleFilter = _a.handleFilter;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0 }, filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.map(function (filterOption, index) { return (react_1.default.createElement(CollectionFilterListInput_1.default, { key: index, filters: filters, filterOption: filterOption, handleFilter: handleFilter })); })));
};
exports.default = CollectionFilterList;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var RemoteSortButton = function (props) {
    var _a = props || {}, url = _a.url, sortBy = _a.sortBy, sortDirection = _a.sortDirection, handleSortBy = _a.handleSortBy, handleSortDirection = _a.handleSortDirection;
    var _b = (0, hooks_1.useFetchSort)({
        url: url
    }), loading = _b.loading, fields = _b.fields;
    return (react_1.default.createElement(components_1.SortButton, { loading: loading, sortOptions: fields, sortBy: sortBy, sortDirection: sortDirection, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }));
};
exports.default = RemoteSortButton;

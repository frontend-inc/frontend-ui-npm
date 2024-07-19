"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var RemoteFilterButton = function (props) {
    var _a = props || {}, url = _a.url, _b = _a.disableFilterCount, disableFilterCount = _b === void 0 ? false : _b, handleFilter = _a.handleFilter, handleClear = _a.handleClear;
    var _c = (0, hooks_1.useFetchFilters)({
        url: url
    }), loading = _c.loading, fields = _c.fields;
    return (react_1.default.createElement(components_1.FilterButton, { loading: loading, disableFilterCount: disableFilterCount, handleFilter: handleFilter, handleClear: handleClear, filterOptions: fields }));
};
exports.default = RemoteFilterButton;

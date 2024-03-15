"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProductFiltersList_1 = __importDefault(require("./ProductFiltersList"));
var ProductSearchFilters = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(ProductFiltersList_1.default, { filters: filters, options: options, handleFilter: handleFilter, handleFilterArray: handleFilterArray }));
};
exports.default = ProductSearchFilters;

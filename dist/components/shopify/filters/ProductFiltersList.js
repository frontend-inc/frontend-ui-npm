"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var material_1 = require("@mui/material");
var constants_1 = require("../../../constants");
var RadioPriceRangeInput_1 = __importDefault(require("./RadioPriceRangeInput"));
var components_1 = require("../../../components");
var ProductFiltersList = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.priceOptions, priceOptions = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0 },
        constants_1.SHOPIFY_SEARCH_FILTERS.map(function (filterType, i) {
            var activeFilters = filters === null || filters === void 0 ? void 0 : filters.filter(function (f) { return f.name == filterType.value; });
            var option = options === null || options === void 0 ? void 0 : options.find(function (o) { return o.name == filterType.value; });
            if (!option)
                return null;
            return (react_1.default.createElement(components_1.MenuList, { label: filterType.label },
                react_1.default.createElement(__1.CheckboxFilterList, { filters: activeFilters, option: option, handleClick: filterType.array ? handleFilterArray : handleFilter })));
        }),
        (priceOptions === null || priceOptions === void 0 ? void 0 : priceOptions.length) > 0 && (react_1.default.createElement(components_1.MenuList, { label: "Price" },
            react_1.default.createElement(RadioPriceRangeInput_1.default, { filters: filters, options: priceOptions, handleClick: handleFilter })))));
};
exports.default = ProductFiltersList;

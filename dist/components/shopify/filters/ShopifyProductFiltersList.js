'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyCheckboxFilterList_1 = __importDefault(require("./ShopifyCheckboxFilterList"));
var constants_1 = require("../../../constants");
var RadioPriceRangeInput_1 = __importDefault(require("./RadioPriceRangeInput"));
var ShopifyProductFiltersList = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.priceOptions, priceOptions = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(frontend_shadcn_1.Accordion, { type: "multiple", className: "w-full" },
        constants_1.SHOPIFY_SEARCH_FILTERS.map(function (filterType, i) {
            var activeFilters = filters === null || filters === void 0 ? void 0 : filters.filter(function (f) { return f.name == filterType.value; });
            var option = options === null || options === void 0 ? void 0 : options.find(function (o) { return o.name == filterType.value; });
            if (!option)
                return null;
            return (react_1.default.createElement(frontend_shadcn_1.AccordionItem, { value: filterType.value, key: i },
                react_1.default.createElement(frontend_shadcn_1.AccordionTrigger, { className: "text-sm font-medium" }, filterType.label),
                react_1.default.createElement(frontend_shadcn_1.AccordionContent, null,
                    react_1.default.createElement(ShopifyCheckboxFilterList_1.default, { filters: activeFilters, option: option, handleClick: filterType.array ? handleFilterArray : handleFilter }))));
        }),
        (priceOptions === null || priceOptions === void 0 ? void 0 : priceOptions.length) > 0 && (react_1.default.createElement(frontend_shadcn_1.AccordionItem, { value: "price" },
            react_1.default.createElement(frontend_shadcn_1.AccordionTrigger, { className: "text-sm font-medium" }, "Price"),
            react_1.default.createElement(frontend_shadcn_1.AccordionContent, null,
                react_1.default.createElement(RadioPriceRangeInput_1.default, { filters: filters, options: priceOptions, handleClick: handleFilter }))))));
};
exports.default = ShopifyProductFiltersList;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyProductFiltersList_1 = __importDefault(require("./ShopifyProductFiltersList"));
var lucide_react_1 = require("lucide-react");
var ShopifyProductSearchFilters = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.priceOptions, priceOptions = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    return (react_1.default.createElement(frontend_shadcn_1.Sheet, null,
        react_1.default.createElement(frontend_shadcn_1.SheetTrigger, { asChild: true },
            react_1.default.createElement(components_1.Button, { variant: "secondary", className: "w-full" },
                react_1.default.createElement(lucide_react_1.SlidersHorizontal, { className: "mr-2 h-4 w-4" }),
                "Filters")),
        react_1.default.createElement(frontend_shadcn_1.SheetContent, { side: "right" },
            react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))));
};
exports.default = ShopifyProductSearchFilters;

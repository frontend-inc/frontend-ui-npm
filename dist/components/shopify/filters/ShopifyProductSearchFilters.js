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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var ShopifyProductFiltersList_1 = __importDefault(require("./ShopifyProductFiltersList"));
var lucide_react_1 = require("lucide-react");
var ShopifyProductSearchFilters = function (props) {
    var _a = props.filters, filters = _a === void 0 ? [] : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.priceOptions, priceOptions = _c === void 0 ? [] : _c, handleFilter = props.handleFilter, handleFilterArray = props.handleFilterArray;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Button, { variant: "ghost", fullWidth: true },
            react_1.default.createElement(lucide_react_1.SlidersHorizontal, { className: "mr-2 h-4 w-4" }),
            "Filters"),
        react_1.default.createElement(components_1.Sheet, { open: open, handleClose: function () { return setOpen(false); }, title: "Filter" },
            react_1.default.createElement(ShopifyProductFiltersList_1.default, { filters: filters, options: options, priceOptions: priceOptions, handleFilter: handleFilter, handleFilterArray: handleFilterArray }))));
};
exports.default = ShopifyProductSearchFilters;

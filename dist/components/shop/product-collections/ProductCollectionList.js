'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var ProductCollectionList = function (props) {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var _a = props || {}, foreignUrl = _a.foreignUrl, query = _a.query, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, href = _a.href, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _c = _a.filterOptions, filterOptions = _c === void 0 ? [] : _c, _d = _a.sortOptions, sortOptions = _d === void 0 ? [] : _d, _e = _a.list, List = _e === void 0 ? __1.ProductCollectionListItems : _e, _f = _a.slots, defaultSlots = _f === void 0 ? {
        header: {},
        list: {},
        item: {},
        empty: {},
    } : _f;
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { href: href, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        header: defaultSlots.header,
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { href: href, buttons: buttons, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    return (react_1.default.createElement(components_1.DataList, { grid: true, url: "".concat(apiUrl, "/shop/product_collections"), foreignUrl: foreignUrl, name: "product_collection", fields: [], query: __assign(__assign({}, query), { sort_by: 'position', sort_direction: 'asc' }), enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, list: List, component: __1.ProductCollectionListItem, slots: slots }));
};
exports.default = ProductCollectionList;

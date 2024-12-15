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
var __1 = require("../..");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var CollectionList = function (props) {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var _a = props || {}, query = _a.query, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _b = _a.filterOptions, filterOptions = _b === void 0 ? [] : _b, _c = _a.sortOptions, sortOptions = _c === void 0 ? [] : _c, _d = _a.slots, defaultSlots = _d === void 0 ? {
        header: {},
        list: {},
        item: {},
        empty: {},
    } : _d;
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { enableGradient: enableGradient, enableOverlay: enableOverlay }),
        header: defaultSlots.header,
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    return (react_1.default.createElement(__1.DataList, { layout: "grid", url: "".concat(apiUrl, "/cms/collections"), name: "collection", fields: [], query: __assign(__assign({}, query), { sort_by: 'position', sort_direction: 'asc' }), enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, list: __2.CollectionListItems, show: __2.CollectionShow, component: __2.CollectionListItem, slots: slots }));
};
exports.default = CollectionList;

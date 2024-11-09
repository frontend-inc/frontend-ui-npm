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
var ProductList = function (props) {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var _a = props || {}, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, _c = _a.selectable, selectable = _c === void 0 ? false : _c, query = _a.query, _d = _a.perPage, perPage = _d === void 0 ? 9 : _d, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableUsers = _a.enableUsers, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, url = _a.url, enableShow = _a.enableShow, _e = _a.fields, fields = _e === void 0 ? [] : _e, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _f = _a.header, Header = _f === void 0 ? __1.ProductHeader : _f, _g = _a.list, List = _g === void 0 ? __1.ProductListItems : _g, _h = _a.component, Component = _h === void 0 ? __1.ProductListItem : _h, _j = _a.show, Show = _j === void 0 ? __1.ProductShow : _j, _k = _a.empty, Empty = _k === void 0 ? __1.ProductEmpty : _k, _l = _a.slots, defaultSlots = _l === void 0 ? {
        header: {},
        list: {},
        item: {},
        show: {},
        empty: {},
    } : _l;
    var searchQuery = __assign({ sort_by: 'position', sort_direction: 'asc', per_page: perPage }, query);
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { selectable: selectable, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        header: defaultSlots.header,
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    var filterOptions = [
        {
            label: 'Rating',
            name: 'average_rating',
            options: [
                { label: '1 Star', value: 1 },
                { label: '2 Stars', value: 2 },
                { label: '3 Stars', value: 3 },
                { label: '4 Stars', value: 4 },
                { label: '5 Stars', value: 5 },
            ],
        },
    ];
    var sortOptions = [
        { name: 'created_at', label: 'Newest' },
        { name: 'price', label: 'Price' },
        { name: 'title', label: 'Title' },
    ];
    return (react_1.default.createElement(components_1.DataList, { selectable: selectable, layout: layout, url: url || "".concat(apiUrl, "/shop/products"), name: "product", query: searchQuery, fields: fields, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, sortOptions: sortOptions, 
        //@ts-ignore
        filterOptions: filterOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = ProductList;

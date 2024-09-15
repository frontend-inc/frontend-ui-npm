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
var helpers_1 = require("../../../helpers");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var ProductList = function (props) {
    var apiUrl = (0, hooks_1.useApp)().apiUrl;
    var url = (props || {}).url;
    var _a = props || {}, _b = _a.grid, grid = _b === void 0 ? true : _b, _c = _a.selectable, selectable = _c === void 0 ? false : _c, foreignUrl = _a.foreignUrl, query = _a.query, resource = _a.resource, _d = _a.perPage, perPage = _d === void 0 ? 9 : _d, filterUser = _a.filterUser, filterSimilar = _a.filterSimilar, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableUsers = _a.enableUsers, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _e = _a.style, style = _e === void 0 ? 'list' : _e, href = _a.href, _f = _a.buttons, buttons = _f === void 0 ? [] : _f, _g = _a.displayFields, displayFields = _g === void 0 ? [] : _g, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, _h = _a.fields, fields = _h === void 0 ? [] : _h, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _j = _a.filterOptions, filterOptions = _j === void 0 ? [] : _j, _k = _a.sortOptions, sortOptions = _k === void 0 ? [] : _k, _l = _a.headers, headers = _l === void 0 ? [] : _l, // Used by KanBan
    _m = _a.header, // Used by KanBan
    Header = _m === void 0 ? __1.ProductHeader : _m, _o = _a.list, List = _o === void 0 ? __1.ProductListItems : _o, _p = _a.component, Component = _p === void 0 ? __1.ProductListItem : _p, _q = _a.show, Show = _q === void 0 ? __1.ProductShow : _q, _r = _a.empty, Empty = _r === void 0 ? __1.ProductEmpty : _r, _s = _a.slots, defaultSlots = _s === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _s;
    var searchQuery = (0, helpers_1.buildSearchQuery)({
        query: query,
        resource: resource,
        perPage: perPage,
        filterUser: filterUser,
        filterSimilar: filterSimilar,
    });
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { headers: headers, style: style, href: href, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { selectable: selectable, displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        header: defaultSlots.header,
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { href: href, circular: circular, disableImage: disableImage, style: style, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    if (!url) {
        url = "/".concat(apiUrl, "/shop/products");
    }
    return (react_1.default.createElement(components_1.DataList, { selectable: selectable, grid: grid, url: url, foreignUrl: foreignUrl, name: "product", query: searchQuery, fields: fields, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = ProductList;

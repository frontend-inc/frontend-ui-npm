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
var CollectionList = function (props) {
    var _a = props || {}, _b = _a.grid, grid = _b === void 0 ? false : _b, url = _a.url, foreignUrl = _a.foreignUrl, query = _a.query, resource = _a.resource, _c = _a.perPage, perPage = _c === void 0 ? 10 : _c, filterSimilar = _a.filterSimilar, filterGeo = _a.filterGeo, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableComments = _a.enableComments, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _d = _a.style, style = _d === void 0 ? 'list' : _d, href = _a.href, _e = _a.buttons, buttons = _e === void 0 ? [] : _e, _f = _a.displayFields, displayFields = _f === void 0 ? [] : _f, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, _g = _a.fields, fields = _g === void 0 ? [] : _g, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _h = _a.filterOptions, filterOptions = _h === void 0 ? [] : _h, _j = _a.sortOptions, sortOptions = _j === void 0 ? [] : _j, _k = _a.headers, headers = _k === void 0 ? [] : _k, // Used by KanBan
    _l = _a.header, // Used by KanBan
    Header = _l === void 0 ? __1.CollectionHeader : _l, _m = _a.list, List = _m === void 0 ? __1.CollectionListItems : _m, _o = _a.component, Component = _o === void 0 ? __1.CollectionListItem : _o, _p = _a.show, Show = _p === void 0 ? __1.CollectionShow : _p, _q = _a.empty, Empty = _q === void 0 ? __1.CollectionEmpty : _q, _r = _a.slots, defaultSlots = _r === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _r;
    var searchQuery = (0, helpers_1.buildSearchQuery)({
        query: query,
        resource: resource,
        perPage: perPage,
        filterSimilar: filterSimilar,
        filterGeo: filterGeo,
    });
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { headers: headers, style: style, href: href, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        edit: __assign(__assign({}, defaultSlots.edit), { fields: fields }),
        create: __assign(__assign({}, defaultSlots.create), { fields: fields }),
        destroy: defaultSlots.destroy,
        header: defaultSlots.header,
        toolbar: __assign({}, defaultSlots.toolbar),
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { href: href, circular: circular, disableImage: disableImage, style: style, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    return (react_1.default.createElement(components_1.DataList, { grid: grid, url: url, foreignUrl: foreignUrl, name: "document", query: searchQuery, fields: fields, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = CollectionList;

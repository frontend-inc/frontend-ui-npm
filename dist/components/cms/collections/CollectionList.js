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
    var _a = props || {}, url = _a.url, foreignUrl = _a.foreignUrl, query = _a.query, resource = _a.resource, _b = _a.perPage, perPage = _b === void 0 ? 12 : _b, filterSimilar = _a.filterSimilar, filterGeo = _a.filterGeo, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableComments = _a.enableComments, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _c = _a.style, style = _c === void 0 ? 'card' : _c, href = _a.href, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, _e = _a.displayFields, displayFields = _e === void 0 ? [] : _e, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, _f = _a.fields, fields = _f === void 0 ? [] : _f, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _g = _a.filterOptions, filterOptions = _g === void 0 ? [] : _g, _h = _a.sortOptions, sortOptions = _h === void 0 ? [] : _h, _j = _a.headers, headers = _j === void 0 ? [] : _j, // Used by KanBan
    _k = _a.header, // Used by KanBan
    Header = _k === void 0 ? __1.CollectionHeader : _k, _l = _a.list, List = _l === void 0 ? __1.CollectionListItems : _l, _m = _a.component, Component = _m === void 0 ? __1.CollectionListItem : _m, _o = _a.show, Show = _o === void 0 ? __1.CollectionShow : _o, _p = _a.empty, Empty = _p === void 0 ? __1.CollectionEmpty : _p, _q = _a.slots, defaultSlots = _q === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _q;
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
    var grid = {
        avatar: false,
        list: false,
        text: false,
        card: true,
        cover: true
    }[style] || false;
    return (react_1.default.createElement(components_1.DataList, { grid: grid, url: url, foreignUrl: foreignUrl, name: "document", query: searchQuery, fields: fields, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = CollectionList;

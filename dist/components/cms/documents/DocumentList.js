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
var helpers_1 = require("../../../helpers");
var __2 = require("../..");
var DocumentList = function (props) {
    var url = props.url;
    url = url || '/api/v1/cms/documents';
    var DEFAULT_QUERY = {
        sort_by: 'position',
        sort_direction: 'asc',
        per_page: 12,
    };
    var _a = props || {}, _b = _a.contentType, contentType = _b === void 0 ? '' : _b, _c = _a.query, query = _c === void 0 ? DEFAULT_QUERY : _c, _d = _a.displaySubtitle, displaySubtitle = _d === void 0 ? false : _d, _e = _a.displayTags, displayTags = _e === void 0 ? false : _e, _f = _a.displayLocation, displayLocation = _f === void 0 ? false : _f, _g = _a.displayCategory, displayCategory = _g === void 0 ? false : _g, displayDescription = _a.displayDescription, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableComments = _a.enableComments, sortTitle = _a.sortTitle, sortPosition = _a.sortPosition, sortDate = _a.sortDate, sortPublished = _a.sortPublished, sortPrice = _a.sortPrice, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _h = _a.style, style = _h === void 0 ? 'card' : _h, _j = _a.buttons, buttons = _j === void 0 ? [] : _j, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _k = _a.displayFields, displayFields = _k === void 0 ? [] : _k, _l = _a.filterChoices, filterChoices = _l === void 0 ? [] : _l, _m = _a.headers, headers = _m === void 0 ? [] : _m, // Used by KanBan
    _o = _a.header, // Used by KanBan
    Header = _o === void 0 ? __2.DocumentHeader : _o, _p = _a.list, List = _p === void 0 ? __2.DocumentListItems : _p, _q = _a.component, Component = _q === void 0 ? __2.DocumentListItem : _q, _r = _a.show, Show = _r === void 0 ? __2.DocumentShow : _r, _s = _a.empty, Empty = _s === void 0 ? __2.DocumentEmpty : _s, _t = _a.slots, defaultSlots = _t === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _t;
    var searchQuery = (0, helpers_1.buildSearchQuery)(contentType, query);
    var listFields = (0, helpers_1.buildListFields)({
        displaySubtitle: displaySubtitle,
        displayCategory: displayCategory,
        displayLocation: displayLocation,
        displayDescription: displayDescription,
        displayTags: displayTags,
    });
    var sortOptions = (0, helpers_1.buildSortFields)({
        sortTitle: sortTitle,
        sortPosition: sortPosition,
        sortDate: sortDate,
        sortPublished: sortPublished,
        sortPrice: sortPrice,
    });
    var filterOptions = (0, helpers_1.buildFilterFields)({
        filterChoices: filterChoices,
    });
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { headers: headers, style: style, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        edit: __assign({}, defaultSlots.edit),
        create: __assign({}, defaultSlots.create),
        destroy: defaultSlots.destroy,
        header: defaultSlots.header,
        toolbar: __assign({}, defaultSlots.toolbar),
        empty: __assign(__assign({}, defaultSlots.empty), { icon: 'ri-search-line', title: 'No items found', description: 'Try to adjust your filters or search query' }),
        item: __assign(__assign({}, defaultSlots.item), { circular: circular, disableImage: disableImage, style: style, buttons: buttons, listFields: listFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    var layout = {
        avatar: 'list',
        list: 'list',
        text: 'list',
        card: 'grid',
        cover: 'grid',
    }[style] || 'list';
    return (react_1.default.createElement(__1.DataList
    //@ts-ignore
    , { 
        //@ts-ignore
        layout: layout, url: url, name: "document", query: searchQuery, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, 
        //@ts-ignore
        filterOptions: filterOptions, sortOptions: sortOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = DocumentList;

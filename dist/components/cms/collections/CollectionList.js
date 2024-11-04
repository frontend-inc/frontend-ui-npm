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
var helpers_1 = require("../../../helpers");
var __1 = require("../..");
var CollectionList = function (props) {
    var _a = props || {}, url = _a.url, query = _a.query, _b = _a.perPage, perPage = _b === void 0 ? 12 : _b, displaySubtitle = _a.displaySubtitle, displayCategory = _a.displayCategory, displayLocation = _a.displayLocation, displayDescription = _a.displayDescription, displayTags = _a.displayTags, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableComments = _a.enableComments, sortTitle = _a.sortTitle, sortPosition = _a.sortPosition, sortDate = _a.sortDate, sortPublished = _a.sortPublished, sortPrice = _a.sortPrice, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _c = _a.style, style = _c === void 0 ? 'card' : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, _e = _a.fields, fields = _e === void 0 ? [] : _e, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _f = _a.displayFields, displayFields = _f === void 0 ? [] : _f, _g = _a.filterChoices, filterChoices = _g === void 0 ? [] : _g, _h = _a.headers, headers = _h === void 0 ? [] : _h, // Used by KanBan
    _j = _a.header, // Used by KanBan
    Header = _j === void 0 ? __1.CollectionHeader : _j, _k = _a.list, List = _k === void 0 ? __1.CollectionListItems : _k, _l = _a.component, Component = _l === void 0 ? __1.CollectionListItem : _l, _m = _a.show, Show = _m === void 0 ? __1.CollectionShow : _m, _o = _a.empty, Empty = _o === void 0 ? __1.CollectionEmpty : _o, _p = _a.slots, defaultSlots = _p === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _p;
    var searchQuery = __assign({ sort_by: 'position', sort_direction: 'asc', per_page: perPage }, query);
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
        edit: __assign(__assign({}, defaultSlots.edit), { fields: fields }),
        create: __assign(__assign({}, defaultSlots.create), { fields: fields }),
        destroy: defaultSlots.destroy,
        header: defaultSlots.header,
        toolbar: __assign({}, defaultSlots.toolbar),
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { circular: circular, disableImage: disableImage, style: style, buttons: buttons, listFields: listFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableComments: enableComments, enableGradient: enableGradient, enableOverlay: enableOverlay }),
    };
    var layout = {
        avatar: 'list',
        list: 'list',
        text: 'list',
        card: 'grid',
        cover: 'grid',
    }[style] || 'list';
    return (react_1.default.createElement(components_1.DataList
    //@ts-ignore
    , { 
        //@ts-ignore
        layout: layout, url: url, name: "document", fields: fields, query: searchQuery, enableShow: enableShow, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, 
        //@ts-ignore
        filterOptions: filterOptions, sortOptions: sortOptions, header: Header, list: List, component: Component, show: Show, empty: Empty, slots: slots }));
};
exports.default = CollectionList;

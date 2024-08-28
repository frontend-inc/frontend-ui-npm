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
    var _a = props || {}, _b = _a.grid, grid = _b === void 0 ? false : _b, _c = _a.selectable, selectable = _c === void 0 ? false : _c, url = _a.url, foreignUrl = _a.foreignUrl, query = _a.query, resource = _a.resource, _d = _a.perPage, perPage = _d === void 0 ? 10 : _d, filterUser = _a.filterUser, filterTeam = _a.filterTeam, filterSimilar = _a.filterSimilar, filterGeo = _a.filterGeo, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableComments = _a.enableComments, enableUsers = _a.enableUsers, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _e = _a.style, style = _e === void 0 ? 'list' : _e, _f = _a.buttons, buttons = _f === void 0 ? [] : _f, _g = _a.displayFields, displayFields = _g === void 0 ? [] : _g, circular = _a.circular, disableImage = _a.disableImage, _h = _a.toolbarButtons, toolbarButtons = _h === void 0 ? [] : _h, enableShow = _a.enableShow, enableEdit = _a.enableEdit, enableCreate = _a.enableCreate, enableDelete = _a.enableDelete, enableAddToList = _a.enableAddToList, _j = _a.fields, fields = _j === void 0 ? [] : _j, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _k = _a.filterOptions, filterOptions = _k === void 0 ? [] : _k, _l = _a.sortOptions, sortOptions = _l === void 0 ? [] : _l, _m = _a.headers, headers = _m === void 0 ? [] : _m, // Used by KanBan
    _o = _a.header, // Used by KanBan
    Header = _o === void 0 ? __1.CollectionHeader : _o, _p = _a.list, List = _p === void 0 ? __1.CollectionListItems : _p, _q = _a.component, Component = _q === void 0 ? __1.CollectionListItem : _q, _r = _a.show, Show = _r === void 0 ? __1.CollectionShow : _r, _s = _a.edit, Edit = _s === void 0 ? __1.CollectionForm : _s, _t = _a.create, Create = _t === void 0 ? __1.CollectionForm : _t, _u = _a.destroy, Destroy = _u === void 0 ? __1.CollectionDelete : _u, _v = _a.empty, Empty = _v === void 0 ? __1.CollectionEmpty : _v, _w = _a.toolbar, Toolbar = _w === void 0 ? __1.CollectionToolbar : _w, _x = _a.slots, defaultSlots = _x === void 0 ? {
        header: {},
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        empty: {},
    } : _x;
    var searchQuery = (0, helpers_1.buildSearchQuery)({
        query: query,
        resource: resource,
        perPage: perPage,
        filterUser: filterUser,
        filterTeam: filterTeam,
        filterSimilar: filterSimilar,
        filterGeo: filterGeo,
    });
    var slots = {
        list: __assign(__assign({}, defaultSlots.list), { headers: headers, style: style, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddToList: enableAddToList, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { selectable: selectable, displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddToList: enableAddToList, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        edit: __assign(__assign({}, defaultSlots.edit), { fields: fields }),
        create: __assign(__assign({}, defaultSlots.create), { fields: fields }),
        destroy: defaultSlots.destroy,
        header: defaultSlots.header,
        toolbar: __assign(__assign({}, defaultSlots.toolbar), { enableAddToList: enableAddToList, enableDelete: enableDelete, toolbarButtons: toolbarButtons }),
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { circular: circular, disableImage: disableImage, style: style, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddToList: enableAddToList, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay })
    };
    return (react_1.default.createElement(components_1.DataList, { selectable: selectable, grid: grid, url: url, foreignUrl: foreignUrl, name: "document", query: searchQuery, fields: fields, enableShow: enableShow, enableCreate: enableCreate, enableEdit: enableEdit, enableAddToList: enableAddToList, enableDelete: enableDelete, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, header: Header, toolbar: Toolbar, list: List, component: Component, show: Show, edit: Edit, create: Create, destroy: Destroy, empty: Empty, slots: slots }));
};
exports.default = CollectionList;

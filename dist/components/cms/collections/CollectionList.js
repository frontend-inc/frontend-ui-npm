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
    var _a = props || {}, url = _a.url, query = _a.query, resource = _a.resource, perPage = _a.perPage, filterUser = _a.filterUser, filterTeam = _a.filterTeam, filterSimilar = _a.filterSimilar, filterGeo = _a.filterGeo, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableComments = _a.enableComments, enableUsers = _a.enableUsers, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, style = _a.style, _b = _a.buttons, buttons = _b === void 0 ? [] : _b, _c = _a.displayFields, displayFields = _c === void 0 ? [] : _c, enableShow = _a.enableShow, enableEdit = _a.enableEdit, enableCreate = _a.enableCreate, enableDelete = _a.enableDelete, _d = _a.fields, fields = _d === void 0 ? [] : _d, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _e = _a.filterOptions, filterOptions = _e === void 0 ? [] : _e, _f = _a.sortOptions, sortOptions = _f === void 0 ? [] : _f, _g = _a.headers, headers = _g === void 0 ? [] : _g, // Used by KanBan
    _h = _a.toolbar, // Used by KanBan
    Toolbar = _h === void 0 ? __1.CollectionToolbar : _h, _j = _a.list, List = _j === void 0 ? __1.CollectionListItems : _j, _k = _a.show, Show = _k === void 0 ? __1.CollectionShow : _k, _l = _a.edit, Edit = _l === void 0 ? __1.CollectionForm : _l, _m = _a.create, Create = _m === void 0 ? __1.CollectionForm : _m, _o = _a.destroy, Destroy = _o === void 0 ? __1.CollectionDelete : _o, _p = _a.empty, Empty = _p === void 0 ? __1.CollectionEmpty : _p, _q = _a.slots, defaultSlots = _q === void 0 ? {
        toolbar: {},
        list: {},
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
        filterUser: filterUser,
        filterTeam: filterTeam,
        filterSimilar: filterSimilar,
        filterGeo: filterGeo,
    });
    var slots = {
        list: __assign({ headers: headers, style: style, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }, defaultSlots.list),
        show: __assign({ displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }, defaultSlots.show),
        edit: __assign({ fields: fields }, defaultSlots.edit),
        create: __assign({ fields: fields }, defaultSlots.create),
        destroy: defaultSlots.destroy,
        toolbar: defaultSlots.toolbar,
        empty: defaultSlots.empty,
    };
    return (react_1.default.createElement(components_1.DataList, { url: url, name: 'document', query: searchQuery, fields: fields, enableShow: enableShow, enableCreate: enableCreate, enableEdit: enableEdit, enableDelete: enableDelete, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, toolbar: Toolbar, list: List, show: Show, edit: Edit, create: Create, destroy: Destroy, empty: Empty, slots: slots }));
};
exports.default = CollectionList;

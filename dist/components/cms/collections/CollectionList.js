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
    var _a = props || {}, _b = _a.grid, grid = _b === void 0 ? false : _b, url = _a.url, foreignUrl = _a.foreignUrl, query = _a.query, resource = _a.resource, _c = _a.perPage, perPage = _c === void 0 ? 10 : _c, filterUser = _a.filterUser, filterTeam = _a.filterTeam, filterSimilar = _a.filterSimilar, filterGeo = _a.filterGeo, enableLikes = _a.enableLikes, enableFavorites = _a.enableFavorites, enableRatings = _a.enableRatings, enableComments = _a.enableComments, enableUsers = _a.enableUsers, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay, _d = _a.style, style = _d === void 0 ? 'list' : _d, _e = _a.buttons, buttons = _e === void 0 ? [] : _e, _f = _a.displayFields, displayFields = _f === void 0 ? [] : _f, circular = _a.circular, disableImage = _a.disableImage, enableShow = _a.enableShow, enableEdit = _a.enableEdit, enableCreate = _a.enableCreate, enableDelete = _a.enableDelete, enableAddReference = _a.enableAddReference, _g = _a.fields, fields = _g === void 0 ? [] : _g, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, _h = _a.filterOptions, filterOptions = _h === void 0 ? [] : _h, _j = _a.sortOptions, sortOptions = _j === void 0 ? [] : _j, _k = _a.headers, headers = _k === void 0 ? [] : _k, // Used by KanBan
    _l = _a.toolbar, // Used by KanBan
    Toolbar = _l === void 0 ? __1.CollectionToolbar : _l, _m = _a.list, List = _m === void 0 ? __1.CollectionListItems : _m, _o = _a.component, Component = _o === void 0 ? __1.CollectionListItem : _o, _p = _a.show, Show = _p === void 0 ? __1.CollectionShow : _p, _q = _a.edit, Edit = _q === void 0 ? __1.CollectionForm : _q, _r = _a.create, Create = _r === void 0 ? __1.CollectionForm : _r, _s = _a.destroy, Destroy = _s === void 0 ? __1.CollectionDelete : _s, _t = _a.empty, Empty = _t === void 0 ? __1.CollectionEmpty : _t, _u = _a.references, References = _u === void 0 ? __1.CollectionReferences : _u, _v = _a.slots, defaultSlots = _v === void 0 ? {
        toolbar: {},
        list: {},
        item: {},
        show: {},
        edit: {},
        create: {},
        destroy: {},
        references: {},
        empty: {},
    } : _v;
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
        list: __assign(__assign({}, defaultSlots.list), { headers: headers, style: style, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddReference: enableAddReference, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        show: __assign(__assign({}, defaultSlots.show), { displayFields: displayFields, buttons: buttons, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddReference: enableAddReference, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        edit: __assign(__assign({}, defaultSlots.edit), { fields: fields }),
        create: __assign(__assign({}, defaultSlots.create), { fields: fields }),
        destroy: defaultSlots.destroy,
        toolbar: defaultSlots.toolbar,
        empty: defaultSlots.empty,
        item: __assign(__assign({}, defaultSlots.item), { circular: circular, disableImage: disableImage, style: style, buttons: buttons, displayFields: displayFields, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableAddReference: enableAddReference, enableUsers: enableUsers, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        references: defaultSlots.references
    };
    return (react_1.default.createElement(components_1.DataList, { grid: grid, url: url, foreignUrl: foreignUrl, name: "document", query: searchQuery, fields: fields, enableShow: enableShow, enableCreate: enableCreate, enableEdit: enableEdit, enableAddReference: enableAddReference, enableDelete: enableDelete, enableSearch: enableSearch, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions, toolbar: Toolbar, list: List, component: Component, show: Show, edit: Edit, create: Create, destroy: Destroy, empty: Empty, references: References, slots: slots }));
};
exports.default = CollectionList;

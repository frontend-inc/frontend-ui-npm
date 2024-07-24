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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var List = function (props) {
    var style = props.style, resource = props.resource, enableSearch = props.enableSearch, enableGeoSearch = props.enableGeoSearch, enableCreate = props.enableCreate, enableEdit = props.enableEdit, enableDelete = props.enableDelete, enableFilters = props.enableFilters, enableSorting = props.enableSorting, href = props.href, url = props.url, _a = props.query, query = _a === void 0 ? {} : _a, _b = props.actions, actions = _b === void 0 ? [] : _b, _c = props.fields, fields = _c === void 0 ? [] : _c, _d = props.displayFields, displayFields = _d === void 0 ? [] : _d, _e = props.filterOptions, filterOptions = _e === void 0 ? [] : _e, _f = props.sortOptions, sortOptions = _f === void 0 ? [] : _f, enableLikes = props.enableLikes, enableFavorites = props.enableFavorites, enableRatings = props.enableRatings, enableComments = props.enableComments, enableUsers = props.enableUsers, enableGradient = props.enableGradient, enableOverlay = props.enableOverlay, filterUser = props.filterUser, filterTeam = props.filterTeam, filterRelated = props.filterRelated, filterSimilar = props.filterSimilar, filterGeo = props.filterGeo, perPage = props.perPage, _g = props.header, RenderHeader = _g === void 0 ? __1.ListToolbar : _g, _h = props.list, RenderList = _h === void 0 ? __1.ListItems : _h, _j = props.show, RenderShow = _j === void 0 ? __1.ShowModal : _j, _k = props.edit, RenderEdit = _k === void 0 ? __1.EditModal : _k, _l = props.destroy, RenderDelete = _l === void 0 ? __1.DeleteModal : _l, rest = __rest(props, ["style", "resource", "enableSearch", "enableGeoSearch", "enableCreate", "enableEdit", "enableDelete", "enableFilters", "enableSorting", "href", "url", "query", "actions", "fields", "displayFields", "filterOptions", "sortOptions", "enableLikes", "enableFavorites", "enableRatings", "enableComments", "enableUsers", "enableGradient", "enableOverlay", "filterUser", "filterTeam", "filterRelated", "filterSimilar", "filterGeo", "perPage", "header", "list", "show", "edit", "destroy"]);
    var searchQuery = (0, helpers_1.buildSearchQuery)({
        query: query,
        resource: resource,
        perPage: perPage,
        filterUser: filterUser,
        filterTeam: filterTeam,
        filterSimilar: filterSimilar,
        filterRelated: filterRelated,
        filterGeo: filterGeo
    });
    return (react_1.default.createElement(__1.ListBase, { url: url, query: searchQuery, name: 'document', header: react_1.default.createElement(__1.ListToolbar, { url: url, query: searchQuery, enableSearch: enableSearch, enableGeoSearch: enableGeoSearch, enableCreate: enableCreate, enableFilters: enableFilters, enableSorting: enableSorting, filterOptions: filterOptions, sortOptions: sortOptions }), list: react_1.default.createElement(RenderList, __assign({}, rest, { style: style, actions: actions, url: url, href: href, enableLikes: enableLikes, enableFavorites: enableFavorites, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers, displayFields: displayFields, enableEdit: enableEdit, enableDelete: enableDelete })), show: react_1.default.createElement(RenderShow, { actions: actions, displayFields: displayFields, enableOverlay: enableOverlay, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableComments: enableComments, enableUsers: enableUsers }), edit: react_1.default.createElement(RenderEdit, { fields: fields, parentResource: resource }), destroy: react_1.default.createElement(RenderDelete, null) }));
};
exports.default = List;

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
var List = function (props) {
    var resource = props.resource, enableSearch = props.enableSearch, enableCreate = props.enableCreate, enableFilters = props.enableFilters, enableSorting = props.enableSorting, url = props.url, _a = props.query, query = _a === void 0 ? {} : _a, filterUser = props.filterUser, filterTeam = props.filterTeam, filterRelated = props.filterRelated, filterGeo = props.filterGeo, perPage = props.perPage, rest = __rest(props, ["resource", "enableSearch", "enableCreate", "enableFilters", "enableSorting", "url", "query", "filterUser", "filterTeam", "filterRelated", "filterGeo", "perPage"]);
    return (react_1.default.createElement(__1.ListContainer, { resource: resource, url: url, query: query, filterUser: filterUser, filterTeam: filterTeam, filterRelated: filterRelated, filterGeo: filterGeo, perPage: perPage, enableSearch: enableSearch, enableCreate: enableCreate, enableFilters: enableFilters, enableSorting: enableSorting },
        react_1.default.createElement(__1.ListItems, __assign({}, rest, { url: url }))));
};
exports.default = List;

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
var CollectionKanBanList_1 = __importDefault(require("./CollectionKanBanList"));
var CollectionKanBan = function (props) {
    var url = props.url, resource = props.resource, _a = props.headers, headers = _a === void 0 ? [] : _a, fields = props.fields, enableSearch = props.enableSearch, enableCreate = props.enableCreate, filterOptions = props.filterOptions, sortOptions = props.sortOptions, _b = props.query, query = _b === void 0 ? {} : _b, filterUser = props.filterUser, filterTeam = props.filterTeam, perPage = props.perPage, rest = __rest(props, ["url", "resource", "headers", "fields", "enableSearch", "enableCreate", "filterOptions", "sortOptions", "query", "filterUser", "filterTeam", "perPage"]);
    return (react_1.default.createElement(__1.ForeignCollectionContainer, { resource: resource, url: url, query: query, filterUser: filterUser, filterTeam: filterTeam, perPage: perPage, fields: fields, enableSearch: enableSearch, filterOptions: filterOptions },
        react_1.default.createElement(CollectionKanBanList_1.default, __assign({}, rest, { headers: headers, url: url }))));
};
exports.default = CollectionKanBan;

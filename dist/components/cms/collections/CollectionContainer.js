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
var frontend_js_1 = require("frontend-js");
var CollectionContainer = function (props) {
    var resource = props.resource, url = props.url, children = props.children, _a = props.perPage, perPage = _a === void 0 ? 12 : _a, _b = props.filterUser, filterUser = _b === void 0 ? false : _b, _c = props.filterTeam, filterTeam = _c === void 0 ? false : _c, _d = props.filterRelated, filterRelated = _d === void 0 ? false : _d, _e = props.filterGeo, filterGeo = _e === void 0 ? false : _e, _f = props.filterSimilar, filterSimilar = _f === void 0 ? false : _f, _g = props.fields, fields = _g === void 0 ? [] : _g, enableGeoSearch = props.enableGeoSearch, enableSearch = props.enableSearch, enableCreate = props.enableCreate, filterOptions = props.filterOptions, sortOptions = props.sortOptions;
    var _h = (props || {}).query, query = _h === void 0 ? {} : _h;
    if (filterRelated == true && (resource === null || resource === void 0 ? void 0 : resource.id)) {
        query = __assign(__assign({}, query), { belongs_to: resource.id });
    }
    else {
        query = __assign(__assign({}, query), { belongs_to: null });
    }
    if (filterUser == true) {
        query = __assign(__assign({}, query), { current_user: true });
    }
    else {
        query = __assign(__assign({}, query), { current_user: false });
    }
    if (filterTeam == true) {
        query = __assign(__assign({}, query), { current_team: true });
    }
    else {
        query = __assign(__assign({}, query), { current_team: false });
    }
    if (filterGeo == true && (resource === null || resource === void 0 ? void 0 : resource.location)) {
        query = __assign(__assign({}, query), { location: resource === null || resource === void 0 ? void 0 : resource.location });
    }
    if (filterSimilar == true && (resource === null || resource === void 0 ? void 0 : resource.id)) {
        query = __assign(__assign({}, query), { similar_to: resource === null || resource === void 0 ? void 0 : resource.id });
    }
    return (react_1.default.createElement(frontend_js_1.CollectionProvider, { url: url },
        react_1.default.createElement(__1.Query, { query: query, perPage: perPage },
            react_1.default.createElement(__1.CollectionToolbar, { url: url, query: query, perPage: perPage, filterUser: filterUser, filterTeam: filterTeam, enableSearch: enableSearch, enableGeoSearch: enableGeoSearch, filterOptions: filterOptions, sortOptions: sortOptions, enableCreate: enableCreate }),
            children),
        react_1.default.createElement(__1.CollectionFormModal, { fields: fields, resource: resource })));
};
exports.default = CollectionContainer;

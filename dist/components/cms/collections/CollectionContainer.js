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
    var resource = props.resource, url = props.url, children = props.children, _a = props.filterUser, filterUser = _a === void 0 ? false : _a, _b = props.filterTeam, filterTeam = _b === void 0 ? false : _b, _c = props.filterRelated, filterRelated = _c === void 0 ? false : _c, _d = props.fields, fields = _d === void 0 ? [] : _d, _e = props.perPage, perPage = _e === void 0 ? 20 : _e, enableSearch = props.enableSearch, enableCreate = props.enableCreate, filterOptions = props.filterOptions, sortOptions = props.sortOptions;
    var _f = (props || {}).query, query = _f === void 0 ? {} : _f;
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
    return (react_1.default.createElement(frontend_js_1.QueryProvider, { url: url },
        react_1.default.createElement(frontend_js_1.ResourceProvider, { url: url, name: 'document' },
            react_1.default.createElement(__1.Query, { query: query, perPage: perPage },
                react_1.default.createElement(__1.CollectionToolbar, { url: url, query: query, perPage: perPage, filterUser: filterUser, filterTeam: filterTeam, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions, enableCreate: enableCreate }),
                children),
            react_1.default.createElement(__1.ResourceForm, { fields: fields, resource: resource }))));
};
exports.default = CollectionContainer;

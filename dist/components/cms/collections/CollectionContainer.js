"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var CollectionContainer = function (props) {
    var resource = props.resource, url = props.url, children = props.children, query = props.query, _a = props.filterUser, filterUser = _a === void 0 ? false : _a, _b = props.filterTeam, filterTeam = _b === void 0 ? false : _b, _c = props.fields, fields = _c === void 0 ? [] : _c, _d = props.perPage, perPage = _d === void 0 ? 20 : _d, enableSearch = props.enableSearch, enableCreate = props.enableCreate, filterOptions = props.filterOptions, sortOptions = props.sortOptions;
    return (react_1.default.createElement(frontend_js_1.QueryProvider, { url: url },
        react_1.default.createElement(frontend_js_1.ResourceProvider, { url: url, name: 'document' },
            react_1.default.createElement(__1.Query, { query: query, filterUser: filterUser, filterTeam: filterTeam, perPage: perPage },
                react_1.default.createElement(__1.CollectionToolbar, { url: url, query: query, perPage: perPage, filterUser: filterUser, filterTeam: filterTeam, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions, enableCreate: enableCreate }),
                children),
            react_1.default.createElement(__1.ResourceForm, { fields: fields, resource: resource }))));
};
exports.default = CollectionContainer;

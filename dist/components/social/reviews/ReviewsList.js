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
var ReviewItem_1 = __importDefault(require("./ReviewItem"));
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var ReviewsList = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.loading, resources = _a.resources, query = _a.query, setQuery = _a.setQuery, page = _a.page, numPages = _a.numPages;
    var handleLoadMore = function () {
        var perPage = ((query === null || query === void 0 ? void 0 : query.per_page) || 12) + 12;
        setQuery(__assign(__assign({}, query), { per_page: perPage }));
    };
    return (react_1.default.createElement(components_1.DataLayout, { loading: loading },
        !loading && (resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(ReviewItem_1.default, { key: index, resource: resource })); })),
        react_1.default.createElement(components_1.LoadMore, { page: page, numPages: numPages, loadMore: handleLoadMore })));
};
exports.default = ReviewsList;

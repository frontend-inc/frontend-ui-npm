"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var Query = function (props) {
    var url = (0, react_1.useContext)(frontend_js_1.QueryContext).url;
    var _a = props.filterUser, filterUser = _a === void 0 ? false : _a, _b = props.filterTeam, filterTeam = _b === void 0 ? false : _b, _c = props.query, query = _c === void 0 ? {} : _c, _d = props.perPage, perPage = _d === void 0 ? 20 : _d, children = props.children;
    (0, hooks_1.useSearch)({
        url: url,
        perPage: perPage,
        filterUser: filterUser,
        filterTeam: filterTeam,
        query: query,
    });
    return children;
};
exports.default = Query;

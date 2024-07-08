"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var Query = function (props) {
    var url = (0, react_1.useContext)(frontend_js_1.QueryContext).url;
    var _a = props.query, query = _a === void 0 ? {} : _a, _b = props.perPage, perPage = _b === void 0 ? 20 : _b, children = props.children;
    var handleSearch = (0, hooks_1.useSearch)({
        url: url,
        perPage: perPage,
        query: query,
    }).handleSearch;
    (0, react_1.useEffect)(function () {
        if (url && query) {
            handleSearch();
        }
    }, [url, query]);
    return children;
};
exports.default = Query;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var Query = function (props) {
    var url = (0, react_1.useContext)(frontend_js_1.ResourceContext).url;
    var _a = props.query, query = _a === void 0 ? {} : _a, children = props.children;
    var handleSearch = (0, hooks_1.useSearch)({
        url: url,
        query: query,
    }).handleSearch;
    (0, react_1.useEffect)(function () {
        if (url) {
            handleSearch(query === null || query === void 0 ? void 0 : query.keywords, query === null || query === void 0 ? void 0 : query.location);
        }
    }, [url]);
    return children;
};
exports.default = Query;

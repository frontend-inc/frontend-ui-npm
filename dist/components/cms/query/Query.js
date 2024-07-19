"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var Query = function (props) {
    var _a = (0, react_1.useContext)(frontend_js_1.ResourceContext), query = _a.query, setQuery = _a.setQuery, url = _a.url;
    var _b = props.query, defaultQuery = _b === void 0 ? {} : _b, children = props.children;
    (0, react_1.useEffect)(function () {
        setQuery(defaultQuery);
    }, [defaultQuery]);
    (0, frontend_js_1.useQueryContext)({
        url: url,
        query: query,
    });
    return children;
};
exports.default = Query;

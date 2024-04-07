"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var FetchMany = function (props) {
    var children = props.children, url = props.url, _a = props.defaultQuery, defaultQuery = _a === void 0 ? {
        sort_by: 'id',
        sort_direction: 'desc',
        per_page: 20,
        page: 1,
    } : _a;
    var findMany = (0, frontend_js_1.useResourceContext)({
        url: url,
    }).findMany;
    (0, react_1.useEffect)(function () {
        if (url) {
            findMany(defaultQuery);
        }
    }, [url]);
    return children;
};
exports.default = FetchMany;

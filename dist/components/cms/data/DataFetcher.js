"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var DataFetcher = function (props) {
    var children = props.children, query = props.query;
    var findMany = (0, frontend_js_1.useResourceContext)().findMany;
    (0, react_1.useEffect)(function () {
        if (query) {
            findMany(query);
        }
    }, [query]);
    return children;
};
exports.default = DataFetcher;

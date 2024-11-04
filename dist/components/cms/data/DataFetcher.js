'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var DataFetcher = function (props) {
    var children = props.children, query = props.query;
    var _a = (0, frontend_js_1.useResourceContext)(), url = _a.url, findMany = _a.findMany;
    (0, react_1.useEffect)(function () {
        if (query && url) {
            findMany(query);
        }
    }, [query, url]);
    return children;
};
exports.default = DataFetcher;

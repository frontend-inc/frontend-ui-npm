'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var DataFetcher = function (props) {
    var children = props.children, defaultQuery = props.query;
    var _a = (0, frontend_js_1.useResourceContext)(), url = _a.url, query = _a.query, findMany = _a.findMany;
    var mounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (defaultQuery && url && mounted.current == false) {
            mounted.current = true;
            findMany(defaultQuery || {});
        }
    }, [defaultQuery, url]);
    return children;
};
exports.default = DataFetcher;

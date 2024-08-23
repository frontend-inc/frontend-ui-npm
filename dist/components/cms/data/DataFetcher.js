"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var DataFetcher = function (props) {
    var children = props.children, _a = props.query, defaultQuery = _a === void 0 ? {} : _a;
    var setQuery = (0, frontend_js_1.useResourceContext)().setQuery;
    (0, frontend_js_1.useQueryContext)();
    (0, react_1.useEffect)(function () {
        if (defaultQuery) {
            setQuery(defaultQuery);
        }
    }, [defaultQuery]);
    return children;
};
exports.default = DataFetcher;

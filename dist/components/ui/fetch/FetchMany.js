"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("hooks");
var FetchMany = function (props) {
    var children = props.children, url = props.url, _a = props.defaultQuery, defaultQuery = _a === void 0 ? {} : _a;
    var findMany = (0, hooks_1.useResourceContext)({
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

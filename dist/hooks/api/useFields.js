"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var useFields = function (props) {
    var url = (props || {}).url;
    var _a = (0, frontend_js_1.useResource)({
        url: "".concat(url, "/form_fields"),
        name: 'field',
    }), loading = _a.loading, findMany = _a.findMany, formFields = _a.resources;
    (0, react_1.useEffect)(function () {
        if (url) {
            findMany({});
        }
    }, [url]);
    return {
        formFields: formFields,
    };
};
exports.default = useFields;

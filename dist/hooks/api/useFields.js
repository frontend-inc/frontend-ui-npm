"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_js_1 = require("frontend-js");
var useFields = function (props) {
    var url = (props || {}).url;
    var _a = (0, react_1.useState)([]), formFields = _a[0], setFormFields = _a[1];
    var dataFormFields = (0, frontend_js_1.useQuery)({
        url: "".concat(url, "/form_fields"),
        query: {}
    }).resources;
    (0, react_1.useEffect)(function () {
        if (dataFormFields) {
            setFormFields(dataFormFields);
        }
    }, [dataFormFields]);
    return {
        formFields: formFields,
    };
};
exports.default = useFields;

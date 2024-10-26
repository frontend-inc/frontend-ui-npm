'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useError = function (props) {
    var errors = props.errors, name = props.name;
    var _a = (0, react_1.useState)(), error = _a[0], setError = _a[1];
    var clearError = function () {
        setError(null);
    };
    (0, react_1.useEffect)(function () {
        if (errors && errors[name]) {
            setError("".concat(name, " ").concat(errors[name]));
        }
    }, [errors]);
    return {
        error: error,
        clearError: clearError,
    };
};
exports.default = useError;

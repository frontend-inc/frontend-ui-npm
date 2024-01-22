"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var JSONInput = function (props) {
    var errors = props.errors, value = props.value, name = props.name, label = props.label, placeholder = props.placeholder, handleChange = props.handleChange;
    var defaultValue = value ? JSON.stringify(value, null, 2) : "{}";
    var _a = (0, react_1.useState)(defaultValue), jsonValue = _a[0], setJsonValue = _a[1];
    var _b = (0, react_1.useState)({}), jsonError = _b[0], setJsonError = _b[1];
    var isValidJSON = function (str) {
        var _a, _b;
        try {
            if (JSON.parse(str) &&
                (str === "{}" || Object.keys(JSON.parse(str)).length > 0)) {
                return true;
            }
            else {
                setJsonError((_a = {},
                    _a[name] = "Invalid JSON",
                    _a));
                return false;
            }
        }
        catch (e) {
            setJsonError((_b = {},
                _b[name] = "Invalid JSON",
                _b));
            return false;
        }
    };
    var handleJSONChange = function (ev) {
        setJsonError({});
        var value = ev.target.value;
        if (isValidJSON(value)) {
            handleChange({
                target: {
                    name: name,
                    value: JSON.parse(value),
                },
            });
        }
        setJsonValue(value);
    };
    var prettyJson = function (json) {
        if (json.constructor == Object) {
            return JSON.stringify(json, null, 2);
        }
        else {
            return json;
        }
    };
    return (react_1.default.createElement(components_1.TextInput, { errors: __assign(__assign({}, errors), jsonError), multiline: true, rows: 4, value: prettyJson(jsonValue), placeholder: placeholder, handleChange: handleJSONChange, name: name, label: label }));
};
exports.default = JSONInput;

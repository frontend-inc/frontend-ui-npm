'use client';
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
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
function JSONInput(_a) {
    var _b;
    var errors = _a.errors, value = _a.value, name = _a.name, label = _a.label, info = _a.info, placeholder = _a.placeholder, handleChange = _a.handleChange;
    var defaultValue = value ? JSON.stringify(value, null, 2) : '{}';
    var _c = (0, react_1.useState)(defaultValue), jsonValue = _c[0], setJsonValue = _c[1];
    var _d = (0, react_1.useState)(null), jsonError = _d[0], setJsonError = _d[1];
    (0, react_1.useEffect)(function () {
        setJsonValue(value ? JSON.stringify(value, null, 2) : '{}');
    }, [value]);
    var isValidJSON = function (str) {
        try {
            JSON.parse(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    var handleJSONChange = function (e) {
        var newValue = e.target.value;
        setJsonValue(newValue);
        if (isValidJSON(newValue)) {
            setJsonError(null);
            handleChange({
                target: {
                    name: name,
                    value: JSON.parse(newValue),
                },
            });
        }
        else {
            setJsonError('Invalid JSON');
        }
    };
    var allErrors = __assign(__assign({}, errors), (jsonError ? (_b = {}, _b[name] = jsonError, _b) : {}));
    var hasError = Object.keys(allErrors).length > 0;
    return (react_1.default.createElement("div", { className: "w-full" },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(frontend_shadcn_1.Textarea, { className: (0, frontend_shadcn_2.cn)('font-mono', hasError && 'border-red-500 focus-visible:ring-red-500'), value: jsonValue, placeholder: placeholder, onChange: handleJSONChange, name: name, rows: 6 }),
        hasError && react_1.default.createElement(components_1.ErrorText, { error: allErrors[name] })));
}
exports.default = JSONInput;

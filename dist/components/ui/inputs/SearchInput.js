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
var material_1 = require("@mui/material");
var styles_1 = require("./styles");
var use_debounce_1 = require("use-debounce");
var SearchInput = function (props) {
    var _a = props.name, name = _a === void 0 ? 'keywords' : _a, label = props.label, value = props.value, _b = props.placeholder, placeholder = _b === void 0 ? 'Search...' : _b, handleChange = props.handleChange, handleSearch = props.handleSearch, _c = props.styles, styles = _c === void 0 ? {} : _c;
    var _d = (0, react_1.useState)(value), text = _d[0], setText = _d[1];
    var debouncedValue = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    (0, react_1.useEffect)(function () {
        if (debouncedValue !== value) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedValue,
                },
            });
        }
    }, [debouncedValue]);
    (0, react_1.useEffect)(function () {
        if (value !== text) {
            setText(value);
        }
    }, [value]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        label && (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" }, label)),
        react_1.default.createElement(material_1.InputBase, { sx: __assign(__assign(__assign({}, styles_1.sx.inputBase), sx.inputBase), styles), type: "text", fullWidth: true, name: name, placeholder: placeholder, autoComplete: "off", onChange: handleInputChange, value: text, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(text);
                }
            } })));
};
exports.default = SearchInput;
var sx = {
    root: {
        width: '100%',
    },
    inputBase: {
        minWidth: '165px',
        '& input, & .MuiInputBase-inputMultiline': __assign(__assign({}, styles_1.sx.inputBase['& input, & .MuiInputBase-inputMultiline']), { fontSize: function (theme) { return theme.typography.subtitle2.fontSize; }, fontFamily: function (theme) { return theme.typography.subtitle2.fontFamily; } }),
    },
};

'use client';
"use strict";
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
var hooks_1 = require("../../../hooks");
var use_debounce_1 = require("use-debounce");
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
function TextArea(props) {
    var label = props.label, name = props.name, _a = props.value, value = _a === void 0 ? '' : _a, handleChange = props.handleChange, placeholder = props.placeholder, disabled = props.disabled, errors = props.errors, _b = props.debounceDelay, debounceDelay = _b === void 0 ? 350 : _b, _c = props.disableDebounce, disableDebounce = _c === void 0 ? false : _c, _d = props.rows, rows = _d === void 0 ? 3 : _d, className = props.className;
    var _e = (0, react_1.useState)(value), text = _e[0], setText = _e[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, debounceDelay)[0];
    var _f = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _f.error, clearError = _f.clearError;
    var handleTextAreaChange = function (text) {
        clearError();
        setText(text);
        if (disableDebounce) {
            handleChange({
                target: {
                    name: name,
                    value: text
                }
            });
        }
    };
    (0, react_1.useEffect)(function () {
        if (debouncedText !== value) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedText,
                },
            });
        }
    }, [debouncedText]);
    (0, react_1.useEffect)(function () {
        setText(value);
    }, [value]);
    return (react_1.default.createElement(react_3.Textarea, { label: label, className: (0, react_2.cn)(className), name: name, disabled: disabled, placeholder: placeholder || "Enter ".concat(label), onValueChange: handleTextAreaChange, value: text, rows: rows, errorMessage: error }));
}
exports.default = TextArea;

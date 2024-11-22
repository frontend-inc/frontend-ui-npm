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
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var use_debounce_1 = require("use-debounce");
var frontend_shadcn_2 = require("frontend-shadcn");
function TextArea(props) {
    var label = props.label, name = props.name, _a = props.value, value = _a === void 0 ? '' : _a, handleChange = props.handleChange, placeholder = props.placeholder, disabled = props.disabled, errors = props.errors, _b = props.direction, direction = _b === void 0 ? 'column' : _b, info = props.info, _c = props.debounceDelay, debounceDelay = _c === void 0 ? 350 : _c, _d = props.disableDebounce, disableDebounce = _d === void 0 ? false : _d, _e = props.rows, rows = _e === void 0 ? 3 : _e, className = props.className;
    var _f = (0, react_1.useState)(value), text = _f[0], setText = _f[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, debounceDelay)[0];
    var _g = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _g.error, clearError = _g.clearError;
    var handleTextAreaChange = function (e) {
        clearError();
        setText(e.target.value);
        if (disableDebounce) {
            handleChange(e);
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
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_2.cn)('flex flex-col space-y-2 w-full', direction === 'row' && 'sm:flex-row sm:items-start') },
        react_1.default.createElement(__1.InputLabel, { label: label, info: info }),
        react_1.default.createElement("div", { className: "relative w-full flex flex-col space-y-2" },
            react_1.default.createElement(frontend_shadcn_1.Textarea, { className: (0, frontend_shadcn_2.cn)('bg-background focus:ring-2 focus:ring-offset-3', 'w-full resize-none min-w-[230px]', error && 'ring-2 ring-destructive ring-offset-3', className), name: name, disabled: disabled, placeholder: placeholder, onChange: handleTextAreaChange, value: text, rows: rows }),
            react_1.default.createElement(__1.ErrorText, { error: error }))));
}
exports.default = TextArea;

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
function TextArea(_a) {
    var label = _a.label, name = _a.name, _b = _a.value, value = _b === void 0 ? '' : _b, handleChange = _a.handleChange, placeholder = _a.placeholder, disabled = _a.disabled, errors = _a.errors, _c = _a.direction, direction = _c === void 0 ? 'column' : _c, info = _a.info, _d = _a.debounceDelay, debounceDelay = _d === void 0 ? 350 : _d, _e = _a.disableDebounce, disableDebounce = _e === void 0 ? false : _e, _f = _a.rows, rows = _f === void 0 ? 3 : _f;
    var _g = (0, react_1.useState)(value), text = _g[0], setText = _g[1];
    var debouncedText = (0, use_debounce_1.useDebounce)(text, debounceDelay)[0];
    var _h = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _h.error, clearError = _h.clearError;
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
        react_1.default.createElement("div", { className: "relative w-full" },
            react_1.default.createElement(frontend_shadcn_1.Textarea, { className: (0, frontend_shadcn_2.cn)('focus:ring-2 focus:ring-offset-3', 'w-full resize-none min-w-[230px]', error && 'border-destructive'), name: name, disabled: disabled, placeholder: placeholder, onChange: handleTextAreaChange, value: text, rows: rows }),
            react_1.default.createElement(__1.ErrorText, { error: error }))));
}
exports.default = TextArea;

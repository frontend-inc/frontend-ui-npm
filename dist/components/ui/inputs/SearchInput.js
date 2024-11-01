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
var use_debounce_1 = require("use-debounce");
var lucide_react_1 = require("lucide-react");
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var core_1 = require("../../core");
var SearchInput = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'keywords' : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, value = _a.value, _d = _a.placeholder, placeholder = _d === void 0 ? 'Search...' : _d, handleChange = _a.handleChange, handleSearch = _a.handleSearch;
    var _e = (0, react_1.useState)(value), text = _e[0], setText = _e[1];
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
    }, [debouncedValue, handleChange, name, value]);
    (0, react_1.useEffect)(function () {
        if (value !== text) {
            setText(value);
        }
    }, [value]);
    return (react_1.default.createElement("div", { className: "max-w-[400px] w-full" },
        react_1.default.createElement("form", { onSubmit: function (e) {
                e.preventDefault();
                handleSearch(text);
            }, className: (0, frontend_shadcn_1.cn)('flex items-center w-full border border-input rounded-md transition-shadow hover:shadow-md', fullWidth ? 'w-full' : 'max-w-[400px] min-w-[280px] sm:min-w-full') },
            react_1.default.createElement(frontend_shadcn_2.Input, { type: "text", placeholder: placeholder, value: text, onChange: handleInputChange, className: "text-foreground flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0" }),
            react_1.default.createElement("div", { className: "h-7 border-l border-input" }),
            react_1.default.createElement(core_1.IconButton, { className: "m-1", onClick: function () { return handleSearch(text); } },
                react_1.default.createElement(lucide_react_1.Search, { className: "h-5 w-5 text-foreground" }),
                react_1.default.createElement("span", { className: "sr-only" }, "Search")))));
};
exports.default = SearchInput;

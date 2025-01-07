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
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var SearchInput = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Search' : _a, _b = props.name, name = _b === void 0 ? 'keywords' : _b, _c = props.fullWidth, fullWidth = _c === void 0 ? false : _c, value = props.value, _d = props.placeholder, placeholder = _d === void 0 ? 'Search...' : _d, handleChange = props.handleChange, handleSearch = props.handleSearch;
    var _e = (0, react_1.useState)(value), text = _e[0], setText = _e[1];
    var debouncedValue = (0, use_debounce_1.useDebounce)(text, 350)[0];
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    (0, react_1.useEffect)(function () {
        handleChange({
            target: {
                name: name,
                value: debouncedValue,
            },
        });
    }, [debouncedValue]);
    return (react_1.default.createElement("form", { className: 'w-full', onSubmit: function (e) {
            e.preventDefault();
            handleSearch(text);
        } },
        react_1.default.createElement(react_2.Input, { fullWidth: true, label: label, className: fullWidth ? 'w-full' : 'max-w-screen-sm', placeholder: placeholder, value: text, onChange: handleInputChange, endContent: react_1.default.createElement(react_2.Button, { variant: "light", isIconOnly: true, onPress: function () { return handleSearch(text); }, className: "text-foreground" },
                react_1.default.createElement(components_1.RemixIcon, { name: "ri-search-line", className: "text-foreground" })) })));
};
exports.default = SearchInput;

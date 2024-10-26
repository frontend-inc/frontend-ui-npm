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
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var use_click_outside_1 = require("@raddix/use-click-outside");
function AutocompleteInput(_a) {
    var _b = _a.name, name = _b === void 0 ? 'title' : _b, _c = _a.value, value = _c === void 0 ? '' : _c, label = _a.label, _d = _a.placeholder, placeholder = _d === void 0 ? 'Search' : _d, handleChange = _a.handleChange, handleInputChange = _a.handleInputChange, _e = _a.options, options = _e === void 0 ? [] : _e, _f = _a.direction, direction = _f === void 0 ? 'column' : _f, info = _a.info;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var handleClick = function (option) {
        setOpen(false);
        handleChange({
            target: {
                name: name,
                value: option === null || option === void 0 ? void 0 : option.value,
            },
        });
    };
    var handleKeywordChange = function (ev) {
        var value = ev.target.value;
        handleInputChange(value);
        if ((options === null || options === void 0 ? void 0 : options.length) > 0)
            setOpen(true);
        if (value == '') {
            setOpen(false);
        }
    };
    (0, use_click_outside_1.useClickOutside)(wrapperRef, function () { return setOpen(false); });
    return (react_1.default.createElement("div", { className: "w-full relative", ref: wrapperRef },
        react_1.default.createElement(__1.TextInput, { name: name, label: label, value: value, options: options, handleChange: handleKeywordChange, direction: direction, placeholder: placeholder, info: info }),
        open && options.length > 0 && (react_1.default.createElement("div", { className: "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto" }, options.map(function (option, index) { return (react_1.default.createElement("div", { key: index, onClick: function () { return handleClick(option); }, className: "flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100" },
            react_1.default.createElement("div", { className: "mr-2 flex-shrink-0" },
                (option === null || option === void 0 ? void 0 : option.image) && (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: "h-8 w-8" },
                    react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: option.image, alt: option.label }),
                    react_1.default.createElement(frontend_shadcn_1.AvatarFallback, null, option.label[0]))),
                (option === null || option === void 0 ? void 0 : option.icon) && (react_1.default.createElement(__1.Icon, { name: option.icon, className: "h-5 w-5" }))),
            react_1.default.createElement("span", { className: "flex-grow text-sm" }, option.label))); })))));
}
exports.default = AutocompleteInput;

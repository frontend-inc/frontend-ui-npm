'use client';
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var react_2 = require("@nextui-org/react");
function TextField(_a) {
    var label = _a.label, helperText = _a.helperText, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, className = _a.className, id = _a.id, name = _a.name, value = _a.value, handleChange = _a.handleChange, placeholder = _a.placeholder, _d = _a.type, type = _d === void 0 ? 'text' : _d, props = __rest(_a, ["label", "helperText", "error", "fullWidth", "className", "id", "name", "value", "handleChange", "placeholder", "type"]);
    var inputId = id || name || (label === null || label === void 0 ? void 0 : label.toLowerCase().replace(/\s+/g, '-'));
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex flex-col space-y-2', fullWidth && 'w-full') },
        label && (react_1.default.createElement(frontend_shadcn_2.Label, { htmlFor: inputId, className: (0, react_2.cn)('text-sm font-medium', error ? 'text-destructive' : 'text-foreground') }, label)),
        react_1.default.createElement(frontend_shadcn_1.Input, { id: inputId, name: name, value: value, onChange: handleChange, type: type, placeholder: placeholder, className: (0, react_2.cn)('text-foreground', 'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', error && 'border-destructive focus:ring-destructive', fullWidth && 'w-full', className) }),
        helperText && (react_1.default.createElement("p", { className: (0, react_2.cn)('text-sm', error ? 'text-destructive' : 'text-foreground/70') }, helperText))));
}
exports.TextField = TextField;

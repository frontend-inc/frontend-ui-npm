'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var Heading = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, _c = _a.textVariant, textVariant = _c === void 0 ? 'h4' : _c, secondaryAction = _a.secondaryAction;
    if (!title && !description && !label)
        return null;
    return (react_1.default.createElement("div", { className: "p-4 w-full flex justify-between items-center flex-col sm:flex-row" },
        react_1.default.createElement("div", { className: "w-full flex flex-col justify-between" },
            react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
                label && (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)(textAlign === 'center' && 'text-center', textAlign === 'right' && 'text-right') },
                    react_1.default.createElement(components_1.Label, { variant: "outline", label: label }))),
                title && (react_1.default.createElement(core_1.Typography, { variant: textVariant, textAlign: textAlign }, title)),
                description && (react_1.default.createElement(core_1.Typography, { variant: "body1", className: "text-muted-foreground", textAlign: textAlign }, description))),
            secondaryAction)));
};
exports.default = Heading;

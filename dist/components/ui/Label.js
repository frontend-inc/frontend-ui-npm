'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Label = function (props) {
    var label = props.label, textAlign = props.textAlign, className = props.className;
    var textAlignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    if (!label)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('text-xs text-foreground font-semibold uppercase tracking-wider', textAlign && textAlignClasses[textAlign], className) }, label));
};
exports.default = Label;

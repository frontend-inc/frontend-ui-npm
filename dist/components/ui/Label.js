'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
var Label = function (props) {
    var children = props.children, textAlign = props.textAlign, className = props.className;
    var textAlignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    if (!children)
        return null;
    return (react_1.default.createElement(frontend_shadcn_1.Badge, { variant: 'outline', className: (0, frontend_shadcn_2.cn)('px-3 py-1 text-xs tracking-wider', textAlign && textAlignClasses[textAlign], className) }, children));
};
exports.default = Label;

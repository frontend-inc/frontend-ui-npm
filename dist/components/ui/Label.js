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
    var label = props.label, variant = props.variant, className = props.className;
    if (!label)
        return null;
    return (react_1.default.createElement(frontend_shadcn_1.Badge, { variant: variant, className: (0, frontend_shadcn_2.cn)('px-4', className) }, label));
};
exports.default = Label;

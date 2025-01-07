'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var react_2 = require("@nextui-org/react");
var Label = function (props) {
    var children = props.children, textAlign = props.textAlign, className = props.className;
    var textAlignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    if (!children)
        return null;
    return (react_1.default.createElement(components_1.Typography, { variant: "caption", className: (0, react_2.cn)('px-3 py-1 text-xs tracking-wider text-foreground', textAlign && textAlignClasses[textAlign], className) }, children));
};
exports.default = Label;

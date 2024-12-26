'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
//@ts-ignore
var react_markdown_1 = __importDefault(require("react-markdown"));
var frontend_shadcn_1 = require("frontend-shadcn");
var FieldMarkdown = function (props) {
    var value = props.value, label = props.label, className = props.className;
    return (react_1.default.createElement(__1.FieldWrapper, { label: label },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('prose', className) },
            react_1.default.createElement(react_markdown_1.default, null, value))));
};
exports.default = FieldMarkdown;

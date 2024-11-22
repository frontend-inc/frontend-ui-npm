'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_shadcn_1 = require("frontend-shadcn");
var FieldHTML = function (props) {
    var value = props.value, label = props.label, className = props.className;
    return (react_1.default.createElement(__1.FieldWrapper, { label: label },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('prose w-full', className) },
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: value } }))));
};
exports.default = FieldHTML;

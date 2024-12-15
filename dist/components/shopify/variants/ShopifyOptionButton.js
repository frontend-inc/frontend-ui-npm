'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var frontend_shadcn_1 = require("frontend-shadcn");
var ShopifyOptionButton = function (props) {
    var value = props.value, name = props.name, active = props.active, handleClick = props.handleClick, children = props.children, width = props.width, justifyContent = props.justifyContent;
    return (react_1.default.createElement(components_1.Button, { className: (0, frontend_shadcn_1.cn)('whitespace-nowrap', active ? 'opacity-100' : 'opacity-80', width && "w-".concat(width), justifyContent && "justify-".concat(justifyContent)), variant: active ? 'default' : 'secondary', onClick: function () { return handleClick(name, value); } }, children));
};
exports.default = ShopifyOptionButton;

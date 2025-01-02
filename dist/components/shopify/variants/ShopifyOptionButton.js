'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var ShopifyOptionButton = function (props) {
    var value = props.value, name = props.name, active = props.active, handleClick = props.handleClick, children = props.children, width = props.width, justifyContent = props.justifyContent;
    return (react_1.default.createElement(react_2.Button, { variant: active ? 'solid' : 'ghost', onPress: function () { return handleClick(name, value); } }, children));
};
exports.default = ShopifyOptionButton;

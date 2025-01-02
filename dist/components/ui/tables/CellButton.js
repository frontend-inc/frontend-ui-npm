'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var CellButton = function (props) {
    var children = props.children, icon = props.icon, handleClick = props.handleClick;
    return (react_1.default.createElement(react_2.Button, { fullWidth: true, size: "sm", variant: "ghost", startContent: react_1.default.createElement(components_1.RemixIcon, { name: icon }), onPress: handleClick && handleClick }, children));
};
exports.default = CellButton;

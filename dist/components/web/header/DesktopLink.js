'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var DesktopLink = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var onClick = (0, hooks_1.useNavigate)({
        url: menuItem.url,
        path: menuItem.path,
        handleClick: handleClick,
    });
    return (react_1.default.createElement(components_1.Button, { variant: "ghost", className: "text-muted-foreground hover:text-foreground hover:bg-transparent", 
        // @ts-ignore
        onClick: onClick }, menuItem.label));
};
exports.default = DesktopLink;

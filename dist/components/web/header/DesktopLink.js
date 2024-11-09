'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var hooks_1 = require("../../../hooks");
var DesktopLink = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var onClick = (0, hooks_1.useNavigate)({
        url: menuItem.url,
        path: menuItem.path,
        handleClick: handleClick,
    });
    return (
    //@ts-ignore
    react_1.default.createElement(core_1.Button, { variant: "ghost", className: "text-foreground", onClick: onClick }, menuItem.label));
};
exports.default = DesktopLink;

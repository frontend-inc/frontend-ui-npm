'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var MobileDrawerLink = function (props) {
    var menuItem = props.menuItem, handleClick = props.handleClick;
    var handleMenuClick = function (menuItem) {
        if ((menuItem === null || menuItem === void 0 ? void 0 : menuItem.link_type) == 'url') {
            window.open(menuItem.url, '_blank');
        }
        else {
            handleClick(menuItem.path);
        }
    };
    return (react_1.default.createElement(components_1.Button, { fullWidth: true, variant: "ghost", className: "justify-start text-foreground", onClick: function () { return handleMenuClick(menuItem); } }, menuItem.label));
};
exports.default = MobileDrawerLink;

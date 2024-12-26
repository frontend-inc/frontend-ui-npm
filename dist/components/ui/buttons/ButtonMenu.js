'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var navigation_1 = require("next/navigation");
var ButtonMenu = function (props) {
    var onClick = props.onClick, url = props.url, path = props.path, label = props.label, icon = props.icon;
    var router = (0, navigation_1.useRouter)();
    var handleClick = function (event) {
        if (onClick) {
            onClick(event);
        }
        else {
            if (url) {
                window.open(url, '_blank');
            }
            else if (path) {
                router.push(path);
            }
        }
    };
    return (react_1.default.createElement("button", { onClick: handleClick, className: "flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none" },
        icon && (react_1.default.createElement("span", { className: "mr-2" },
            react_1.default.createElement(components_1.RemixIcon, { name: icon }))),
        label));
};
exports.default = ButtonMenu;

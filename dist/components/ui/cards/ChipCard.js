'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var ChipCard = function (props) {
    var primary = props.primary, secondary = props.secondary, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image;
    return (react_1.default.createElement("ul", { className: "my-0 p-0 border-b border-divider" },
        react_1.default.createElement("li", { className: "p-0" },
            react_1.default.createElement(components_1.Button, { variant: "ghost", className: "w-full justify-start p-1 min-h-[48px] hover:bg-transparent", onClick: handleClick },
                react_1.default.createElement("div", { className: "mr-2 h-12 w-12" },
                    react_1.default.createElement(__1.AvatarImage, { src: image, alt: primary })),
                react_1.default.createElement("div", { className: "flex flex-col items-start" },
                    react_1.default.createElement("span", { className: "text-sm font-medium" }, primary),
                    secondary && (react_1.default.createElement("span", { className: "text-xs text-muted-foreground" }, secondary)))),
            secondaryAction && (react_1.default.createElement("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2" }, secondaryAction)))));
};
exports.default = ChipCard;

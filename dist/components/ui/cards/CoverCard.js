'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var components_1 = require("../../../components");
var CoverCard = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement(react_2.Card, { isFooterBlurred: true },
        react_1.default.createElement(__1.Image, { disableBorderRadius: true, label: label, src: image, alt: title, aspectRatio: 0.8, handleClick: handleClick, enableGradient: enableGradient, enableOverlay: enableOverlay }),
        react_1.default.createElement(react_2.CardFooter, { className: "dark absolute bottom-0 left-0 w-full p-4 z-20" },
            react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-white text-ellipsis" },
                react_1.default.createElement(components_1.Typography, { variant: "subtitle1" }, title),
                react_1.default.createElement(components_1.Typography, { variant: "body2" }, subtitle),
                react_1.default.createElement("div", { className: "flex flex-row justify-between" },
                    actions,
                    secondaryAction)))));
};
exports.default = CoverCard;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var core_1 = require("../../core");
var CoverCard = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("div", { className: "dark" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative flex flex-col overflow-hidden w-full rounded') },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(__1.Image, { label: label, src: image, height: 340, alt: title, aspectRatio: 4 / 5, className: 'w-full', enableGradient: enableGradient, enableOverlay: enableOverlay })),
            react_1.default.createElement("div", { className: "absolute bottom-0 left-0 z-10 w-full p-3" },
                react_1.default.createElement("div", { className: "flex flex-col justify-between items-end w-full" },
                    react_1.default.createElement("div", { className: "w-full" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, title),
                        react_1.default.createElement(core_1.Typography, { variant: "body2" }, subtitle),
                        react_1.default.createElement("div", { className: "flex flex-row justify-between" },
                            actions,
                            secondaryAction)))))));
};
exports.default = CoverCard;

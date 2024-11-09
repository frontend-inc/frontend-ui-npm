'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var HeroAvatar = function (props) {
    var _a = props || {}, image = _a.image, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, secondaryAction = _a.secondaryAction, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement("div", { className: "w-full flex flex-row justify-center" },
        react_1.default.createElement("div", { className: "container mx-auto w-full max-w-screen-sm flex flex-col space-y-2 justify-center overflow-hidden" },
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1 justify-center" }, secondaryAction),
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6 justify-start items-center" },
                react_1.default.createElement("div", { className: "w-full sm:w-[160px] flex flex-col space-y-3" },
                    react_1.default.createElement("div", { className: "w-full h-full rounded flex justify-center items-center" },
                        react_1.default.createElement(__1.AvatarImage, { src: image, alt: title, size: 160, enableGradient: enableGradient, enableOverlay: enableOverlay })),
                    actions),
                react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1" },
                    react_1.default.createElement(__1.Typography, { variant: "h3", className: "text-center" }, title),
                    react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-center" }, subtitle))))));
};
exports.default = HeroAvatar;

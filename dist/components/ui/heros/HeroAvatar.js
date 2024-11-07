'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var HeroAvatar = function (props) {
    var _a = props || {}, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
    } : _b;
    return (react_1.default.createElement("div", { className: "w-full flex flex-row justify-center" },
        react_1.default.createElement("div", { className: "container mx-auto w-full max-w-screen-sm flex flex-col space-y-2 justify-center overflow-hidden" },
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1 justify-center" }, secondaryAction),
            react_1.default.createElement("div", { className: "w-full flex flex-col space-y-6 justify-start items-center" },
                react_1.default.createElement("div", { className: "w-full sm:w-[160px] flex flex-col space-y-3" },
                    react_1.default.createElement("div", { className: "w-full h-full rounded flex justify-center items-center" },
                        react_1.default.createElement(__1.AvatarImage, __assign({ src: image, alt: typeof primary === 'string' ? primary : 'Avatar', size: 160 }, slots.image))),
                    actions),
                react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1" },
                    react_1.default.createElement(__1.Typography, { variant: "h3", className: "text-center" }, primary),
                    react_1.default.createElement(__1.Typography, { variant: "body1", className: "text-center" }, secondary))))));
};
exports.default = HeroAvatar;

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
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 justify-center overflow-hidden" },
        react_1.default.createElement("div", { className: "w-full flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 justify-center sm:justify-end" }, secondaryAction),
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center rounded" },
            react_1.default.createElement("div", { className: "w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-start items-center sm:items-start" },
                react_1.default.createElement("div", { className: "w-full sm:w-[200px] flex flex-col space-y-4" },
                    react_1.default.createElement("div", { className: "w-full h-full rounded flex justify-center items-center" },
                        react_1.default.createElement(__1.AvatarImage, __assign({ image: image, alt: typeof primary === 'string' ? primary : 'Avatar', height: 200 }, slots.image))),
                    actions),
                react_1.default.createElement("div", { className: "w-full flex flex-col space-y-1" },
                    react_1.default.createElement("h4", { className: "text-foreground text-2xl font-bold" }, primary),
                    secondary)))));
};
exports.default = HeroAvatar;

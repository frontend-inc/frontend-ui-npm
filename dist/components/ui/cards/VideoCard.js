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
var react_2 = require("@nextui-org/react");
var react_3 = require("@remixicon/react");
function VideoCard(_a) {
    var avatar = _a.avatar, primary = _a.primary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.slots, slots = _b === void 0 ? {
        item: {},
        image: {},
    } : _b;
    return (react_1.default.createElement("div", { className: "dark" },
        react_1.default.createElement("div", __assign({ className: (0, react_2.cn)('relative flex flex-col overflow-hidden rounded', 'transition-shadow duration-300 hover:shadow-md', "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2", 'after:bg-gradient-to-t after:from-black/50 after:to-transparent') }, slots.item),
            react_1.default.createElement(__1.Image, __assign({ src: image, height: 360, alt: primary, handleClick: handleClick, className: "w-full h-auto" }, slots.image)),
            react_1.default.createElement("button", { className: (0, react_2.cn)('absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', 'flex items-center justify-center', 'w-10 h-10 rounded-full bg-black/50'), onClick: handleClick },
                react_1.default.createElement(react_3.RiPlayCircleFill, { className: "text-white" })),
            react_1.default.createElement("div", { className: "absolute top-2.5 right-2.5 flex flex-row justify-end" }, secondaryAction),
            avatar && (react_1.default.createElement("div", { className: "absolute bottom-2.5 left-2.5 flex flex-row justify-end" }, avatar)))));
}
exports.default = VideoCard;

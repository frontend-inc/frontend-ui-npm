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
var frontend_shadcn_1 = require("frontend-shadcn");
var __1 = require("../..");
var core_1 = require("../../core");
var CoverCard = function (props) {
    var _a = props || {}, label = _a.label, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.slots, slots = _b === void 0 ? {
        item: {},
        image: {},
    } : _b;
    return (react_1.default.createElement("div", { className: "dark" },
        react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('relative flex flex-col overflow-hidden w-full rounded') },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                react_1.default.createElement(__1.Image, __assign({ label: label, src: image, height: 340, alt: primary, aspectRatio: 4 / 5, className: (0, frontend_shadcn_1.cn)('w-full', slots.image.className) }, slots.image))),
            react_1.default.createElement("div", { className: "absolute bottom-0 left-0 z-10 w-full p-3" },
                react_1.default.createElement("div", { className: "flex flex-col justify-between items-end w-full" },
                    react_1.default.createElement("div", { className: "w-full" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, primary),
                        react_1.default.createElement(core_1.Typography, { variant: "body2" }, secondary),
                        react_1.default.createElement("div", { className: "flex flex-row justify-between" },
                            actions,
                            secondaryAction)))))));
};
exports.default = CoverCard;

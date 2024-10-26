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
var core_1 = require("../../core");
var HeroCard = function (props) {
    var _a = props || {}, label = _a.label, image = _a.image, primary = _a.primary, secondary = _a.secondary, actions = _a.actions, secondaryAction = _a.secondaryAction, _b = _a.slots, slots = _b === void 0 ? {
        image: {},
    } : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2 overflow-hidden" },
        secondaryAction,
        react_1.default.createElement("div", { className: "w-full flex justify-center items-center" },
            react_1.default.createElement("div", { className: "w-full flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0 md:space-x-4 justify-start items-center md:items-start" },
                react_1.default.createElement("div", { className: "w-full md:w-1/2 flex flex-col gap-2" },
                    react_1.default.createElement(__1.Image, __assign({ src: image, alt: typeof primary === 'string' ? primary : 'Hero image', label: label, aspectRatio: 4 / 3 }, slots.image)),
                    actions),
                react_1.default.createElement("div", { className: "w-full md:w-1/2 max-w-full md:max-w-[500px] flex flex-col space-y-2" },
                    react_1.default.createElement(core_1.Typography, { variant: "h4" }, primary),
                    secondary)))));
};
exports.default = HeroCard;
